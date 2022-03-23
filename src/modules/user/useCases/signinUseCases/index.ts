import IAuthenticationRepository from "../../repositories/IAutenticationRepository";
import * as GoogleAutenticationRepository from "../../repositories/implementations/GoogleAuthenticationRepository";

type SocialAuthProvider = 'Google' | 'Apple';

const getRepositoryInstance = (
  provider:SocialAuthProvider
): IAuthenticationRepository => {

  switch (provider) {
    case "Google":
      return GoogleAutenticationRepository;
  }
}

const signinUseCase = async (provider:SocialAuthProvider) => {
  const repository = getRepositoryInstance(provider);
  return await repository.signIn()
}

export default signinUseCase;