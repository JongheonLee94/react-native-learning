import React, {useState  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//context
import {DataContext} from '../component/DataContext'

import {TouchButton} from '../component/TouchButton'

function login(id,pw){
    //추후 서버와 통신
    let isLogined = false;
    if(id ===""&& pw ===""){
      isLogined= true;
    }
    return isLogined
  }
  
  
  export function ModalScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>로그인페이지</Text>
        <View style={styles.inputContainer}>
          <TextInput                             
                value = {email}                
                style= {styles.input}               
                placeholder='email'
                placeholderTextColor ='#CACACA'     
                selectionColor='#666666'           
                onChangeText={setEmail}         
                />    
          <TextInput                            
                value = {password}                
                style= {styles.input}               
                placeholder='password'
                placeholderTextColor ='#CACACA'    
                selectionColor='#666666'          
                onChangeText={setPassword}        
                />   
  
          
          <View style={{
          margin:10,
          marginTop: 5,
          marginBottom: 20, 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'}}>
          <TouchButton name="회원가입" onPress={() => navigation.navigate("Register")}/>
          <TouchButton name="비밀번호찾기" onPress={() => navigation.navigate("FindPassword")}/>
          </View>
          <DataContext.Consumer>
            {
            ({isLogined,setIsLogined}) =>
            {
              if(isLogined){navigation.navigate('Main');console.log(isLogined)}
              
              return (<Button
                onPress={() => {setIsLogined(login(email,password));console.log(email+","+password+","+isLogined);}}
                title="로그인"
              />)}
              
              }
          </DataContext.Consumer>
  
          
  
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
	inputContainer:{
    width:"90%",

		marginLeft: 20,
		marginRight: 20,
		shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowColor: '#000000',
		shadowOffset: { width: 2, height: 2 }
	},
	input: {
		height: 50,
		backgroundColor: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10,
    margin:2,
	}
})
