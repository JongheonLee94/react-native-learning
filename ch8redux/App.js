// import React, { Component } from 'react';


// import {
//   StyleSheet,
//   View,
//   Text
// } from 'react-native';

// const ThemeContext = React.createContext();

// class Parent extends Component{
//   state = { themeValue: 'light'};

//   toggleThemeValue = () =>{
//     const value = this.state.themeValue === ' dark' ? 'light':'dark';
//     this.setState({ themeValue: value})
    
//   }
//   render() {

//     reutrn (
//       <ThemeContext.Provider
//       value={{
//         themeValue: this.state.themeValue,
//         themeValue: this.toggleThemeValue
//       }}
//       >
//         <View style={StyleSheet.conntainer}>
//           <Text>Hello World!!!</Text>
//         </View>
//         <Child1></Child1>
//       </ThemeContext.Provider>
//     )
//   }
// }

// const Child1 = () => <Child2/>
// const Child2 = () => (
//   <ThemeContext.Consumer>
//     {(val) => (
//       <View style={[styles.conntainer,
//       val.theValue === 'dark' &&
//     { backgroundColor: 'black' }]}>
//       <Text style={styles.text}>Hello from Component2</Text>
//       <Text style={styles.text}
//         onPress={val.toggleThemeValue}>
//           Toggle Theme Value
//       </Text> 
//     </View>
//     )}
//   </ThemeContext.Consumer>
// )
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     fontSize: 22, 
//     color: '#666',
//   }
// })


//8.5
import React from 'react'
import Books from './src/Books' 
// rootReducer 가져오기
import rootReducer from './src/reducers' //index가져옴 
// react-redux에서 Provider 래퍼(Provider wrapper) 가져오기
import { Provider } from 'react-redux'

//redux에서 createStore 가져오기
import { createStore } from 'redux'

//rootReducer를 이용해서 store 객체 생성
const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      // Provider 컴포넌트로 감싼 Books 컴포넌트 반환. Provider의 prop으로 store를 전달함
      <Provider store={store} >
        <Books/>
      </Provider>
    )
  }
}