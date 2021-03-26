export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_LIST_SAGA = "UPDATE_USER_LIST_SAGA";
export const UPDATE_LIST_USERS = "UPDATE_LIST_USERS";
export const UPDATE_FAILED = "UPDATE_FAILED";

// * state types

export interface InitialStateProps {
  loggedIn: boolean;
  loadingListUsers: boolean;
  failed: boolean;
  listUsers: UserListProps[];
}

export interface UserListProps {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

// * actions types

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: boolean
}

interface UpdateListUserAction {
  type: typeof UPDATE_LIST_USERS;
  payload: UserListProps[]
}

interface UpdateUserFailed {
  type: typeof UPDATE_FAILED;
  payload: boolean;
}

interface UpdateUserListSagaType {
  type: typeof UPDATE_USER_LIST_SAGA 
}

// * types reducer

export interface ReducersType {
  userReducer: InitialStateProps
}

// * types actions

export type StateActionTypes = UpdateUserAction | UpdateListUserAction | UpdateUserFailed | UpdateUserListSagaType;