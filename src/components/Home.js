import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../actions/todo';
import { addGoal } from '../actions/goals';
import {formatNewTodo } from '../utils/_DATA'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import TodosList from './TodosList';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import Divider from '@mui/material/Divider';
import { AddBtn, Item, ItemHeader } from '../styles/components/AddTodo.style';
import TodoTable from './TodoTable';

const labels = {
    1: 'Super easy!',
    2: 'Easy',
    3: 'Medium',
    4: 'Difficult',
    5: 'Super difficult!',
  };
  
  function getLabelText(value) {
    return `${value} Circle${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
const Home = (props) => {
    const [value, setValue] = React.useState(1);
    const [hover, setHover] = React.useState(-1);    
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault();
       const todo = formatNewTodo({text, value})
       console.log(todo)
       props.userChoice === 'todos'?  dispatch(addTodo(todo)) :  dispatch(addGoal(todo))
        setText('')
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Grid container p={4}>
            <Grid item xs={12} p={4}>
                <h1>Home</h1>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={7} >
                <Item sx={{height:700}}>
                        <TodoTable />
                </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={5} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Item className='dark'>
                                <ItemHeader p={1}>
                                    <h1>Add New {props.userChoice.charAt(0).toUpperCase().concat(props.userChoice.slice(1,4))}</h1>
                                    <Divider />
                                </ItemHeader>
                                <Item>
                                    <form>
                                        <input placeholder='Fill the input with your new todo' type="text" value={text} onChange={handleChange} />
                                        <Rating
                                                name="hover-feedback"
                                                value={value}
                                                precision={1}
                                                getLabelText={getLabelText}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                                }}
                                                icon = {<CircleIcon fontSize='inherit' label={{color: 'white'}}/>}
                                                emptyIcon={<CircleIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            {value !== null && (
                                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                            )}
                                        <AddBtn variant='contained' onClick={handleSubmit} startIcon={ <AddIcon />}>
                                        Add
                                        </AddBtn>
                                    </form>
                                </Item>
                            </Item>
                        </Grid>
                        <Grid item>
                        <Item sx={{height:363}}>
                            <TodosList />
                        </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

const mapStateToProps = ({todos, goals, userChoice}) => {
    const dataList = userChoice === 'todos' ? Object.keys(todos).map((t)=>todos[t]) :  Object.keys(goals).map((g)=>goals[g])

    return { dataList, goals, userChoice }
}

export default connect(mapStateToProps)(Home);
