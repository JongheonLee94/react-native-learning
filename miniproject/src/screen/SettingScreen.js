import React, {useState,useContext  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import {DataContext} from '../component/DataContext'

export function SettingScreen({ navigation }) {
  const {isLogined,setIsLogined} = useContext(DataContext)

  if(!isLogined){navigation.navigate('Login');console.log(isLogined)}
  return (
    <View>
      <Text>
        설정 페이지 
      </Text>
      <Button
            onPress={() => {setIsLogined(false);console.log(isLogined);}}
            title="로그아웃"
          />
    </View>
  )
}


