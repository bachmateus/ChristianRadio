import { SocialAuthProvider } from "../useCases"

export default class User {
  id: string
  email: string
  givenName: string
  fullName: string
  photo: string
  providerId: SocialAuthProvider | ""
}