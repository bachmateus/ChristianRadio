/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';
import MusicPlayer from '../src/components/MusicPlayer/index';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <MusicPlayer 
      track={{
        artist: 'teste',
        artwork: 'teste',
        id: 'teste',
        title: 'teste',
        url: '',
        album: 'teste',
      }}
      isTrackFavorite = {true}
      isPlaying = {true}
      
      handleFavorite={()=>{}}
      handlePrevious={()=>{}}
      handlePlay={()=>{}}
      handleNext={()=>{}}
    />
  );
});
