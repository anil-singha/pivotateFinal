import React, { useState, useEffect, createRef, Component, memo } from "react";
import styled from "styled-components";
import { EXECUTE } from "@nostack/no-stack";
import compose from "@shopify/react-compose";
import { graphql } from "@apollo/react-hoc";
import { v4 } from "uuid";

import { InputLabel, makeStyles } from "@material-ui/core";
import EditInstanceForm from "../components/EditInstanceForm";
import DeleteInstanceMenu from "../components/DeleteInstanceMenu";

import {
  UPDATE_INFO_TYPE_FOR_APP_INFO_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_INFO_ACTION_ID,
} from "../config";

import SubInfoTypeCreationForm from "./SubInfoTypeCreationForm";

const SubInfoTypeWrapper = styled.div(
  ({ selected, isDeleting }) => `
    margin: 2em 1em;
    padding: 1.5em;
    border: ${selected ? "1px solid aquamarine" : "1px solid white"};
    border-radius: 10px;
    box-shadow: 5px 5px 10px #888888;
    background-color: ${isDeleting && "tomato"};
    cursor: ${selected ? "auto" : "pointer"};
  
    &:hover {
      border: 1px solid aquamarine;
    }
  `
);
// ns__custom_end unit: appSpec, comp: InfoType, loc: styling

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || "#000000"};
  }
`;

const TitleWrapper = styled.p`
  background: #d2ecef;
  padding: 25px;
  border-radius: 10px;
  text-align: initial;
  text-transfor: capitalize;
`;

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    fontSize: ".8rem",
    textAlign: "initial",
  },
}));

const InfoTypesStyleWrapper = styled.div``;

const DataList = memo(
  ({
    subinfoTypeData,
    selectedDataProps,
    onChange,
    instanceId,
    setInstanceId,
    parentId,
    refetchQueries,
    updateInstance,
    deleteInstance,
  }) => {
    const [subInfoValue, setSubInfoValue] = useState("");
    const [isEditMode, updateIsEditMode] = useState(false);
    const [isSaving, updateIsSaving] = useState(false);
    const [isDeleteMode, updateIsDeleteMode] = useState(false);
    const [isDeleting, updateIsDeleting] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const styles = useStyles();

    async function handleInfoTypeValueSave() {
      updateIsSaving(true);

      await updateInstance({
        variables: {
          actionId: UPDATE_INFO_TYPE_FOR_APP_INFO_ACTION_ID,
          executionParameters: JSON.stringify({
            value: subInfoValue,
            instanceId: currentId,
          }),
        },
        refetchQueries,
      });

      updateIsEditMode(false);
      updateIsSaving(false);
    }

    function handleCancelEdit() {
      updateIsEditMode(false);
    }

    function handleInfoTypeValueChange(e) {
      setSubInfoValue(e.target.value);
    }

    if (isEditMode) {
      console.log("isEditMode");
      return (
        <InfoTypesStyleWrapper>
          <EditInstanceForm
            id={currentId}
            label="InfoType Value:"
            value={subInfoValue}
            onChange={handleInfoTypeValueChange}
            onSave={handleInfoTypeValueSave}
            onCancel={handleCancelEdit}
            disabled={isSaving}
          />
        </InfoTypesStyleWrapper>
      );
    }

    const handleSubOptionsListChange = (optionId, subSelections) => {
      // add sub selections to current optionId
      selectedDataProps[optionId] = subSelections;
      // call onChange function given by parent
      onChange(selectedDataProps);
    };

    return (
      <>
        {subinfoTypeData.map((instance) => {
          if (instanceId === instance.parentId) {
            return (
              <SubInfoTypeWrapper
                key={v4()}
                onClick={(subSelections) => {
                  handleSubOptionsListChange(instance.id, subSelections);
                  setCurrentId(instance.id);
                }}
              >
                <InputLabel className={styles.titleLabel}>
                  Sub Info Type
                </InputLabel>
                <TitleWrapper>
                  {instance.value} {instance.id}
                </TitleWrapper>
                <Button
                  type="button"
                  onClick={() => {
                    updateIsEditMode(true);
                    setSubInfoValue(instance.value);
                    setCurrentId(instance.id);
                  }}
                >
                  &#9998;
                </Button>
                <Button type="button" onClick={() => updateIsDeleteMode(true)}>
                  &#128465;
                </Button>

                {/* {console.log(`selectedDataProps`,instance._children[0] && selectedDataProps[instance._children[0].parentId] ? true: false)} */}
                {/* {console.log(`instance._children[0].parentId`, instance._children[0] && instance._children[0].parentId)} */}
                {/* {console.log(`instance._children`, instance._children)} */}
                {instance._children.length && (
                  <>
                    <DataList
                      subinfoTypeData={instance._children}
                      // selectedDataProps={selectedDataProps[instance.id]}
                      onChange={(subSelections) =>
                        handleSubOptionsListChange(instance.id, subSelections)
                      }
                      updateInstance={updateInstance}
                      deleteInstance={deleteInstance}
                    />

                    {currentId === instance._children[0].parentId ? (
                      <>
                        {instance._children.map((instance) => {
                          {
                            console.log(
                              "inside data list again",
                              instance._children
                            );
                          }
                          return (
                            <SubInfoTypeWrapper key={v4()}>
                              {instance.value}
                            </SubInfoTypeWrapper>
                          );
                        })}
                        <SubInfoTypeCreationForm
                          parentId={parentId}
                          childId={instanceId}
                          refetchQueries={refetchQueries}
                        />
                      </>
                    ) : null}
                  </>
                )}
              </SubInfoTypeWrapper>
            );
          }
        })}
      </>
    );
  }
);

class SubComponentInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedData: {},
      instanceId: null,
      infoTypeValue: "",
      currentId: null,
    };
  }

  componentDidMount() {
    const { instanceId } = this.state;

    if (!instanceId) {
      this.setState({ instanceId: this.props.instanceId });
    }
  }

  render() {
    const { selectedData, instanceId } = this.state;
    const {
      infoType,
      parentId,
      refetchQueries,
      onSelect,
      selectSubInfoId,
      selectedDataProps,
      updateInstance,
      deleteInstance,
    } = this.props;
    return (
      <InfoTypesStyleWrapper>
        <SubInfoTypeCreationForm
          parentId={parentId}
          childId={instanceId}
          refetchQueries={refetchQueries}
        />
        <DataList
          subinfoTypeData={infoType}
          selectedDataProps={selectedData}
          onChange={(selectedData) => this.setState({ selectedData })}
          instanceId={instanceId}
          setInstanceId={(instanceId) => this.setState({ instanceId })}
          updateInstance={updateInstance}
          deleteInstance={deleteInstance}
        />
      </InfoTypesStyleWrapper>
    );
  }
}

export default compose(
  graphql(EXECUTE, { name: "updateInstance" }),
  graphql(EXECUTE, { name: "deleteInstance" })
)(SubComponentInfo);
