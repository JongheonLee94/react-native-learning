import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({ inputValue, inputChange }) => ( //객체 비구조화로 props를 받습니다.
    <View style={styles.inputContainer}>
        <TextInput                              //text입력을 받는 컴포넌트 html로 치면 input type text
            value = {inputValue}                //이 값은 input에 있는 값입니다. 이 값을 바꾸게 되면 input에 값이 바뀝니다.
            style= {styles.input}               
            placeholder='What needs to be done?'//html 과 같습니다. 아무것도 적혀 있지 않을 경우 입력창에 반투명하게 보여줍니다.
            placeholderTextColor ='#CACACA'     //placeholder 글씨 색
            selectionColor='#666666'            //드래그시 색
            onChangeText={inputChange}          //input에 글자가 변하면 실행됩니다. App에서 받아온 메서드,inputChange를 실행합니다.
            />     
            
        </View>
)

const styles = StyleSheet.create({
	inputContainer:{
		marginLeft: 20,
		marginRight: 20,
		shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowColor: '#000000',
		shadowOffset: { width: 2, height: 2 }
	},
	input: {
		height: 60,
		backgroundColor: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10
	}
})

export default Input