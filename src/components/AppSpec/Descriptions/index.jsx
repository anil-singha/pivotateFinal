/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: Descriptions

import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import DescriptionCreationForm from '../DescriptionCreationForm';
import Description from '../Description';

// ns__custom_start unit: appSpec, comp: Descriptions, loc: addedImports
// ns__custom_end unit: appSpec, comp: Descriptions, loc: addedImports

const DescriptionsStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: Descriptions, loc: styling
  // ns__custom_end unit: appSpec, comp: Descriptions, loc: styling
`;

class Descriptions extends Component {
  // ns__custom_start unit: appSpec, comp: Descriptions, loc: beginning
  // ns__custom_end unit: appSpec, comp: Descriptions, loc: beginning

  state = {
    selectedDescriptionId: null,
    // ns__custom_start unit: appSpec, comp: Descriptions, loc: addedState
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: addedState
  };

  wrapperRef = createRef();

  componentDidMount() {
    // ns__custom_start unit: appSpec, comp: Descriptions, loc: componentDidMount
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: componentDidMount
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    // ns__custom_start unit: appSpec, comp: Descriptions, loc: componentWillUnmount
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: componentWillUnmount
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedDescriptionId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedDescriptionId: id });

  render() {
    const { appId, descriptions, refetchQueries, onUpdate } = this.props;

    const { selectedDescriptionId } = this.state;

    // ns__custom_start unit: appSpec, comp: Descriptions, loc: renderBeginning
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: renderBeginning

    return (
      <DescriptionsStyleWrapper
        ref={this.wrapperRef}
        onClick={this.handleClick}
      >
        <DescriptionCreationForm
          parentId={appId}
          refetchQueries={refetchQueries}
          // ns__custom_start unit: appSpec, comp: Descriptions, loc: addedPropsForCreationForm
          // ns__custom_end unit: appSpec, comp: Descriptions, loc: addedPropsForCreationForm
        />

        {/* ns__start_section listElements */}
        {descriptions.map((description) => (
          <Description
            key={v4()}
            description={description}
            selected={description.id === selectedDescriptionId}
            onUpdate={onUpdate}
            parentId={appId}
            refetchQueries={refetchQueries}
            onSelect={this.handleSelect}
            // ns__custom_start unit: appSpec, comp: Descriptions, loc: addedPropsForChildren
            // ns__custom_end unit: appSpec, comp: Descriptions, loc: addedPropsForChildren
          />
        ))}
        {/* ns__end_section listElements */}

        {/* ns__custom_start unit: appSpec, comp: Descriptions, loc: renderEnding */}
        {/* ns__custom_end unit: appSpec, comp: Descriptions, loc: renderEnding */}
      </DescriptionsStyleWrapper>
    );
  }
}

export default Descriptions;
