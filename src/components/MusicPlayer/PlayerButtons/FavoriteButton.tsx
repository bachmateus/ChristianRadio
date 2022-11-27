import { connect } from "react-redux";
import { useMemo } from "react"
import { Image, TouchableOpacity } from "react-native"
import toogleMusicFavoriteUseCase from "../../../modules/user/useCases/toogleMusicFavoriteUseCase";
import { AppReducerTypes } from "../../../reducers/types";
import Track from "../../../modules/station/model/Track";
import styles from "../styles";
import PlayerTrack from "../../../modules/player/model/PlayerTrack";
import { setFavoritesData } from "../../../reducers/favoritesReducer/actions";
import { playerIcons } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  currentTrack: PlayerTrack 
  userKey: string
  favorites: Track[]
  setFavoritesData: (tracks: Track[])=>void
  // setFavoritesData: (tracks: (PlayerTrack | Track)[])=>void
}

function FavoriteButtonComponent({ currentTrack, favorites, userKey, setFavoritesData }: Props) {
  const navigation = useNavigation();
  const handleFavorite = async () => {
    checkIfUserIsLogged();
    const favoriteResponse = await toogleMusicFavoriteUseCase().execute({
      userKey,
      music: {
        Artist: currentTrack.artist,
        CD: currentTrack.album as string,
        CDCover: currentTrack.artwork,
        SongCode: currentTrack.id,
        Title: currentTrack.title
      },
      favoriteList:favorites
    });

    if (favoriteResponse.isFavorite) {
      const newFavorites = [
        ...favorites,
        favoriteResponse.data
      ] as Track[];

      setFavoritesData(newFavorites);
    } else {
      const newFavorites = favorites.filter(
        fav => fav.id !== favoriteResponse.data.id 
      );
      setFavoritesData(newFavorites);
    }
  }

  const checkIfUserIsLogged = () => {
    if ( !userKey ) {
      navigation.navigate('Favorites')      
      return
    }
  }

  const favoriteIcon = useMemo(()=>{
    console.log('favoriteIcon', currentTrack.id)
    console.log('favorites', favorites)
    if (favorites.length > 0) {
      const resCheckIfIsFavorite = favorites.some( favorite => favorite.SongCode === currentTrack.id);
      return resCheckIfIsFavorite ? playerIcons.favorite : playerIcons.notFavorite
    } else {
      return playerIcons.notFavorite
    }
  }, [favorites, currentTrack]);

  return (
    <TouchableOpacity 
      onPress={handleFavorite} 
      style={styles.favoriteBox}
      disabled={currentTrack.id === ""}
    >
      <Image 
        source={favoriteIcon} 
        style={styles.customButton}/>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    userKey: state.userReducer.id,
    // currentStationSelected: state.stationReducer,
    favorites: state.favoritesReducer
  }
}

const FavoriteButton = connect(mapStateToProps, { setFavoritesData })(FavoriteButtonComponent);
export default FavoriteButton;
