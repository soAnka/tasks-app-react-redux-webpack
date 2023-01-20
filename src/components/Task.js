import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/todo';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { connect } from "react-redux"
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { removeGoal, toggleGoal } from "../actions/goals";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const StyledListItem = styled(ListItem)(({ theme }) => ({
  '[datatest-id]=DeleteIcon': {
    color: theme.palette.secondary.main
  },
  '[datatest-id]=CheckBoxOutlineBlankIcon': {
    color: theme.palette.secondary.main
  },
}))


const Task = ({task, userChoice, ind, durationDaysNum, type, renderOnScale}) => {
  const [checked, setChecked] = useState([-1]);
  const dispatch = useDispatch()
  const [isFav, setIsFav] = useState(task.isFavorite)
  const labelId = `checkbox-list-secondary-label-${ind}`;
  // const hardness = ['ok', 'easy', 'difficult', 'hard', 'super hard']

  const removeTask = (removeId) => {
    userChoice === 'todos' ? dispatch(removeTodo(removeId)) : dispatch(removeGoal(removeId))
}

  const toggleIsFavorite = () => {
    setIsFav(!isFav)
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);

    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    const todoToToggle = {
      id: task.id,
      val: newChecked.length === 2 || newChecked.length === 0 ? true : false
    }
    { userChoice === 'todos' ? dispatch(toggleTodo(todoToToggle)) : dispatch(toggleGoal(todoToToggle)) }
    dispatch(toggleTodo(todoToToggle))
  };

  return (
    <>
      {type === 'list'
        ?
        <StyledListItem
          secondaryAction={
            <Checkbox
              edge="end"
              onClick={handleToggle(ind)}
              checked={checked.indexOf(ind) === 1}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          }
          disablePadding
        >
          <Button onClick={() => removeTask(task.id)}><DeleteIcon /></Button>
          <Button onClick={toggleIsFavorite}>{isFav ? <FavoriteIcon color="favColor" /> : <FavoriteBorderRoundedIcon color="favColor" />}</Button>
          <ListItemText>{task.text}</ListItemText>
        </StyledListItem>
        :
        <TableRow
          key={task.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {task.text}
          </TableCell>
          <TableCell align="center">{task.date}</TableCell>
          <TableCell align="center">{task.completed ? <Chip label="completed" color='completedTaskColor' /> : <Chip label="incomplete" color="uncompletedTaskColor" />}</TableCell>
          <TableCell align="center">{durationDaysNum > 0 ? `${durationDaysNum}` : null} {durationDaysNum > 0 ? 'days ago' : 'today'} </TableCell>
          <TableCell align="center">
            {renderOnScale(task.hardness)}
          </TableCell>
          <TableCell align="center"><Button onClick={() => userChoice === 'todos' ? dispatch(removeTodo(task.id)) : dispatch(removeGoal(task.id))}><DeleteIcon /></Button></TableCell>
        </TableRow>
      }
    </>

  )
}

const mapStateToProps = ({ todos, goals, userChoice }, { id }) => {
  const task = userChoice === 'todos' ? todos[id] : goals[id]

  return { task, id, userChoice }
}

export default connect(mapStateToProps)(Task);