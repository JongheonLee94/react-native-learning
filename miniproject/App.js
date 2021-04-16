/*
  루트스택을 만듭니다.
  메인탭을 만듭니다.
  화면들을 간단히 만듭니다.

  해야할 것 
  1.코드 분할
  2.styles 적용
  3.서버와 연결

*/
import React, {useContext,useState  } from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <DataContext.Consumer>
        {
        ({isLogined,setIsLogined}) =>
         {
           if(!isLogined){navigation.navigate('Login');console.log(isLogined)}
           
          return (<Button
            onPress={() => {setIsLogined(false);console.log(isLogined);}}
            title="로그아웃"
          />)}
           
           }

        
      </DataContext.Consumer>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}


function login(id,pw){
  //추후 서버와 통신
  let isLogined = false;
  if(id ===""&& pw ===""){
    isLogined= true;
  }
  return isLogined
}


function ModalScreen({ navigation }) {
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
        <Button onPress={() => navigation.navigate("Register")} title="회원가입" />
        <Button onPress={() => navigation.navigate("FindPassword")} title="비밀번호찾기" />
      </View>
      
    </View>
  );
}

function StoreScreen({ navigation }) {
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
        상점페이지
      </Text>
      
    </View>
  )
}

function SettingScreen({ navigation }) {
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
        설정페이지
      </Text>
    </View>
  )
}

function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>
        가입
      </Text>
      <Button onPress={() => navigation.goBack()} title="돌아가기" />
    </View>
  )
}
function FindPasswordScreen({ navigation }) {
  return (
    <View>
      <Text>
        비밀번호찾기
      </Text>
      <Button onPress={() => navigation.goBack()} title="돌아가기" />
    </View>
  )
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

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
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

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal" headerMode="none" >
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
const DataContext =React.createContext();
function App() {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <DataContext.Provider value={{
      "isLogined":isLogined,
      "setIsLogined":setIsLogined,
    }}>
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
    </DataContext.Provider>
  );
}


export default App;
