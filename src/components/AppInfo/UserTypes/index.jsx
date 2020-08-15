/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appInfo, comp: UserTypes

// ns__custom_start unit: appInfo, comp: UserTypes, loc: beforeImports
// ns__custom_end unit: appInfo, comp: UserTypes, loc: beforeImports

import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import UserTypeCreationForm from '../UserTypeCreationForm';
import UserType from '../UserType';
import ScreenCreationForm from '../ScreenCreationForm';

// ns__custom_start unit: appInfo, comp: UserTypes, loc: styling

const UserTypesStyleWrapper = styled.div`
  padding-right: 0.5rem;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
`;

UserTypesStyleWrapper.defaultProps = {
  'data-id': 'userTypes__wrapper',
};
// ns__custom_end unit: appInfo, comp: UserTypes, loc: styling

class UserTypes extends Component {
  state = {
    selectedUserTypeId: null,
    userTypeCreationCount: 0,
  };

  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedUserTypeId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedUserTypeId: id });

  // ns__custom_start unit: appInfo, comp: UserTypes, loc: beforeRender
  onChangeHelper = (value) => {
    this.setState({ userTypeCreationCount: value.length });
  };
  // ns__custom_end unit: appInfo, comp: UserTypes, loc: beforeRender

  render() {
    const { appId, userTypes, refetchQueries, onUpdate } = this.props;
    const { selectedUserTypeId } = this.state;

    // ns__custom_start unit: appInfo, comp: UserTypes, loc: beforeReturn
    const { label } = this.props;
    const validateUserTypes = userTypes.length;
    const { userTypeCreationCount } = this.state;
    // ns__custom_end unit: appInfo, comp: UserTypes, loc: beforeReturn

    // ns__custom_start unit: appInfo, comp: UserTypes, loc: renderBeginning
    // ns__custom_end unit: appInfo, comp: UserTypes, loc: renderBeginning

    return (
      <>
        <UserTypesStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
          {/* <UserTypeCreationForm
          parentId={ appId }
          refetchQueries={refetchQueries}
          // ns__custom_start unit: appInfo, comp: UserTypes, loc: addedPropsForCreationForm
          validateUserTypes={validateUserTypes}
          // ns__custom_start unit: appInfo, comp: UserTypes, loc: addedPropsForCreationForm
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
          {/* ns__custom_start unit: appInfo, comp: UserTypes, loc: renderEnding */}

          {/* ns__custom_end unit: appInfo, comp: UserTypes, loc: renderEnding */}
        </UserTypesStyleWrapper>
        <UserTypeCreationForm
          parentId={appId}
          refetchQueries={refetchQueries}
          // ns__custom_start unit: appInfo, comp: UserTypes, loc: addedPropsForCreationForm
          validateUserTypes={validateUserTypes}
          onChange={this.onChangeHelper}
          label={label}
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
  }
}

export default UserTypes;
