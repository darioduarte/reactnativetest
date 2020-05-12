import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './components/Navigator/Navigator.js';

const App = () => <Navigator/>;

export default App;
