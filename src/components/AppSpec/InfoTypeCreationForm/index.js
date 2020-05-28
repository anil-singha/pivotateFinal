import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import styled from "styled-components";
import { withNoStack, EXECUTE } from "@nostack/no-stack";
import compose from "@shopify/react-compose";

import { CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID } from "../../../config";

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

function InfoTypeCreationForm({ parentId, createInfoType, refetchQueries }) {
  const [infoTypeValue, updateInfoTypeValue] = useState("");
  const [loading, updateLoading] = useState(false);

  function handleChange(e) {
    updateInfoTypeValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(parentId);
    if (!infoTypeValue) {
      return;
    }

    updateLoading(true);

    const createInfoTypeResponse = await createInfoType({
      variables: {
        actionId: CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: infoTypeValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    const newInfoTypeData = JSON.parse(createInfoTypeResponse.data.Execute);

    updateInfoTypeValue("");
    updateLoading(false);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <form>
      <label htmlFor="infoType-value">
        <input
          className="input"
          placeholder="New Type of Info"
          id="infoType-value"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={infoTypeValue}
          disabled={loading}
        />
      </label>
      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        {loading ? "Creating InfoType..." : "Create InfoType"}
      </Button>
    </form>
  );
}

export default compose(graphql(EXECUTE, { name: "createInfoType" }))(
  InfoTypeCreationForm
);