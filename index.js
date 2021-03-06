/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import { LogBox } from 'react-native';
 import TrackPlayer from 'react-native-track-player';

 LogBox.ignoreLogs([
   "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
 ]);
 AppRegistry.registerComponent(appName, () => App);
 
 // react native track player setup
 TrackPlayer.registerPlaybackService(() => require('./src/modules/player/rn-track-player.service'));