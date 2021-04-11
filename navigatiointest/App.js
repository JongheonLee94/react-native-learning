// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TextInput, Image} from 'react-native';
import { NavigationContainer,useFocusEffect,useBlurEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function LogoTitle(props) {
  console.log(props)
  return (
    <View>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./user.jpg')}
    />
</View>
  );
}

//===================== 홈화면 =====================
function HomeScreen({navigation,route  }) { //navigation은 화면 전환 같은 기능을 가지고 있고 route는 정보(화면에 대한 정보,params)를 가지고 있습니다. 

  
  React.useEffect(() => { //class를 이용하는 경우에 componentDidMount ,componentDidUpdate 와 유사합니다. 처음 랜더링과 이후 업데이트에 수행됩니다. (비동기)
    if (route.params?.post) {
      // post가 업데이트 되고나면,`route.params.post`를 이용해 무언가를 실행하는 곳 예시로 서버로 전송이 있다고 합니다.
    }
  }, [route.params?.post]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')} //navigation.navigate는 screen의 name을 받아 그 페이지로 이동 시켜줍니다.
      />
       <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {          //두번째 파라미터는 params 입니다. 필요하다면 데이터를 넘길 수 있습니다.
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />

      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost',{
          name:"글쓰기"
        })}
      />
      
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Go to TestZone"
        onPress={() => navigation.navigate('Testzone')} //navigation.navigate는 screen의 name을 받아 그 페이지로 이동 시켜줍니다.
      />
    </View>
  );
}


//===================== 디테일 =====================
function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  useFocusEffect(
    React.useCallback(() => { //blur fcous 이벤트를 사용하는 것보다 편하게 이용가능한 함수
      alert('Screen was focused');
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', { // stack에 쌓기위한 기능입니다. 같은 페이지를 navigate로 이동할 경우 스택이 쌓이지 않습니다.
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button title="Go back" onPress={() => navigation.goBack()} //뒤로가는 기능입니다.
       />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop() //모든 스택의 첫번째를 제외한 전부를 pop합니다
        }
      />

      <Button
          title="Update the Params"
          onPress={() => navigation.setParams({otherParam: 'Updated!'})} // params를 업데이트합니다.
      />

            <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}   //
      />

    </View>
  );
}


//===================== 글쓰기 =====================
function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState(''); //class의 state처럼 쓰기 위해 function형에서는 Hook을 씁니다.  항목마다 정의해줘야합니다. 

  return (
    <>
      <TextInput //글자입력입니다.
        multiline //1줄이 아닌 여러줄로 입력합니다.
        placeholder="What's on your mind?" 
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
          
        }}
      />
    </>
  );
}

function Testzone({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => { // 헤더에서 스크린에 영향
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return <Text>Count: {count}</Text>;
}

const Stack = createStackNavigator(); //네비게이터 생성

function App() {
  return (
    <NavigationContainer>
      {/*initialRouteName은 초기 시작화면을 지정합니다. 기본값은 name="Home" 입니다. */}
      <Stack.Navigator //headerMode="none" //headerMode를 none으로 하면 헤더가 지워집니다.
      screenOptions={{
        headerStyle: { //스택네비게이터에서 헤더를 속성을 지정하면 모든 스크린의 헤더에 적용됩니다. 그렇지만 개별 스크린에 속성을 적용했을 경우 개별 스크린의 속성이 우선됩니다.
          backgroundColor: '#f4001e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >   

        <Stack.Screen name="Home" component={HomeScreen}  
        options={{
          title: 'My home',//option의 title은 상단에 나오는 이름입니다.
          headerStyle: {  //header의 스타일을 지정합니다.
            backgroundColor: '#f4511e', //배경색
          },
          headerTintColor: '#fff', //글자색
          headerTitleStyle: {
            fontWeight: 'bold',//글자스타일
          },
          
        }}
        >
        </Stack.Screen>
        <Stack.Screen 
        name="Details"
        component={DetailsScreen} 
        initialParams={{ itemId: 42, otherParam: "somthing" }} //initialParams 디폴트파라미터 같은 역할입니다. params에 값을 보내지 않는다면  이 값들이 들어가게 됩니다.
         options={{headerTitle: props => <LogoTitle { ...props} /> ,
         headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#000"
          />
        ),}}
         />
         <Stack.Screen 
        name="CreatePost"
        component={CreatePostScreen}
        options={({ route }) => ({ title: route.params.name })} //title을 params로 넘기는 법
        />
        <Stack.Screen
        name="Testzone"
        component={Testzone}
        options={({ navigation, route }) => ({ 
          headerTitle: props => <LogoTitle {...props} />,
        })}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;