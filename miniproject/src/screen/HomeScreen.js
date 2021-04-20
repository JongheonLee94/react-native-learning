import React, {useState,useContext  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import {DataContext} from '../component/DataContext'

export function HomeScreen({ navigation }) {
  const {username} = useContext(DataContext)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Hello,{username}!This is the home screen!</Text>
      
    </View>
  );
}