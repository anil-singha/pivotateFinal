/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appInfo, comp: InfoTypes

// ns__custom_start unit: appInfo, comp: InfoTypes, loc: beforeImports

// ns__custom_end unit: appInfo, comp: InfoTypes, loc: beforeImports

import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import _ from 'lodash';
import InfoTypeCreationForm from '../InfoTypeCreationForm';
import InfoType from '../InfoType';

// ns__custom_start unit: appInfo, comp: InfoTypes, loc: addedImports
import getChildData from '../../../custom/getChildData';
import { Context as UnitDataContext } from '../../../custom/UnitDataContext';
import SubInfoTypeCreationForm from '../../../custom/SubInfoTypeCreationForm';

// ns__custom_end unit: appInfo, comp: InfoTypes, loc: addedImports

// ns__custom_start unit: appInfo, comp: InfoTypes, loc: styling

const InfoTypesStyleWrapper = styled.div`
  margin: 0 0 0 7%;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
`;
// ns__custom_end unit: appInfo, comp: InfoTypes, loc: styling

class InfoTypes extends Component {
  // ns__custom_start unit: appInfo, comp: InfoTypes, loc: beginning
  static contextType = UnitDataContext;

  // ns__custom_end unit: appInfo, comp: InfoTypes, loc: beginning
  state = {
    selectedInfoTypeId: null,
    // ns__custom_start unit: appInfo, comp: InfoTypes, loc: addedState
    childState: [],
    parentState: [],
    subInfoTypeValueCount: 0,
    // ns__custom_end unit: appInfo, comp: InfoTypes, loc: addedState
  };

  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    // ns__custom_start unit: appInfo, comp: InfoTypes, loc: componentDidMount
    const { childState, parentState } = this.state;
    const { infoTypes } = this.props;

    if (!childState.length || !parentState.length) {
      const [parentData, childData] = getChildData(infoTypes);

      this.setState({
        childState: childData,
        parentState: parentData,
        subInfoTypeValueCount: 0,
      });
    }

    // ns__custom_end unit: appInfo, comp: InfoTypes, loc: componentDidMount
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
    // ns__custom_start unit: appInfo, comp: InfoTypes, loc: componentWillUnmount
    // ns__custom_end unit: appInfo, comp: InfoTypes, loc: componentWillUnmount
  }

  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedInfoTypeId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedInfoTypeId: id });

  /* ns__custom_start unit: appInfo, comp: InfoTypes, loc: beforeRender */
  onChangeHelper = (value) => {
    this.setState({ subInfoTypeValueCount: value.length });
  };

  /* ns__custom_end unit: appInfo, comp: InfoTypes, loc: beforeRender */

  render() {
    const { screenId, infoTypes, refetchQueries, onUpdate } = this.props;
    const { selectedInfoTypeId } = this.state;

    /* ns__custom_start unit: appInfo, comp: InfoTypes, loc: renderBeginning */
    const { label } = this.props;
    const validateInfoTypes = infoTypes.length;

    const { childState, parentState, subInfoTypeValueCount } = this.state;
    const [data] = getChildData(parentState);

    /* ns__custom_end unit: appInfo, comp: InfoTypes, loc: renderBeginning */
    // ns__start_section return
    return (
      <>
        <InfoTypesStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
          {/* ns__custom_start unit: appInfo, comp: InfoTypes, loc: addedValidation */}
          {parentState.map((infoType) => {
            if (infoType.parentId) return;
            {
              /* ns__custom_end unit: appInfo, comp: InfoTypes, loc: addedValidation */
            }
            return (
              <InfoType
                key={v4()}
                infoType={infoType}
                selected={infoType.id === selectedInfoTypeId}
                onUpdate={onUpdate}
                parentId={screenId}
                refetchQueries={refetchQueries}
                onSelect={this.handleSelect}
                /* ns__custom_start unit: appInfo, comp: InfoTypes, loc: addedPropsForChildren */
                hasParentId={infoType.parentId}
                childState={childState}
                onChange={this.onChangeHelper}
                /* ns__custom_end unit: appInfo, comp: InfoTypes, loc: addedPropsForChildren */
              />
            );
          })}

          {/* ns__custom_start unit: appInfo, comp: InfoTypes, loc: renderEnding */}
          {/* ns__custom_end unit: appInfo, comp: InfoTypes, loc: renderEnding */}
        </InfoTypesStyleWrapper>
        <InfoTypeCreationForm
          parentId={screenId}
          refetchQueries={refetchQueries}
          // ns__custom_start unit: appInfo, comp: InfoTypes, loc: addedPropsForCreationForm
          label={label}
          validateInfoTypes={validateInfoTypes}
          onChange={this.onChangeHelper}
        />
        {console.log('subInfoTypeValueCount', subInfoTypeValueCount)}
        {subInfoTypeValueCount >= 3 ? (
          <SubInfoTypeCreationForm
            disabled
            validateSubInfoTypes={0}
            textLabel='What is the sub Info Type fo...'
            subInfoTypeValueCount={subInfoTypeValueCount}
            label={label}
          />
        ) : null}
      </>
    );
    // ns__end_section return
  }
}

export default InfoTypes;
