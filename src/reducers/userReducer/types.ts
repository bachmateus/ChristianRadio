export type TUser = {
  name: string
  token: string
  photo: string
}

export enum USER_ACTION_TYPES {
  SET_USER_DATA = "SET_USER_DATA",
  RESET_USER_DATA = "RESET_USER_DATA",
}

export type SetUserDataAction = {
  type:USER_ACTION_TYPES.SET_USER_DATA
  name: string
  token: string
  photo: string
}

export type ResetUserDataAction = {
  type:USER_ACTION_TYPES.RESET_USER_DATA
}

export type UserListAction = SetUserDataAction | ResetUserDataAction;