import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import TodosList from './TodosList';

console.log("App")

const App = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Todos</h2>
            {/* <TodosList /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos:state.todos,
        goals:state.goals
    }
}

export default connect(mapStateToProps)(App);
