import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './src/reducers/store';

import Routes from './src/routes';
import TrackPlayer from 'react-native-track-player';
import TrackPlayerService from './src/modules/player/service/track-player.service';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  // TODO: create a loading modal to show while player is not ready
  useEffect(() => {
    async function run() {
      await TrackPlayerService.setup();
      setIsPlayerReady(true);

      const queue = await TrackPlayer.getQueue();
      if (queue.length <= 0) {
        await TrackPlayerService.setPlayerTracks();
      }
    }

    run();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
};

export default App;
