/*
  루트스택을 만듭니다.
  메인탭을 만듭니다.
  화면들을 간단히 만듭니다.

  해야할 것 
  1.코드 분할 O
  2.styles 적용
  3.서버와 연결

*/
import React, {useState  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//context
import {DataContext} from './src/component/DataContext'

//Screen
import {SettingScreen} from './src/screen/SettingScreen'
import {HomeScreen} from './src/screen/HomeScreen'
import {ModalScreen} from './src/screen/ModalScreen'
import {StoreScreen} from './src/screen/StoreScreen'
import {RegisterScreen} from './src/screen/RegisterScreen'
import {FindPasswordScreen} from './src/screen/FindPasswordScreen'



const Tab = createBottomTabNavigator();
function MainTapScreen() {
  return (
    <Tab.Navigator initialRouteName= 'Home'>
        <Tab.Screen name="Store" component={StoreScreen} />
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();
function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal" headerMode="none" initialRouteName= 'Login' >
      <RootStack.Screen
        name="Main"
        component={MainTapScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Login" component={ModalScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="FindPassword" component={FindPasswordScreen} />
    </RootStack.Navigator>
  );
}

function App() {
  const [isLogined, setIsLogined] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <DataContext.Provider value={{
      "isLogined":isLogined,
      "setIsLogined":setIsLogined,
      "username":username,
      "setUsername":setUsername,
    }}>
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
    </DataContext.Provider>
  );
}


export default App;
