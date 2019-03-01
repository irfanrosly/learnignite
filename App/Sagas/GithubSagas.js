import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import GithubActions from "../Redux/GithubRedux";
import { NavigationActions } from "react-navigation";

export function* getUserAvatar(api, action) {
  const { username } = action;
  // make the call to the api
  const response = yield call(api.getUser, username);

  if (response.ok) {
    const firstUser = path(["data", "items"], response)[0];
    const avatar = firstUser.avatar_url;
    // do data conversion here if needed
    yield put(GithubActions.userSuccess(avatar));
  } else {
    yield put(GithubActions.userFailure());
  }
}

export function* getUserRepo(api, action) {
  const { username } = action;
  const response = yield call(api.getRepo, username);

  if (response.ok) {
    yield put(GithubActions.repoRequestSuccess(response.data));
    yield put(
      NavigationActions.navigate({
        routeName: "RepoResultScreen"
      })
    );
  } else {
    yield put(GithubActions.repoRequestFail());
  }
}

export function* getHotRepo(api, action) {
  const { q } = action;

  const response = yield call(api.getHotRepo, q);

  if (response.ok) {
    yield put(GithubActions.hotRepoRequestSuccess(response.data.items));
  } else {
    yield put(GithubActions.hotRepoRequestFail);
  }
}
