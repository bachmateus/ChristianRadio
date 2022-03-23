import User from "../model/User";

export default interface IAuthenticationRepository {
  signIn(): Promise<User>
  signOut():Promise<boolean>
}