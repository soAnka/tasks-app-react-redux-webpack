import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux'
import Home from './Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from '../layouts/Root';
import TasksList from './TasksList';
import { handleInitialData } from '../actions/shared';
import TodoOrGoal from './TodoOrGoal';
import Create from './Create';
import Favorites from './Favorites';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route  path="/start"  element={<TodoOrGoal />} />
            <Route path="/add" element={<Create />} />
            <Route path="/todos" element={<TasksList />} />
            <Route path="/goals" element={<TasksList />} />
            <Route path="/favorites" element={<Favorites />} />
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

export default App;
