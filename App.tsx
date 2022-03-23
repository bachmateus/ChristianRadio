import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
// import TrackPlayer from 'react-native-track-player';

import { store, persistor } from './src/reducers/store';
import Routes from './src/routes';

// TrackPlayer.registerPlaybackService(() => require('./src/modules/player/player.service'));

export default function App() {

  useEffect(() => {
    Linking.addEventListener('url', (a)=>{
      console.log(a)
    })
  },[])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
}