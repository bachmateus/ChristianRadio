import User from "../../modules/user/model/User";
import { UserListAction } from "./types";

const initalState: User = {
  id: "",
  email: "",
  givenName: "",
  fullName: "",
  photo: "",
  providerId: ""
}

export default (state: User = initalState, action:UserListAction) => {
  switch (action.type) {
    case 'SET_USER_DATA' :
      return {
        ...state, 
        id: action.id,
        email: action.email,
        givenName: action.givenName,
        fullName: action.fullName,
        photo: action.photo,
        providerId: action.providerId
      } 
    
    case 'RESET_USER_DATA':
      return initalState

    default: return state;
  }
}