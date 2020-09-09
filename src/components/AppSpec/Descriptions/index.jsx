/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: Descriptions

// ns__custom_start unit: appSpec, comp: Descriptions, loc: beforeImports
// ns__custom_end unit: appSpec, comp: Descriptions, loc: beforeImports

// ns__start_section imports
import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import DescriptionCreationForm from '../DescriptionCreationForm';
import Description from '../Description';
// ns__custom_start unit: appSpec, comp: Descriptions, loc: addedImports
// ns__custom_end unit: appSpec, comp: Descriptions, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const DescriptionsStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: Descriptions, loc: styling
  // ns__custom_end unit: appSpec, comp: Descriptions, loc: styling
`;

// ns__end_section stylingSection

// ns__start_replacement button
// ns__end_replacement button

// ns__custom_start unit: appSpec, comp: Descriptions, loc: beforeFunction
// ns__custom_end unit: appSpec, comp: Descriptions, loc: beforeFunction

// ns__start_section function
class Descriptions extends Component {
  // ns__custom_start unit: appSpec, comp: Descriptions, loc: beginning
  // ns__custom_end unit: appSpec, comp: Descriptions, loc: beginning
  state = {
    selectedDescriptionId: null,
    // ns__custom_start unit: appSpec, comp: Descriptions, loc: addedState
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: addedState
  };

  wrapperRef = createRef();

  // ns__start_section didMount
  componentDidMount() {
    // ns__custom_start unit: appSpec, comp: Descriptions, loc: componentDidMount
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: componentDidMount
    document.addEventListener('mousedown', this.handleClick);
  }
  // ns__end_section didMount

  // ns__start_section willMount
  componentWillUnmount() {
    // ns__custom_start unit: appSpec, comp: Descriptions, loc: componentWillUnmount
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: componentWillUnmount
    document.removeEventListener('mousedown', this.handleClick);
  }
  // ns__end_section willMount

  // ns__start_section handleClick
  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedDescriptionId: null });
    }
  };
  // ns__end_section handleClick

  // ns__start_section handleSelect
  handleSelect = (id) => this.setState({ selectedDescriptionId: id });
  // ns__end_section handleSelect

  // ns__custom_start unit: appSpec, comp: Descriptions, loc: beforeRender
  // ns__custom_end unit: appSpec, comp: Descriptions, loc: beforeRender

  // ns__start_section render
  render() {
    const { appId, descriptions, refetchQueries, onUpdate } = this.props;

    const { selectedDescriptionId } = this.state;

    // ns__custom_start unit: appSpec, comp: Descriptions, loc: renderBeginning
    // ns__custom_end unit: appSpec, comp: Descriptions, loc: renderBeginning

    // ns__start_section renderReturn
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
    // ns__end_section renderReturn
  }
  // ns__end_section render
}
// ns__end_section function

// ns__start_section  compose
// ns__end_section  compose

// ns__start_section propTypes
Descriptions.propTypes = {
  // ns__custom_start unit: appSpec, comp: Descriptions, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: Descriptions, loc: addedPropTypes
};
// ns__end_section propTypes
export default Descriptions;
