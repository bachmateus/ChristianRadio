 import 'react-native';
 import React from 'react';
 import MusicPlayer from '.';
import { render } from '@testing-library/react-native';
// import '@types/jest';

 // Note: test renderer must be required after react-native.
//  import renderer from 'react-test-renderer';
// import { render}
 
 it('renders correctly', () => {
  const component = render(
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
  //  const component = renderer.create(
  //    <MusicPlayer 
  //      track={{
  //        artist: 'teste',
  //        artwork: 'teste',
  //        id: 'teste',
  //        title: 'teste',
  //        url: '',
  //        album: 'teste',
  //      }}
  //      isTrackFavorite = {true}
  //      isPlaying = {true}
       
  //      handleFavorite={()=>{}}
  //      handlePrevious={()=>{}}
  //      handlePlay={()=>{}}
  //      handleNext={()=>{}}
  //    />
  //  );

   console.log(component.debug())
 });
 