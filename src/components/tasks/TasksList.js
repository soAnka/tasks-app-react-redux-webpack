import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { Grid } from "@mui/material";
import { StyledList } from "../../styles/components/Task";

const TasksList = ({ filteredTasks, userChoice }) => {
  return (
    <Grid container p={4} pt={0}>
      <Grid item xs={12} p={2} className="title_box">
        <h3 align="left">
          {" "}
          All{" "}
          {userChoice
            .charAt(0)
            .toUpperCase()
            .concat(userChoice.slice(1, 5))}{" "}
          List
        </h3>
      </Grid>
      <StyledList>
        {filteredTasks.length ? (
          filteredTasks.map((task, index) => {
            return <Task type="list" ind={index} key={task.id} id={task.id} />;
          })
        ) : (
          <li>You have no tasks.</li>
        )}
      </StyledList>
    </Grid>
  );
};

const mapStateToProps = ({ todos, goals, userChoice, filterChoice }) => {
  let dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((task) => todos[task])
      : Object.keys(goals).map((goal) => goals[goal]);
  let filtered =
    filterChoice === "completed"
      ? dataList.filter((d) => d.completed)
      : dataList.filter((d) => !d.completed);
  const filteredTasks =
    filterChoice === "all" ? (filtered = dataList) : filtered;
  return { filteredTasks, userChoice };
};

export default connect(mapStateToProps)(TasksList);
