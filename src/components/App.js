import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux'
import Home from './Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from '../layouts/Root';
import TodosList from './TodosList';
import { handleInitialData } from '../actions/shared';
import TodoOrGoal from './TodoOrGoal';
import Create from './Create';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route  path="/start"  element={<TodoOrGoal />} />
            <Route path="/add" element={<Create />} />
            <Route path="/todos" element={<TodosList />} />
            <Route path="/goals" element={<TodosList />} />
        </Route>
    )
);


  const App = () => {
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
