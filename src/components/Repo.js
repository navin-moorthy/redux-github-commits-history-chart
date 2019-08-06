import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateChartData, modalStatus } from "../store/actions";

function mapDispatchToProps(dispatch) {
  return {
    updateChartData: chartData => dispatch(updateChartData(chartData)),
    modalStatus: isModalOpen => dispatch(modalStatus(isModalOpen))
  };
}

const mapStateToProps = state => {
  return {
    username: state.username,
    publicRepos: state.publicRepos
  };
};

const ConnectedRepo = ({
  publicRepos,
  username,
  updateChartData,
  modalStatus
}) => {
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
    updateChartData(chartData);
    modalStatus(true);
  };

  return (
    <>
      {username && publicRepos.length !== 0 && (
        <div>
          <h2 className="text-center">Public Repositories</h2>
          <ul className="app-repoContainer">
            {publicRepos.map(publicRepo => (
              <li
                key={publicRepo.id}
                className="repo-list text-center"
                onClick={handleRepoClick}
              >
                {publicRepo.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const Repo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedRepo);

export default Repo;
