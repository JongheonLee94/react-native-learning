import React, {useState  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//context
import {DataContext} from '../component/DataContext'


export function RegisterScreen({ navigation }) {
    return (
      <View>
        <Text>
          가입
        </Text>
        <Button onPress={() => navigation.goBack()} title="돌아가기" />
      </View>
    )
  }