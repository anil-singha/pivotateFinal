import React, { useState, forwardRef, useImperativeHandle } from "react";
import { graphql } from "@apollo/react-hoc";
import styled from "styled-components";
import { withNoStack, EXECUTE_ACTION } from "@nostack/no-stack";
import compose from "@shopify/react-compose";

import { CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID } from "../../../config";

// change styling here
const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  margin-left: 1em;
`;

const DescriptionCreationForm = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleSubmit,
    yell: (param) => handleSubmit(param),
  }));

  const parentId = props.parentInstanceId;
  const createDescription = props.createDescription;
  const refetchQueries = props.refetchQueries;
  const parentInstanceId = props.parentInstanceId;
  const [descriptionValue, updateDescriptionValue] = useState("");
  const [loading, updateLoading] = useState(false);

  function handleChange(e) {
    updateDescriptionValue(e.target.value);
  }

  async function handleSubmit(param) {
    if (!descriptionValue) {
      return;
    }

    updateLoading(true);

    const createDescriptionResponse = await createDescription({
      variables: {
        actionId: CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: param.instanceId,
          value: descriptionValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    const newDescriptionData = JSON.parse(
      createDescriptionResponse.data.ExecuteAction
    );

    updateDescriptionValue("");
    updateLoading(false);
  }

  // function handleKeyPress(e) {
  //   if (e.charCode === 13) {
  //     handleSubmit(e);
  //   }
  // }

  return (
    <div>
      <textarea
        placeholder="Description"
        className="input"
        id="description-value"
        type="text"
        onChange={handleChange}
        // onKeyPress={handleKeyPress}
        value={descriptionValue}
        disabled={loading}
      />
    </div>
  );
});

export default compose(
  graphql(EXECUTE_ACTION, { name: "createDescription", withRef: true })
)(DescriptionCreationForm);
