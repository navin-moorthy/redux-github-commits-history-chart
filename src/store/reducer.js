import {
  UPDATE_USERNAME,
  USERNAME_STATUS,
  UPDATE_USERDETAILS,
  UPDATE_PUBLICREPOS,
  UPDATE_CHARTDATA,
  MODAL_STATUS
} from "./constants";

const initialState = {
  username: "",
  isValidUser: false,
  userDetails: [],
  publicRepos: [],
  chartData: [],
  isModalOpen: false
};

function reducer(state = initialState, action) {
  if (action.type === UPDATE_USERNAME) {
    return Object.assign({}, state, {
      username: action.payload
    });
  }
  if (action.type === USERNAME_STATUS) {
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
  if (action.type === UPDATE_CHARTDATA) {
    return Object.assign({}, state, {
      chartData: action.payload
    });
  }
  if (action.type === MODAL_STATUS) {
    return Object.assign({}, state, {
      isModalOpen: action.payload
    });
  }
  return state;
}

export default reducer;
