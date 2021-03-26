import {InitialStateProps, StateActionTypes, UPDATE_USER, UPDATE_LIST_USERS, UPDATE_FAILED, UPDATE_USER_LIST_SAGA} from "./types";

const INITIAL_STATE: InitialStateProps = {
  loggedIn: false,
  loadingListUsers: false,
  failed: false,
  listUsers: []
}

export default function userReducer(state = INITIAL_STATE, action: StateActionTypes){

  switch(action.type) {
    case UPDATE_USER: 
      return {
        ...state,
        loggedIn: action.payload
      }
    case UPDATE_LIST_USERS:
      return {
        ...state,
        listUsers: action.payload,
        loadingListUsers: false
      }
    case UPDATE_FAILED:
      return {
        ...state,
        failed: action.payload,
        loadingListUsers: false
      }
    case UPDATE_USER_LIST_SAGA:
      return {
        ...state,
        failed: false,
        loadingListUsers: true
      }
    default: 
      return state;
  }
}