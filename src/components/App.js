import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux'
import Home from './Home';
import AddTodo from './Home';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from '../layouts/Root';
import TodosList from './TodosList';
import { handleInitialData } from '../actions/shared';
import TodoOrGoal from './TodoOrGoal';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route  path="/start"  element={<TodoOrGoal />} />
            <Route path="/add" element={<Home />} />
            <Route path="/todos" element={<TodosList />} />
        </Route>
    )
);


  const App = (props) => {
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(handleInitialData())
    },[])

    return (
        <RouterProvider router={router} />
    )
}


const mapStateToProps = ({todos, goals, userChoice}) => {

    return {
        userChoice,
        todos,
        goals,
    }
}

export default connect(mapStateToProps)(App);
