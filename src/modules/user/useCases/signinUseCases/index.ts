import { getAuthRepositoryInstance, SocialAuthProvider } from "..";

const signinWithSocialProvider = async (provider:SocialAuthProvider) => {
  const repository = getAuthRepositoryInstance(provider);
  return await repository.signIn()
}

export default signinWithSocialProvider;