import React, { Component, createRef } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

import InfoTypeCreationForm from "../InfoTypeCreationForm";
import InfoType from "../InfoType";
import _ from "lodash";
// np__added_start unit: appSpec, comp: InfoTypes, loc: styling

const InfoTypesStyleWrapper = styled.div``;

const Button = styled.button`
  display: block;
  margin: 0 auto;
`;
// np__added_end unit: appSpec, comp: InfoTypes, loc: styling

class InfoTypes extends Component {
  state = {
    selectedInfoTypeId: null,
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
      this.setState({ selectedInfoTypeId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedInfoTypeId: id });

  render() {
    const { screenId, infoTypes, refetchQueries, onUpdate } = this.props;
    const { selectedInfoTypeId } = this.state;

    const temp_child = [];

    // infoTypes.forEach((res) => {
    //   if (res.children[0].instances.length) {
    //     let x = res;
    //     x = x.map((v) => ({ ...v, isActive: true }));
    //     temp_child.push(x);
    //   }
    // });
    // infoTypes.forEach((v, k) => {
    //   if (v.children[0].instances.length > 0) {
    //     temp_child.push(v);
    //   }
    // });
    // let temp_parent = infoTypes.map((v) => ({
    //   ...v,
    //   children: v.children[0].instances[0].map(() => ({})),
    //   parentId: v.children[0].instances[0]
    //     ? v.children[0].instances[0].id
    //     : null,
    // }));

    let temp_parent = infoTypes.map((v) => ({
      ...v,
      parentId: v.children[0].instances[0]
        ? v.children[0].instances[0].id
        : null,
    }));

    let temp_children = _.groupBy(temp_parent, "parentId");
    temp_parent = temp_parent.map((v) => ({
      ...v,
      _children: temp_children[v.id] || [],
    }));
    // console.log(temp_pnpmarent);
    // temp_parent = temp_parent.map(() => ({}));
    {
      /* np__added_start unit: appSpec, comp: InfoTypes, loc: renderBeginning */
    }
    {
      /* np__added_end unit: appSpec, comp: InfoTypes, loc: renderBeginning */
    }

    return (
      <>
        <div ref={this.wrapperRef} onClick={this.handleClick}>
          {temp_parent.map((infoType) => (
            <InfoType
              hasParentId={infoType.parentId}
              key={v4()}
              infoType={infoType}
              selected={infoType.id === selectedInfoTypeId}
              onUpdate={onUpdate}
              parentId={screenId}
              refetchQueries={refetchQueries}
              onSelect={this.handleSelect}
            />
          ))}
          <br></br>
        </div>
        <InfoTypeCreationForm
          parentId={screenId}
          refetchQueries={refetchQueries}
        />
      </>
    );
  }
}

export default InfoTypes;
