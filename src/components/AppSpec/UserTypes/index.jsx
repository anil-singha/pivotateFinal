/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: UserTypes

// ns__custom_start unit: appSpec, comp: UserTypes, loc: beforeImports
// ns__custom_end unit: appSpec, comp: UserTypes, loc: beforeImports

// ns__start_section imports
import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import UserTypeCreationForm from '../UserTypeCreationForm';
import UserType from '../UserType';
// ns__custom_start unit: appSpec, comp: UserTypes, loc: addedImports
// <!-- prettier-ignore-start -->
import ScreenCreationForm from '../ScreenCreationForm';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: UserTypes, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const UserTypesStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: UserTypes, loc: styling
  padding-right: 0.5rem;
  // ns__custom_end unit: appSpec, comp: UserTypes, loc: styling
`;

// ns__end_section stylingSection


// ns__custom_start unit: appSpec, comp: UserTypes, loc: beforeFunction
UserTypesStyleWrapper.defaultProps = {
  'data-id': 'userTypes__wrapper',
};
// ns__custom_end unit: appSpec, comp: UserTypes, loc: beforeFunction

// ns__start_section function
class UserTypes extends Component {
  // ns__custom_start unit: appSpec, comp: UserTypes, loc: beginning
  // ns__custom_end unit: appSpec, comp: UserTypes, loc: beginning
  state = {
    selectedUserTypeId: null,
    // ns__custom_start unit: appSpec, comp: UserTypes, loc: addedState
    userTypeCreationCount: 0,
    // ns__custom_end unit: appSpec, comp: UserTypes, loc: addedState
  };

  wrapperRef = createRef();

  // ns__start_section didMount
  componentDidMount() {
    // ns__custom_start unit: appSpec, comp: UserTypes, loc: componentDidMount
    // ns__custom_end unit: appSpec, comp: UserTypes, loc: componentDidMount
    document.addEventListener('mousedown', this.handleClick);
  }
  // ns__end_section didMount

  // ns__start_section willMount
  componentWillUnmount() {
    // ns__custom_start unit: appSpec, comp: UserTypes, loc: componentWillUnmount
    // ns__custom_end unit: appSpec, comp: UserTypes, loc: componentWillUnmount
    document.removeEventListener('mousedown', this.handleClick);
  }
  // ns__end_section willMount

  // ns__start_section handleClick
  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedUserTypeId: null });
    }
  };
  // ns__end_section handleClick

  // ns__start_section handleSelect
  handleSelect = (id) => this.setState({ selectedUserTypeId: id });
  // ns__end_section handleSelect

  // ns__custom_start unit: appSpec, comp: UserTypes, loc: beforeRender
  onChangeHelper = (value) => {
    this.setState({ userTypeCreationCount: value.length });
  };
  // ns__custom_end unit: appSpec, comp: UserTypes, loc: beforeRender

  // ns__start_section render
  render() {
    const { appId, userTypes, refetchQueries, onUpdate } = this.props;

    const { selectedUserTypeId } = this.state;

    // ns__custom_start unit: appSpec, comp: UserTypes, loc: renderBeginning
    const { label } = this.props;
    const validateUserTypes = userTypes.length;
    const { userTypeCreationCount } = this.state;
    // ns__custom_end unit: appSpec, comp: UserTypes, loc: renderBeginning

    // ns__start_replacement renderReturn

    return (
      <>
        <UserTypesStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
          {/* <UserTypeCreationForm
          parentId={ appId }
          refetchQueries={refetchQueries}
          // ns__custom_start unit: appSpec, comp: UserTypes, loc: addedPropsForCreationForm
          validateUserTypes={validateUserTypes}
          // ns__custom_start unit: appSpec, comp: UserTypes, loc: addedPropsForCreationForm
        /> */}

          {userTypes.map((userType) => (
            <UserType
              key={v4()}
              userType={userType}
              selected={userType.id === selectedUserTypeId}
              onUpdate={onUpdate}
              parentId={appId}
              refetchQueries={refetchQueries}
              onSelect={this.handleSelect}
            />
          ))}
          {/* ns__custom_start unit: appSpec, comp: UserTypes, loc: renderEnding */}

          {/* ns__custom_end unit: appSpec, comp: UserTypes, loc: renderEnding */}
        </UserTypesStyleWrapper>
        <UserTypeCreationForm
          parentId={appId}
          refetchQueries={refetchQueries}
          // ns__custom_start unit: appSpec, comp: UserTypes, loc: addedPropsForCreationForm
          validateUserTypes={validateUserTypes}
          onChange={this.onChangeHelper}
          label={label}
          // ns__custom_start unit: appSpec, comp: UserTypes, loc: addedPropsForCreationForm
        />
        {userTypeCreationCount >= 3 ? (
          <ScreenCreationForm
            disabled
            validateScreens={0}
            textLabel='What is the Screen name fo...'
            userTypeCreationCount={userTypeCreationCount}
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

export default UserTypes;
