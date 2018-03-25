import { takeEvery, call, put, select } from "redux-saga/effects";
import * as Actions from "../constants/actions";
import * as API from "../api";

function *fetchArtist() {
  try {
    const response = yield call(API.fetchArtistApi);
    yield put(fetchArtistSuccess(response));
  } catch (e) {
    const { message } = e;
    yield put(throwError(message));
  }
}

function *fetchArtistEvents() {
  try {
    const response = yield call(API.fetchArtistEventsApi);
    yield put(fetchConfigSuccess(response));
  } catch (e) {
    const { message } = e;
    yield put(throwError(message));
  }
}

export function *watchFetchArtist() {
  yield takeEvery(Actions.FETCH_ARTIST, fetchArtist);
}

export function *watchFetchArtistEvents() {
  yield takeEvery(Actions.FETCH_ARTIST_EVENTS, fetchArtistEvents);
}
