import { Dispatch } from "react"
import User from "../../modules/user/model/User"
import { UserListAction, USER_ACTION_TYPES } from "./types"

export const setUserData = (
  user:User
) => {
  return (dispatch:Dispatch<UserListAction>) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_USER_DATA,
      ...user
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