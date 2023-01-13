import React from 'react';
import {connect} from 'react-redux'
import Todo from './Todo';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import TodoTable from './TodoTable';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const TodosList = ({dataList, userChoice}) => {
    return (
    <Grid container p={4} >
        <Grid item xs={12}>
            <h1>{userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1,5))} List</h1>
        </Grid>
        <Grid container spacing={2} sx={{height:'100%'}}>
            <Grid item xs={12} sm={12} md={12}>
                <Box sx={{height:'100%'}}>
                <List>
                {dataList.map((t, index)=>{
                return <Todo ind={index} key={t.id} id={t.id} text={t.text} />
            })}
                </List>
                </Box>
            </Grid>
        </Grid>
    </Grid>
)
}

const mapStateToProps = ({todos, goals, userChoice}) => {
    const dataList = userChoice === 'todos' ? Object.keys(todos).map((t)=>todos[t]) :  Object.keys(goals).map((g)=>goals[g])
    return { dataList, userChoice }
}

export default connect(mapStateToProps)(TodosList);