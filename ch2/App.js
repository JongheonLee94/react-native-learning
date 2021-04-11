import { StatusBar } from 'expo-status-bar';
import React ,{Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyComponent extends Component {
  constructor(props) {

      super(props); //위에서 받아온 props가 state에 필요한 경우만
      this.state = {//state 생성
          year: 2020,
          name: 'lee',
          colors: ['blue'],
          book:'props'
      }
      // this.updateYear = this.updateYear.bind(this);   //updateYear가 에러가 난다면 추가
      // // this.update = this.update.bind(this);
      // this.updateBook = this.updateBook.bind(this);
  }
  updateYear(){
      this.setState({ //setState가 끝에 render를 호출하여 화면이 바뀌게 된다.
          year: 2021
      })
      
  }
  update() {
    this.state.year=2019 //직접 바꾸게 되면 render가 호출되지 않아 화면이 바뀌지 않는다.
    this.forceUpdate()   //추천되지는 않지만 화면을 강제로 업데이트해서 변경사항을 적용한다. 
  }
  updateBook(){
    this.setState({
      book:'changed props'
    })
  }
  
render(){
  const { book } = this.state //this.state.book
  return (
    <View style={styles.container}>
      <Heading/>
      <Input/>
      <TodoList/>
      <Button/>
      <TabBar/>
      <StatusBar style="auto" />
    </View>
  );
}
}

const Heading = () => {
  return(<View>
    <Text>Header</Text>
  </View>
  );
}
const Input = () => {
  return(<View>
    <Text>Input</Text>
  </View>
  );
}
const TodoList = () => {
  return(<View>
    <Text>TodoList</Text>
  </View>
  );
}
const Button = () => {
  return(<View>
    <Text>Button</Text>
  </View>
  );
}
const TabBar = () => {
  return(<View>
    <Text>TabBar</Text>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MyComponent