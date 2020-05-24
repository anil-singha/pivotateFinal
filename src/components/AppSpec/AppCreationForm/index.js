import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import styled from "styled-components";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import { withNoStack, EXECUTE_ACTION } from "@nostack/no-stack";
import compose from "@shopify/react-compose";

import { CREATE_APP_FOR_APP_SPEC_ACTION_ID } from "../../../config";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../actions";

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

function AppCreationForm({ customerId, createApp, refetchQueries }) {
  const [appValue, updateAppValue] = useState("");
  const [loading, updateLoading] = useState(false);
  const history = useHistory();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function handleChange(e) {
    updateAppValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!appValue) {
      return;
    }

    updateLoading(true);

    const createAppResponse = await createApp({
      variables: {
        actionId: CREATE_APP_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: customerId,
          value: appValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    const newAppData = JSON.parse(createAppResponse.data.ExecuteAction);
    updateAppValue("");
    updateLoading(false);
    dispatch(increment());
    // history.push("/meeting-step/create-user-type");
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <>
      <div className="box">
        <div
          class="text-center"
          style={{ maxWidth: "350px", margin: "1em auto 2em auto" }}
        >
          <strong>Tell us more about what you want in your web app! </strong>
        </div>
        <form>
          <label htmlFor="app-value">
            <input
              className="input"
              placeholder="Create Name"
              id="app-value"
              type="text"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={appValue}
              disabled={loading}
            />

            <textarea className="input" placeholder="Description"></textarea>
          </label>
        </form>
      </div>
      <div style={{ marginTop: "1em" }}>
        <button
          style={{ display: "block", marginLeft: "auto" }}
          className="button button--yellow"
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Creating App..." : "Create App"}
        </button>
      </div>
    </>
  );
}

export default compose(graphql(EXECUTE_ACTION, { name: "createApp" }))(
  AppCreationForm
);
