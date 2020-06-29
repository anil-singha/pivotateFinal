import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import styled from "styled-components";
import { withNoStack, EXECUTE } from "@nostack/no-stack";
import compose from "@shopify/react-compose";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../actions";
import { CREATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID } from "../../../config";

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

function UserTypeCreationForm({ parentId, createUserType, refetchQueries }) {
  const [userTypeValue, updateUserTypeValue] = useState("");
  const [loading, updateLoading] = useState(false);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function handleChange(e) {
    updateUserTypeValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userTypeValue) {
      return;
    }

    updateLoading(true);

    const createUserTypeResponse = await createUserType({
      variables: {
        actionId: CREATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: userTypeValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });
    dispatch(increment());

    const newUserTypeData = JSON.parse(createUserTypeResponse.data.Execute);
    updateUserTypeValue("");
    updateLoading(false);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <form>
      <label htmlFor="userType-value">
        <input
          placeholder="New User Type"
          className="input"
          id="userType-value"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={userTypeValue}
          disabled={loading}
        />
      </label>

      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        {loading ? "Creating UserType..." : "Create UserType"}
      </Button>
    </form>
  );
}

export default compose(graphql(EXECUTE, { name: "createUserType" }))(
  UserTypeCreationForm
);
