import React, { Component } from "react";
import { connect } from "react-redux";
import Launch from "../Components/Launch";
import GithubAction from "../Redux/GithubRedux";

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  onChangeUsername = username => {
    this.setState({ username });
  };

  getRepo = () => {
    this.props.submitUsername(this.state.username);
  };

  render() {
    return (
      <Launch
        {...this.props}
        username={this.state.username}
        onChangeUsername={this.onChangeUsername}
        getRepo={this.getRepo}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    github: Object.assign({}, state.github)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitUsername: username => dispatch(GithubAction.repoRequest(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen);
