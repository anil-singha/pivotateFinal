/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: Screens

// ns__custom_start unit: appSpec, comp: Screens, loc: beforeImports
// ns__custom_end unit: appSpec, comp: Screens, loc: beforeImports

// ns__start_section imports
import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import ScreenCreationForm from '../ScreenCreationForm';
import Screen from '../Screen';
// ns__custom_start unit: appSpec, comp: Screens, loc: addedImports
// <!-- prettier-ignore-start -->
import InfoTypeCreationForm from '../InfoTypeCreationForm';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: Screens, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const ScreensStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: Screens, loc: styling
  margin: 0 0 0 7%;
  // ns__custom_end unit: appSpec, comp: Screens, loc: styling
`;

// ns__end_section stylingSection

// ns__start_replacement button
// ns__end_replacement button

// ns__custom_start unit: appSpec, comp: Screens, loc: beforeFunction
// ns__custom_end unit: appSpec, comp: Screens, loc: beforeFunction

// ns__start_section function
class Screens extends Component {
  // ns__custom_start unit: appSpec, comp: Screens, loc: beginning
  // ns__custom_end unit: appSpec, comp: Screens, loc: beginning
  state = {
    selectedScreenId: null,
    // ns__custom_start unit: appSpec, comp: Screens, loc: addedState
    infoTypeValueCount: 0,
    // ns__custom_end unit: appSpec, comp: Screens, loc: addedState
  };

  wrapperRef = createRef();

  // ns__start_section didMount
  componentDidMount() {
    // ns__custom_start unit: appSpec, comp: Screens, loc: componentDidMount
    // ns__custom_end unit: appSpec, comp: Screens, loc: componentDidMount
    document.addEventListener('mousedown', this.handleClick);
  }
  // ns__end_section didMount

  // ns__start_section willMount
  componentWillUnmount() {
    // ns__custom_start unit: appSpec, comp: Screens, loc: componentWillUnmount
    // ns__custom_end unit: appSpec, comp: Screens, loc: componentWillUnmount
    document.removeEventListener('mousedown', this.handleClick);
  }
  // ns__end_section willMount

  // ns__start_section handleClick
  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedScreenId: null });
    }
  };
  // ns__end_section handleClick

  // ns__start_section handleSelect
  handleSelect = (id) => this.setState({ selectedScreenId: id });
  // ns__end_section handleSelect

  // ns__custom_start unit: appSpec, comp: Screens, loc: beforeRender
  onChangeHelper = (value) => {
    this.setState({ infoTypeValueCount: value.length });
  };
  // ns__custom_end unit: appSpec, comp: Screens, loc: beforeRender

  // ns__start_section render
  render() {
    const { userTypeId, screens, refetchQueries, onUpdate } = this.props;

    const { selectedScreenId } = this.state;

    // ns__custom_start unit: appSpec, comp: Screens, loc: renderBeginning
    const { label } = this.props;
    const validateScreens = screens.length;
    const { infoTypeValueCount } = this.state;
    // ns__custom_end unit: appSpec, comp: Screens, loc: renderBeginning

    // ns__start_replacement renderReturn

    return (
      <>
        <ScreensStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
          {screens.map((screen) => (
            <Screen
              key={v4()}
              screen={screen}
              selected={screen.id === selectedScreenId}
              onUpdate={onUpdate}
              parentId={userTypeId}
              refetchQueries={refetchQueries}
              onSelect={this.handleSelect}
            />
          ))}
          {/* ns__custom_start unit: appSpec, comp: Screens, loc: renderEnding */}
          {/* ns__custom_end unit: appSpec, comp: Screens, loc: renderEnding */}
        </ScreensStyleWrapper>
        <ScreenCreationForm
          parentId={userTypeId}
          refetchQueries={refetchQueries}
          /* ns__custom_start unit: appSpec, comp: Screens, loc: addedProps */
          validateScreens={validateScreens}
          onChange={this.onChangeHelper}
          label={label}
          /* ns__custom_end unit: appSpec, comp: Screens, loc: addedProps */
        />

        {infoTypeValueCount >= 3 ? (
          <InfoTypeCreationForm
            disabled
            validateInfoTypes={0}
            textLabel='What is the Info Type fo...'
            infoTypeValueCount={infoTypeValueCount}
            label={label}
          />
        ) : null}
      </>
    );

    // ns__end_replacement renderReturn
  }
  // ns__end_section render
}
// ns__end_section function

// ns__start_section  compose
// ns__end_section  compose

 // ns__start_section propTypes
 Screens.propTypes = {
  // ns__custom_start unit: appSpec, comp: Screens, loc: addedPropTypes
// ns__custom_end unit: appSpec, comp: Screens, loc: addedPropTypes
};
// ns__end_section propTypes

export default Screens;
