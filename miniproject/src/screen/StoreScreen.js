import React, {useState  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//context
import {DataContext} from '../component/DataContext'


export function StoreScreen({ navigation }) {
    return (
      <View>
        <DataContext.Consumer>
          {
            ({isLogined,setIsLogined}) =>
            {
              if(!isLogined){navigation.navigate('Login');console.log(isLogined)}
            }     
           }
          </DataContext.Consumer>
        <Text>
          상점 페이지
        </Text>
        
      </View>
    )
  }
  