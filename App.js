import { StatusBar } from 'expo-status-bar';
import React ,{Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyComponent extends Component {
  constructor(props) {

      super(props);
      this.state = {
          year: 2020,
          name: 'lee',
          colors: ['blue'],
          book:'props'
      }
      this.updateYear = this.updateYear.bind(this);
      // this.update = this.update.bind(this);
      this.updateBook = this.updateBook.bind(this);
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
      <Text>Open up App.js to start working on your app! Hello world</Text>
      
                <Text>My name is {this.state.name}</Text>
                <Text 
                  onPress={() => this.updateYear() } >
                    The year is {this.state.year}
                </Text>
                <Text>My colors are {this.state.colors[0]}</Text>
                <Text 
                onPress={ () => this.update()}>
                  Force Update
                </Text>
                <BookDisplay 
                  updateBook={ () => this.updateBook() } 
                book={ book } />
      <StatusBar style="auto" />
    </View>
  );
}
}

class BookDisplay extends Component {
  render() {
    const { book, updateBook } = this.props
    return(
      <View>
        <Text 
          onPress={ updateBook }>
        { book }</Text>
      </View>
    )
  }
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