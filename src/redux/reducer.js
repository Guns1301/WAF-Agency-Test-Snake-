import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getUser } from "./actions";
import { fetchAllUsers, createUser } from "./operations";

const users = createReducer([], {
  [fetchAllUsers.fulfilled]: (_, action) => action.payload,
  [createUser.fulfilled]: (state, { payload }) => [payload, ...state],
});

const currentUser = createReducer(
  {},
  {
    [getUser]: (_, action) => action.payload,
  },
);

export default combineReducers({
  users,
  currentUser,
});
