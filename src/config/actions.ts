import { StateActionTypes, UserListProps , UPDATE_USER, UPDATE_LIST_USERS, UPDATE_FAILED, UPDATE_USER_LIST_SAGA} from "./types";


// * actions user 

export function updateUserLogged(value: boolean): StateActionTypes {
  return {
    type: UPDATE_USER,
    payload: value
  }
}

// * action user list

export function updateUserListSaga(): StateActionTypes {
  return {
    type: UPDATE_USER_LIST_SAGA
  }
}

export function updateUserList(value: UserListProps[]): StateActionTypes{
  return {
    type: UPDATE_LIST_USERS,
    payload: value
  }
}

// * action failed

export function updateFailed(value: boolean): StateActionTypes {
  return {
    type: UPDATE_FAILED,
    payload: value
  }
}