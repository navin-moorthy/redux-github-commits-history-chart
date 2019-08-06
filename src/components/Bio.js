import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    username: state.username,
    userDetails: state.userDetails
  };
};

const ConnectedBio = ({ username, userDetails }) => {
  const { avatar_url, name, public_repos, blog, html_url } = userDetails;

  return (
    <>
      {username && (
        <div className="app-bioContainer">
          <img src={avatar_url} alt="avatar" className="bio-avatar" />
          <div className="bio-body">
            <div className="bio-body__name">{name}</div>
            <div className={!name ? "bio-body__name" : "bio-body__username"}>
              {username} : {public_repos} Public Repositories
            </div>
            <div>
              <a
                href={blog}
                className="bio-body__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <a
                href={html_url}
                className="bio-body__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                See in GitHub
              </a>
            </div>
          </div>
        </div>
      )}
      {username && public_repos === 0 && (
        <div className="bio-warning text-center">
          No public repo found for this user !!
        </div>
      )}
    </>
  );
};

const Bio = connect(mapStateToProps)(ConnectedBio);

export default Bio;
