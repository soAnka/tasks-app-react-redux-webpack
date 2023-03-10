import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleFavTodo, toggleTodo } from "../../actions/todo";
import { connect } from "react-redux";
import { removeGoal, toggleFavGoal, toggleGoal } from "../../actions/goals";
import { Delete, Favorite, FavoriteBorderRounded } from "@mui/icons-material";
import {
  TableRow,
  TableCell,
  Button,
  Checkbox,
  ListItemText,
  Chip,
} from "@mui/material";
import { StyledListItem } from "../../styles/components/Task";

const Task = ({
  task,
  userChoice,
  ind,
  durationDaysNum,
  type,
  renderOnScale,
}) => {
  const dispatch = useDispatch();
  const labelId = `checkbox-list-secondary-label-${ind}`;

  const removeTask = (removeId) => {
    userChoice === "todos"
      ? dispatch(removeTodo(removeId))
      : dispatch(removeGoal(removeId));
  };

  const toggleIsFavorite = () => {
    const isFav = !task.isFavorite;

    const taskFav = { id: task.id, favStatus: isFav };
    userChoice === "todos"
      ? dispatch(toggleFavTodo(taskFav))
      : dispatch(toggleFavGoal(taskFav));
  };

  const toggleTask = (task) => () => {
    const todoToToggle = {
      id: task.id,
      val: !task.completed,
    };
    {
      userChoice === "todos"
        ? dispatch(toggleTodo(todoToToggle))
        : dispatch(toggleGoal(todoToToggle));
    }
  };

  return (
    <>
      {type === "list" ? (
        <StyledListItem
          secondaryAction={
            <Checkbox
              edge="end"
              onClick={toggleTask(task)}
              checked={task.completed}
              inputProps={{ "aria-labelledby": labelId }}
            />
          }
          disablePadding
        >
          <Button onClick={() => removeTask(task.id)}>
            <Delete />
          </Button>
          <Button onClick={toggleIsFavorite}>
            {task.isFavorite ? (
              <Favorite color="favColor" />
            ) : (
              <FavoriteBorderRounded color="favColor" />
            )}
          </Button>
          <ListItemText>{task.text}</ListItemText>
        </StyledListItem>
      ) : (
        <TableRow
          key={task.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {task.text}
          </TableCell>
          <TableCell align="center">{task.date}</TableCell>
          <TableCell align="center">
            {task.completed ? (
              <Chip
                label="completed"
                color="completedTaskColor"
                onClick={toggleTask(task)}
              />
            ) : (
              <Chip
                label="incomplete"
                color="uncompletedTaskColor"
                onClick={toggleTask(task)}
              />
            )}
          </TableCell>
          <TableCell align="center">
            {durationDaysNum > 0 ? `${durationDaysNum}` : null}{" "}
            {durationDaysNum > 0 ? "days ago" : "today"}{" "}
          </TableCell>
          <TableCell align="center">{renderOnScale(task.hardness)}</TableCell>
          <TableCell align="center">
            <Button
              onClick={() =>
                userChoice === "todos"
                  ? dispatch(removeTodo(task.id))
                  : dispatch(removeGoal(task.id))
              }
            >
              <Delete />
            </Button>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const mapStateToProps = ({ todos, goals, userChoice }, { id }) => {
  const task = userChoice === "todos" ? todos[id] : goals[id];

  return { task, id, userChoice };
};

export default connect(mapStateToProps)(Task);
