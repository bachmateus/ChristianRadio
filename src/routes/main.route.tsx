import React from 'react';
import Home from '../screens/Home';
import ProfileConect from '../screens/Profile';
import Stations from '../screens/Stations';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/Ionicons';

const{ Navigator, Screen } = createBottomTabNavigator();

export default function MainRoute() {
  return (
    <Navigator 
      initialRouteName='Now Playing'
      screenOptions={{
        lazy:false,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: '#080f1f',
          borderTopWidth:0,
        },
        // tabBarActiveBackgroundColor: "#fff",
        tabBarActiveTintColor: '#fff',
        headerShown: false
      }}
      // tabBarOptions={{
        
      // }}
    >
      
      <Screen name="Stations" component={Stations} 
        // options={{
        //   tabBarIcon: ({color}) => (
        //     <MaterialIcons name="library-music" size={24} color={color} />
        //   )
        // }}
      />


      <Screen name="Now Playing" component={Home} 
        // options={{
        //   tabBarIcon: ({color}) => (
        //     <Icon name="ios-play-circle-sharp" size={24} color={color} />
        //   )
        // }}
      />
            
      <Screen name="Favorites" component={ProfileConect} 
        // options={{
        //   tabBarIcon: ({color}) => (
        //     <Icon name="heart-sharp" size={24} color={color} />
        //   )
        // }}
      />
    </Navigator>
  );
}
