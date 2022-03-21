import { TUser, UserListAction } from "./types";

const initalState: TUser = {
  token: "",
  name: "",
  photo: ""
}

export default (state: TUser = initalState, action:UserListAction) => {
  switch (action.type) {
    case 'SET_USER_DATA' :
      return {
        ...state, 
        name:action.name,
        token:action.token,
        photo:action.photo
      } 
    
    case 'RESET_USER_DATA':
      return initalState

    default: return state;
  }
}