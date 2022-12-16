import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Track from '../../modules/station/model/Track';
import { gradeStyles, listStyles } from './styles';

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
  const [ isListStyles, setIsListStyles ] = useState(true);
  
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
    setFavoritesData(tracks);
    // setIsRefreshing(false);
    // setIsRemoving(false);
  }

  useEffect(()=>{
    // console.log(favorites)
      onload();
  },[])

  const onListStyleChange = () => {
    setIsListStyles(!isListStyles);
  }

  const styles = isListStyles ? listStyles : gradeStyles
  
  return (<>
    <RefreshControl 
      style={styles.container}
      refreshing={isRefreshing}
      onRefresh={onload}
    >
      <View style={styles.favoriteTitleContainer}>
        <Text style={styles.favoriteTitle}>
          Favorites
        </Text>

        <TouchableOpacity onPress={onListStyleChange}>
          <MaterialCommunityIcons style={styles.listIcon} name="format-list-bulleted-square" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>

      { (userKey !== "") && (
        <FlatList 
          testID='flatlist-favorites'
          nestedScrollEnabled
          style={{backgroundColor: '#0c0c0c',}}
          data={favorites}
          ListEmptyComponent={ListEmptyComponent}
          renderItem= {({item}) => 
            <RenderFavorite 
              item={item} 
              userKey={userKey} 
              styles={styles}
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