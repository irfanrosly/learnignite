import React, { Component } from "react";
import { connect } from "react-redux";
import RepoResult from "../Components/RepoResult";

class RepoResultScreen extends Component {
  render() {
    return <RepoResult {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    github: Object.assign({}, state.github)
  };
};

export default connect(
  mapStateToProps,
  null
)(RepoResultScreen);
