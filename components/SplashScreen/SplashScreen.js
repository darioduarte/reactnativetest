import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';

const SplashScreen = function() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Loading BestOne...</Text>
    </View>
  );
}

export default SplashScreen;
