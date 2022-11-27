import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, RefreshControl, Text, View } from "react-native";
import { connect } from 'react-redux';

import Track from '../../modules/station/model/Track';
import styles from './styles';

import listFavoriteTracksUseCase from '../../modules/user/useCases/listFavoriteTracksUseCase';
import { AppReducerTypes } from '../../reducers/types';
import SignInConect from '../../components/SignInModal/SignIn';
import toogleMusicFavoriteUseCase from '../../modules/user/useCases/toogleMusicFavoriteUseCase';
import RenderFavorite from './RenderFavorite';
import { setFavoritesData } from '../../reducers/favoritesReducer/actions';
import ListEmptyComponent from './ListEmptyComponet';

interface Props {
  userKey:string
  favorites:Track[] 
  setFavoritesData:Function
}

function FavoritesConnect({userKey, favorites, setFavoritesData}:Props) {
  const [ isRefreshing, setIsRefreshing ] = useState(false);
  const [ isRemoving, setIsRemoving ] = useState(false);
  // const [ isRemoving, setIsRemoving ] = useState(true);
  
  const handleRemoveFromFavorite = async (track: Track) => {
    // setIsRemoving(true);

    await toogleMusicFavoriteUseCase().execute({
      userKey,
      music:track,
      favoriteList: favorites
    })
    
    onload();
  }

  const onload = async () => {
    // setIsRefreshing(true);

    // if (!userKey) 
      // return
    
    const tracks = await listFavoriteTracksUseCase.execute(userKey);
    console.log(tracks);
    setFavoritesData(tracks);
    // setIsRefreshing(false);
    // setIsRemoving(false);
  }

  useEffect(()=>{
    // console.log(favorites)
      onload();
  },[])

return (<>
    <RefreshControl 
      style={styles.container}
      refreshing={isRefreshing}
      onRefresh={onload}
    >
      <Text style={styles.favoriteTitle}>
        Favorites
      </Text>
      { (userKey !== "") && (
        <FlatList 
          testID='flatlist-favorites'
          nestedScrollEnabled
          data={favorites}
          ListEmptyComponent={ListEmptyComponent}
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
    
    { isRemoving && (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={'#fff'} size="large" />
      </View>
    )}
  </>)
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    userKey: state.userReducer.id,
    favorites: state.favoritesReducer
  }
}

const Favorites = connect(mapStateToProps, { setFavoritesData })(FavoritesConnect);
export default Favorites;