import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TodoButton = ({ onPress, complete, name }) => ( 

	<TouchableHighlight
		onPress={onPress}
		underlayColor='#efefef'
		style={styles.button}>
		<Text style={[
			styles.text,
			complete ? styles.complete : null,      // 조건문 ? A : B 으로 값이 정해집니다. 조건문이 참이라면 A쪽의 값이, 조건문이 거짓이라면 B쪽의 값이 됩니다.
			name === 'Delete' ? styles.deleteButton : null ]}>
			{name}
		</Text>
	</TouchableHighlight>
)

const styles = StyleSheet.create({
	button: {
		alignSelf: 'flex-end',
		padding: 7,
		borderColor: '#ededed',
		borderWidth: 1,
		borderRadius: 4,
		marginRight: 5
	},
	text: {
		color: '#666666'
	},
	complete: {
		color: 'green',
		fontWeight: 'bold'
	},
	deleteButton: {
		color: 'rgba(175, 47, 47, 1)'
	}
})

export default TodoButton