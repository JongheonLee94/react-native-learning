import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

// const TodoList = ({ todos }) => {
// 	todos = todos.map((todo, i) => {
// 		return (
// 			<Todo
// 				key={todo.todoIndex}
// 				todo={todo} />
// 		)
// 	})
// 	return (
// 		<View>
// 			{todos}
// 		</View>
// 	)
// }

//3.20


// const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
// 	todos = todos.map((todo, i) => {
// 		return (
// 			<Todo
// 				deleteTodo={deleteTodo}
// 				toggleComplete={toggleComplete}
// 				key={i}
// 				todo={todo} />
// 			)
//     })

//     return (
// 		<View>
// 			{todos}
// 		</View>
// 	)
// }

//3.26

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {

    const getVisibleTodos = (todos, type) => { //선택한 필터링에 따라 보여주기 위한 메서드입니다.
		switch (type) {                         
			case 'All': //전부
				return todos
			case 'Complete': //완료한 것만
				return todos.filter((t) => t.complete)
			case 'Active':  //완료 안한 것만
				return todos.filter((t) => !t.complete)
		}
	}
	todos = getVisibleTodos(todos, type)

	todos = todos.map((todo, i) => {    // map:배열 내의 모든 요소 각각에 대하여 주어진 함수 호출 결과를 모아 새로운 배열로 반환합니다. 
		return (
			<Todo
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
				key={i}
				todo={todo} />
			)
    })

    return (
		<View>
			{todos}
		</View>
	)
}


export default TodoList