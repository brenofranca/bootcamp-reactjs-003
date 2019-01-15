import { call, put } from 'redux-saga/effects';
import moment from 'moment';
import api from '../../services/api';

import {
  addRepositorySuccess,
  updateRepositorySuccess,
  addOrUpdateRepositoryFailure,
} from '../actions/repositories';

function* fetchRepository(repository) {
  const { data } = yield call(api.get, `/repos/${repository}`);

  const repositoryData = {
    id: data.id,
    name: data.name,
    full_name: data.full_name,
    description: data.desctiption,
    owner: {
      login: data.owner.login,
      avatar_url: data.owner.avatar_url,
    },
    stargazers_count: data.stargazers_count,
    forks_count: data.forks_count,
    open_issues_count: data.open_issues_count,
    pushed_at: data.pushed_at,
    url: data.html_url,
    lastCommit: moment(data.pushed_at).fromNow(),
  };

  return repositoryData;
}

export function* addRepository(action) {
  try {
    const data = yield fetchRepository(action.payload.repository);

    yield put(addRepositorySuccess(data));
  } catch (err) {
    yield put(addOrUpdateRepositoryFailure('Não foi possível buscar o repositório!'));
  }
}

export function* updateRepository(action) {
  try {
    const data = yield fetchRepository(action.payload.repository);

    yield put(updateRepositorySuccess(data));
  } catch (err) {
    yield put(addOrUpdateRepositoryFailure('Não foi possível atualizar o repositório!'));
  }
}
