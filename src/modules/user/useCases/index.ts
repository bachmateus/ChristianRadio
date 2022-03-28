import IAuthenticationRepository from "../repositories/IAutenticationRepository";
import FirebaseFavoritesTracksRepository from "../repositories/implementations/FirebaseFavoritesTracksRepository";
import * as GoogleAutenticationRepository from "../repositories/implementations/GoogleAuthenticationRepository";

export enum SocialAuthProvider {
  GOOGLE = "google.com"
}

export const tracksRepository = new FirebaseFavoritesTracksRepository();

export const getAuthRepositoryInstance = (
  provider:SocialAuthProvider
): IAuthenticationRepository => {

  switch (provider) {
    case SocialAuthProvider.GOOGLE:
      return GoogleAutenticationRepository;
  }
}