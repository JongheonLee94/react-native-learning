import React, {useState,useContext  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import {DataContext} from '../component/DataContext'

export function SettingScreen({ navigation }) {
  const {isLogined,setIsLogined} = useContext(DataContext)
  
  const logout = () => {
    console.log("로그아웃")
    fetch('http://cufelee.iptime.org:1490/user/logout/', {
      method: 'POST',
      body: "",
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setIsLogined(json.isLogined)
        console.log(json)
      })
      .catch((error) => {
        //Hide Loader
        // setLoading(false);
        console.error(error);
      });
      
    }
  

  if(!isLogined){navigation.navigate('Login');console.log(isLogined)}
  return (
    <View>
      <Text>
        설정 페이지 
      </Text>
      <Button
            onPress={() => {logout();console.log("테스트")}}
            title="로그아웃"
          />
    </View>
  )
}


