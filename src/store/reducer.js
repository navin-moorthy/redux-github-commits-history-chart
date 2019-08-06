import {
  UPDATE_USERNAME,
  INVALID_USERNAME,
  UPDATE_USERDETAILS,
  UPDATE_PUBLICREPOS
} from "./constants";

const initialState = {
  username: "",
  isValidUser: false,
  userDetails: [],
  publicRepos: []
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_USERNAME) {
    return Object.assign({}, state, {
      username: action.payload
    });
  }
  if (action.type === INVALID_USERNAME) {
    return Object.assign({}, state, {
      isValidUser: action.payload
    });
  }
  if (action.type === UPDATE_USERDETAILS) {
    return Object.assign({}, state, {
      userDetails: action.payload
    });
  }
  if (action.type === UPDATE_PUBLICREPOS) {
    return Object.assign({}, state, {
      publicRepos: action.payload
    });
  }
  return state;
}

export default rootReducer;
