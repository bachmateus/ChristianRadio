import React, { useEffect, useState } from 'react';
import { FlatList, Modal, RefreshControl } from "react-native";
import { connect } from 'react-redux';

import Track from '../../modules/station/model/Track';
import styles from './styles';

import listFavoriteTracksUseCase from '../../modules/user/useCases/listFavoriteTracksUseCase';
import { AppReducerTypes } from '../../reducers/types';
import SignInConect from '../../components/SignInModal/SignIn';
import toogleMusicFavoriteUseCase from '../../modules/user/useCases/toogleMusicFavoriteUseCase';
import RenderFavorite from './RenderFavorite';
import { setFavoritesData } from '../../reducers/favoritesReducer/actions';

interface Props {
  userKey:string
  favorites:Track[] 
  setFavoritesData:Function
}

function FavoritesConnect({userKey, favorites, setFavoritesData}:Props) {
  const [ isRefreshing, setIsRefreshing ] = useState(false);
  
  const handleRemoveFromFavorite = async (track: Track) => {
    await toogleMusicFavoriteUseCase().execute({
      userKey,
      music:track,
      favoriteList: favorites
    })
    
    onload();
  }

  const onload = async () => {
    setIsRefreshing(true);

    if (!userKey) 
      return
    
    const tracks = await listFavoriteTracksUseCase.execute(userKey);
    setFavoritesData(tracks);
    setIsRefreshing(false);
  }

  useEffect(()=>{
      onload();
  },[])

  return (
    <RefreshControl 
      style={styles.container}
      refreshing={isRefreshing}
      onRefresh={onload}
    >
      { (userKey !== "") && (
        <FlatList 
          testID='flatlist-favorites'
          nestedScrollEnabled
          data={favorites}
          renderItem= {({item}) => 
            <RenderFavorite 
              item={item} 
              userKey={userKey} 
              handleRemoveFromFavorite={handleRemoveFromFavorite}
            />
          }
          keyExtractor={(item) => item.SongCode}
        />
      )}

      <Modal visible={userKey === ""}>
        <SignInConect />
      </Modal>
    </RefreshControl>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    userKey: state.userReducer.id,
    favorites: state.favoritesReducer
  }
}

const Favorites = connect(mapStateToProps, { setFavoritesData })(FavoritesConnect);
export default Favorites;