import {
  UPDATE_USERNAME,
  USERNAME_STATUS,
  UPDATE_USERDETAILS,
  UPDATE_PUBLICREPOS,
  UPDATE_CHARTDATA,
  MODAL_STATUS
} from "./constants";

export function updateUsername(payload) {
  return { type: UPDATE_USERNAME, payload };
}

export function usernameStatus(payload) {
  return { type: USERNAME_STATUS, payload };
}

export function updateUserDetails(payload) {
  return { type: UPDATE_USERDETAILS, payload };
}

export function updatePublicRepos(payload) {
  return { type: UPDATE_PUBLICREPOS, payload };
}

export function updateChartData(payload) {
  return { type: UPDATE_CHARTDATA, payload };
}

export function modalStatus(payload) {
  return { type: MODAL_STATUS, payload };
}
