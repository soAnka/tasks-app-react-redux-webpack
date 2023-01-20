import React from 'react';
import { connect } from 'react-redux'
import Task from './Task';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';


const TodosList = ({ dataList, userChoice }) => {
    return (
        <Grid container p={4} >
            <Grid item xs={12}>
                <h1>{userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 5))} List</h1>
            </Grid>
            <Grid container spacing={2} sx={{ height: '100%' }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ height: '100%' }}>
                        <List>
                            {dataList.map((t, index) => {
                                return <Task type="list" ind={index} key={t.id} id={t.id} />
                            })}
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = ({ todos, goals, userChoice }) => {
    const dataList = userChoice === 'todos' ? Object.keys(todos).map((t) => todos[t]) : Object.keys(goals).map((g) => goals[g])
    return { dataList, userChoice }
}

export default connect(mapStateToProps)(TodosList);