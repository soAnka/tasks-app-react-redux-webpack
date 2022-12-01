import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

console.log("Todo List")

const TodosList = (props) => {
    console.log(props)

    return (
        <ul>
            {props.todoList.map((t, index)=>{
                return <li key={index}>{t.text}</li>
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    const { todos } = state
    return { todoList: todos.todos }
}

export default connect(mapStateToProps)(TodosList);