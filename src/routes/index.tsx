import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './main.route';

export default function Routes() {
  return (
    <NavigationContainer>
      <MainRoute/>
    </NavigationContainer>
  );
}