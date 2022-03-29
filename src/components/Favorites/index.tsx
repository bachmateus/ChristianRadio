import React, { useEffect, useState } from 'react';
import { View, FlatList, Modal } from "react-native";
import { connect } from 'react-redux';

import Track from '../../modules/station/model/Track';
import styles from './styles';

import listFavoriteTracksUseCase from '../../modules/user/useCases/listFavoriteTracksUseCase';
import { AppReducerTypes } from '../../reducers/types';
import SignInConect from '../../components/SignInModal/SignIn';
import toogleMusicFavoriteUseCase from '../../modules/user/useCases/toogleMusicFavoriteUseCase';
import RenderFavorite from './RenderFavorite';

interface Props {
  userKey:string
}

function FavoritesConnect({userKey}:Props) {
  const [ favoriteTracks, setFavoriteTracks ] = useState([] as Track[]);
  
  const handleRemoveFromFavorite = async (track: Track) => {
    await toogleMusicFavoriteUseCase().execute({
      userKey,
      music:track
    })
    
    onload();
  }

  const onload = async () => {
    
    if (!userKey) 
      return
    
    const tracks = await listFavoriteTracksUseCase.execute(userKey);
    setFavoriteTracks(tracks);
  }

  useEffect(()=>{
    onload();
  },[userKey])

  return (
    <View style={styles.container}>
      { (userKey.length > 0) && (
        <FlatList 
          nestedScrollEnabled
          data={favoriteTracks}
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
    </View>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    userKey: state.userReducer.id,
  }
}

const Favorites = connect(mapStateToProps)(FavoritesConnect);
export default Favorites;