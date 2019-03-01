import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ["username"],
  userSuccess: ["avatar"],
  userFailure: null,
  repoRequest: ["username"],
  repoRequestSuccess: ["response"],
  repoRequestFail: null,
  hotRepoRequest: ["q"],
  hotRepoRequestSuccess: ["response"],
  hotRepoRequestFail: null
});

export const GithubTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  avatar: null,
  fetching: null,
  error: null,
  username: null,
  repoList: [],
  errorMessage: "",
  hotRepoList: []
});

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar
};

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null });

// successful avatar lookup
export const success = (state, action) => {
  const { avatar } = action;
  return state.merge({ fetching: false, error: null, avatar });
};

// failed to get the avatar
export const failure = state =>
  state.merge({ fetching: false, error: true, avatar: null });

// request the user's repo
export const repoRequest = (state, { username }) =>
  state.merge({ fetching: true, username, repoList: null, errorMessage: "" });

// successful request user's repo
export const repoRequestSuccess = (state, action) => {
  return state.merge({
    fetching: false,
    error: null,
    repoList: action.response,
    errorMessage: ""
  });
};

// failed request user's repo
export const repoRequestFail = state =>
  state.merge({
    fetching: false,
    error: true,
    repoList: [],
    errorMessage: "Invalid github username. Please key in a valid username."
  });

// request the hot repo
export const hotRepoRequest = (state, { q }) =>
  state.merge({ fetching: true, q, repoList: null, errorMessage: "" });

// successful request hot repo
export const hotRepoRequestSuccess = (state, action) => {
  return state.merge({
    fetching: false,
    error: null,
    hotRepoList: action.response,
    errorMessage: ""
  });
};

// failed request hot repo
export const hotRepoRequestFail = state =>
  state.merge({
    fetching: false,
    error: true,
    hotRepoList: []
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
  [Types.REPO_REQUEST]: repoRequest,
  [Types.REPO_REQUEST_SUCCESS]: repoRequestSuccess,
  [Types.REPO_REQUEST_FAIL]: repoRequestFail,
  [Types.HOT_REPO_REQUEST]: hotRepoRequest,
  [Types.HOT_REPO_REQUEST_SUCCESS]: hotRepoRequestSuccess,
  [Types.HOT_REPO_REQUEST_FAIL]: hotRepoRequestFail
});
