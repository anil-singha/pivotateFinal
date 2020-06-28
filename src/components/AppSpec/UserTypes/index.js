import React, { Component, createRef } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

import UserTypeCreationForm from "../UserTypeCreationForm";
import UserType from "../UserType";
import { connect } from "react-redux";
import { increment, decrement } from "../../../actions";

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = {
  increment,
  decrement,
};

class UserTypes extends Component {
  state = {
    selectedUserTypeId: null,
  };
  wrapperRef = createRef();
  // componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClick);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClick);
  // }

  handleClick = (e) => {
    const node = this.wrapperRef.current;
    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedUserTypeId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedUserTypeId: id });

  render() {
    const { appId, userTypes, refetchQueries, onUpdate } = this.props;
    const { selectedUserTypeId } = this.state;

    {
      /* np__added_start unit: appSpec, comp: UserTypes, loc: renderBeginning */
    }
    {
      /* np__added_end unit: appSpec, comp: UserTypes, loc: renderBeginning */
    }

    return (
      <div>
        <div className="box">
          <div ref={this.wrapperRef} onClick={this.handleClick}>
            <div>
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
            </div>
          </div>
        </div>
        <UserTypeCreationForm
          parentId={appId}
          refetchQueries={refetchQueries}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTypes);
