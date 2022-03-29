import { getAuthRepositoryInstance, SocialAuthProvider } from "..";

const signoutWithSocialProvider = async (provider:SocialAuthProvider) => {
  const repository = getAuthRepositoryInstance(provider);
  return await repository.signOut()
}

export default signoutWithSocialProvider;