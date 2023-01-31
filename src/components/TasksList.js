import React from 'react';
import { connect } from 'react-redux'
import Task from './Task';
import List from '@mui/material/List';


const TasksList = ({ dataList, filterChoice }) => {

    const renderFiltered = () => {

        let filtered = dataList

        switch (filterChoice) {
            case 'completed':
                return filtered = dataList.filter(t => t.completed)
            case 'uncompleted':
                return filtered = dataList.filter(t => !t.completed)
            case 'all':
                return filtered = dataList
            default:
                dataList
        }
        return filtered
    }

    const filteredTasks = renderFiltered()

    return (
        <List>
            {filteredTasks.map((task, index) => {
                return <Task type="list" ind={index} key={task.id} id={task.id} />
            })}
        </List>
    )
}

const mapStateToProps = ({ todos, goals, userChoice, filterChoice }) => {
    let dataList = userChoice === 'todos' ? Object.keys(todos).map((task) => todos[task]) : Object.keys(goals).map((goal) => goals[goal])

    return { dataList, filterChoice }
}

export default connect(mapStateToProps)(TasksList);