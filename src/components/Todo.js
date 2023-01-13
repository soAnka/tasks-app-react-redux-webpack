import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todo';

import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { connect } from "react-redux"
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { toggleGoal } from "../actions/goals";


const StyledListItem = styled(ListItem)(({ theme }) => ({
  '& svg': {
    color: theme.palette.secondary.main
},
}))


const Todo = (props) => {
  const [checked, setChecked] = useState([-1]);  
  const dispatch = useDispatch()
  const labelId = `checkbox-list-secondary-label-${props.ind}`;

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
      id: props.id,
      val: newChecked.length === 2 || newChecked.length === 0 ? true : false
    }
    console.log(todoToToggle)
    console.log(todoToToggle)
    {props.userChoice === 'todos'?   dispatch(toggleTodo(todoToToggle)) : dispatch(toggleGoal(todoToToggle)) }
    dispatch(toggleTodo(todoToToggle))
  };

    return (
        <StyledListItem
        secondaryAction={
          <Checkbox
            edge="end"
            onClick={handleToggle(props.ind)}
            checked={checked.indexOf(props.ind) === 1}            
            inputProps={{ 'aria-labelledby': labelId }}          
            />
        }
        disablePadding
      >
            <IconButton><PlaylistAddCheckIcon/></IconButton>
            <ListItemText>{props.text}</ListItemText>
        </StyledListItem>
    )
}

const mapStateToProps = ({todos}, {id}) => {

    const todo = todos[id]

    return {todo, id}
}



export default connect(mapStateToProps)(Todo);