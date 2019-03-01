import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import GithubAction from "../Redux/GithubRedux";
import HotRepo from "../Components/HotRepo";
// var today = new Date();

class HotRepoScreen extends Component {
  componentWillMount() {
    var date = new Date();
    date.setDate(date.getDate() - 7);
    var finalDate =
      date.getFullYear() + "-" + date.getMonth() + "-" + (date.getDate() + 1);

    if (finalDate) {
      this.props.getHotRepo(finalDate);
    }
  }
  render() {
    return <HotRepo {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    github: Object.assign({}, state.github)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHotRepo: q => dispatch(GithubAction.hotRepoRequest(q))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotRepoScreen);
