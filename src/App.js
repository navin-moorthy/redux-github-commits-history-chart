import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

// Components
import Modal from "./components/Modal";
import UserSearch from "./components/UserSearch";
import Bio from "./components/Bio";
import Repo from "./components/Repo";

const mapStateToProps = state => {
  return {
    username: state.username,
    isValidUser: state.isValidUser,
    userDetails: state.userDetails,
    publicRepos: state.publicRepos
  };
};

const ConnectedApp = ({ username, isValidUser, userDetails, publicRepos }) => {
  console.log(publicRepos);
  // States
  const [chartData, setChartData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Handle each repository click
  const handleRepoClick = async event => {
    const commitStatRes = await axios.get(
      `https://api.github.com/repos/${username}/${
        event.target.textContent
      }/stats/participation`
    );
    const weeklyCommits = commitStatRes.data.all.reverse();
    // Pagination Calculation
    let weekCount = 1;
    let chartData = [];
    while (weeklyCommits.length > 0) {
      const splitCommits = [...weeklyCommits.splice(0, 10)];
      let splitChartData = [];
      // eslint-disable-next-line
      splitCommits.forEach(data => {
        splitChartData.push([`Week ${weekCount}`, data]);
        weekCount += 1;
      });
      splitChartData.unshift(["Weeks", "Total Commits"]);
      chartData.push(splitChartData);
    }
    setChartData(chartData);
    setShowModal(true);
  };

  // Handle Modal Close
  const closeModal = () => {
    setShowModal(false);
  };

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
      {!isValidUser && <Bio userName={username} userDetails={userDetails} />}
      {!isValidUser && (
        <Repo
          userName={username}
          publicRepos={publicRepos}
          handleRepoClick={handleRepoClick}
        />
      )}
      {showModal && <Modal chartData={chartData} closeModal={closeModal} />}
    </div>
  );
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
