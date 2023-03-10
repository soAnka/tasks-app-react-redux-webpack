import React from "react";
import { connect } from "react-redux";
import { Grid, Box } from "@mui/material";
import Title from "../components/Title";

const TasksLayout = ({ userChoice, children, componentType }) => {
  const goalOrTodo = userChoice
    .charAt(0)
    .toUpperCase()
    .concat(userChoice.slice(1, 5));

  return (
    <Grid container p={4}>
      <Grid item xs={12}>
        <Title
          titleType="main"
          userChoice={userChoice}
          componentType={componentType}
        />
      </Grid>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ height: "100%" }}>{children}</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ todos, goals, userChoice }) => {
  const dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((t) => todos[t])
      : Object.keys(goals).map((g) => goals[g]);

  return { dataList, userChoice };
};

export default connect(mapStateToProps)(TasksLayout);
