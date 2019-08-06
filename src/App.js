import React from "react";
import { connect } from "react-redux";

// Components
import Modal from "./components/Modal";
import UserSearch from "./components/UserSearch";
import Bio from "./components/Bio";
import Repo from "./components/Repo";

const mapStateToProps = state => {
  return {
    isValidUser: state.isValidUser,
    isModalOpen: state.isModalOpen
  };
};

const ConnectedApp = ({ isValidUser, isModalOpen }) => {
  return (
    <div className="app">
      <h2 className="app-title text-center">GitHub Commits History Chart</h2>
      <h5 className="app-subTitle text-center">
        Get weekly commit count on all public repos
      </h5>
      <UserSearch />
      {isValidUser && (
        <div className="bio-warning text-center">
          Please enter a valid username!!
        </div>
      )}
      {!isValidUser && <Bio />}
      {!isValidUser && <Repo />}
      {isModalOpen && <Modal />}
    </div>
  );
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
