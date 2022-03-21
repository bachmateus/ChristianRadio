import { Dispatch } from "react"
import { TUser, UserListAction, USER_ACTION_TYPES } from "./types"

export const setUserData = (
  { name, token, photo }:TUser
) => {
  return (dispatch:Dispatch<UserListAction>) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_USER_DATA,
      token, name, photo
    })
  }
}

export const resetUserData = () => {
  return (dispatch:Dispatch<UserListAction>) => {
    dispatch({
      type: USER_ACTION_TYPES.RESET_USER_DATA
    })
  }
}