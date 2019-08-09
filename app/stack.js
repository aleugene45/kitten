import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {
  KittenListScreen,
  KittenViewScreen,
} from './src/screens'
export const routes = {
  KittenList: 'KittenList',
  KittenView: 'KittenView',
};

export const AppNavigator = createStackNavigator(
  {
    KittenList: {
      screen: KittenListScreen
    },
    KittenView: {
      screen: KittenViewScreen
    },
  },
  {
    initialRouteName: 'KittenList',
    headerLayoutPreset: 'center'
  }
);