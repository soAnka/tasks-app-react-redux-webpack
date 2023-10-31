import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { connect } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";
import Task from "./Task";

const colorComplexity = {
  0: "green",
  1: "green",
  2: "green",
  3: "orange",
  4: "red",
  5: "red",
};

function renderOnScale(value) {
  let circlesArray = [];
  for (let i = 0; i < 5; i++) {
    i < value
      ? circlesArray.push(
          <CircleIcon
            key={i}
            style={{ opacity: 1, color: colorComplexity[value] }}
            fontSize="inherit"
          />
        )
      : circlesArray.push(
          <CircleIcon
            key={i}
            style={{ opacity: 0.2 }}
            fontSize="inherit"
            color="neutral"
          />
        );
  }
  return <div>{circlesArray}</div>;
}

function taskDuration() {
  const today = Number(new Date(Date.now()).toLocaleDateString().slice(0, 2));

  return today;
}

const TasksTable = ({ filteredTasks }) => {
  const tableCell = [
    "Title",
    "Date",
    "Status",
    "Duration",
    "Complexity",
    "Remove",
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableCell.map((tc) => {
              return (
                <TableCell style={{ fontWeight: 800 }} key={tc}>
                  {tc}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTasks.map((task, index) => {
            const durationDaysNum =
              taskDuration() - Number(task.date.slice(0, 2));
            return (
              <Task
                type="table"
                ind={index}
                key={task.id}
                id={task.id}
                durationDaysNum={durationDaysNum}
                renderOnScale={renderOnScale}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = ({ todos, goals, userChoice, filterChoice }) => {
  const dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((t) => todos[t])
      : Object.keys(goals).map((g) => goals[g]);
  let filtered =
    filterChoice === "completed"
      ? dataList.filter((d) => d.completed)
      : dataList.filter((d) => !d.completed);
  const filteredTasks =
    filterChoice === "all" ? (filtered = dataList) : filtered;
  return { dataList, userChoice, filterChoice, filteredTasks };
};

export default connect(mapStateToProps)(TasksTable);
