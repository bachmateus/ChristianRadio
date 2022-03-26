import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import ProfileConect from '../screens/Profile';
import Favorites from '../screens/Favorites';

const{ Navigator, Screen } = createDrawerNavigator();

export default function MainRoute() {
  return (
    <Navigator>
      <Screen name="Playing" component={Home} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Profile" component={ProfileConect} />
    </Navigator>
  );
}
