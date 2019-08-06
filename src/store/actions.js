import {
  UPDATE_USERNAME,
  INVALID_USERNAME,
  UPDATE_USERDETAILS,
  UPDATE_PUBLICREPOS
} from "./constants";

export function updateUsername(payload) {
  return { type: UPDATE_USERNAME, payload };
}

export function invalidUsername(payload) {
  return { type: INVALID_USERNAME, payload };
}

export function updateUserDetails(payload) {
  return { type: UPDATE_USERDETAILS, payload };
}

export function updatePublicRepos(payload) {
  return { type: UPDATE_PUBLICREPOS, payload };
}
