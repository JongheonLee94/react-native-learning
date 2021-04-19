import React from 'react';
import { View, Text, Button,Hooks, TextInput,StyleSheet, TouchableHighlight  } from 'react-native';
export const TouchButton = ({ onPress, name }) => ( 

	<TouchableHighlight
		onPress={onPress}
		underlayColor='#efefef'
		style={styles.button}>
		<Text>
			{name}
		</Text>
	</TouchableHighlight>
)


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
