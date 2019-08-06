import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateUsername,
  usernameStatus,
  updateUserDetails,
  updatePublicRepos
} from "../store/actions";

function mapDispatchToProps(dispatch) {
  return {
    updateUsername: username => dispatch(updateUsername(username)),
    usernameStatus: isValidUser => dispatch(usernameStatus(isValidUser)),
    updateUserDetails: userDetails => dispatch(updateUserDetails(userDetails)),
    updatePublicRepos: publicRepos => dispatch(updatePublicRepos(publicRepos))
  };
}

const ConnectedUserSearch = ({
  updateUsername,
  usernameStatus,
  updateUserDetails,
  updatePublicRepos
}) => {
  const [searchName, setSearchName] = useState("");

  // Handle Username Input Change
  const handleChange = event => {
    setSearchName(event.target.value);
  };

  // Handle Form Submit
  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const searchNameRes = await axios.get(
        `https://api.github.com/users/${searchName}`
      );
      usernameStatus(false);
      updateUsername(searchNameRes.data.login);
      updateUserDetails(searchNameRes.data);
      const publicRepoRes = await axios.get(
        `https://api.github.com/users/${searchName}/repos`
      );
      updatePublicRepos(publicRepoRes.data);
      setSearchName("");
    } catch (err) {
      usernameStatus(true);
      setSearchName("");
    }
  };

  return (
    <form className="app-formGroup" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={searchName}
        onChange={handleChange}
        placeholder="Search for the Username"
      />
      <button
        disabled={searchName === ""}
        className="app-buttons formGroup__white"
      >
        Submit{" "}
      </button>
    </form>
  );
};

const UserSearch = connect(
  null,
  mapDispatchToProps
)(ConnectedUserSearch);

export default UserSearch;
