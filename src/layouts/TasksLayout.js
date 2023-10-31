import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";

const TasksLayout = ({ children }) => {
  return <Box sx={{ height: "100%" }}>{children}</Box>;
};

const mapStateToProps = ({ todos, goals, userChoice }) => {
  const dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((t) => todos[t])
      : Object.keys(goals).map((g) => goals[g]);

  return { dataList, userChoice };
};

export default connect(mapStateToProps)(TasksLayout);
