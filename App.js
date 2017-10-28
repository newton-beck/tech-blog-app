import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/home/HomeScreen';
import CategoriesScreen from './src/categories/CategoriesScreen';

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Categories: {
    screen: CategoriesScreen,
  },
});

export default App;
