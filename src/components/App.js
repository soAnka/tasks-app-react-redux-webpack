import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import { handleInitialData } from "../actions/shared";
import TodoOrGoal from "./TodoOrGoal";
import Home from "./Home";
import TasksList from "./tasks/TasksList";
import Favorites from "./Favorites";
import Create from "./Create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/start" element={<TodoOrGoal />} />
      <Route path="/add" element={<Create />} />
      <Route path="/todos" element={<TasksList />} />
      <Route path="/goals" element={<TasksList />} />
      <Route path="/favorites" element={<Favorites />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    // <Suspense fallback={<div>loading...</div>}>
    <div>
      <RouterProvider router={router} />
    </div>
    // </Suspense>
  );
};

export default App;
