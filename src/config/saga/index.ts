import { call, put, all, takeLatest } from "redux-saga/effects";

// * utils

import api from "../../services/api";
import { updateUserList, updateFailed } from "../actions";
import { UPDATE_USER_LIST_SAGA, UserListProps } from "../types"

// * actions

function* getUserList() {
  try {
    const response = yield call(api.get, "users");
    yield put(updateUserList(response.data));
  } catch (error) {
    yield put(updateFailed(true))
  }
}

export default function* root(){
  yield all([
    takeLatest(UPDATE_USER_LIST_SAGA, getUserList)
  ])
}