import React, { lazy, Suspense, useEffect } from "react";
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

const TasksList = lazy(() => import("./tasks/TasksList"));
const Favorites = lazy(() => import("./Favorites"));
const Create = lazy(() => import("./Create"));
const Home = lazy(() => import("./Home"));

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
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
