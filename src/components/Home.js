import React from 'react';
import Grid from '@mui/material/Grid';
import TodosList from './TodosList';
import { Item } from '../styles/components/AddTodo.style';
import TodoTable from './TodoTable';
import AddForm from './AddForm';


const Home = () => {
    return (
        <Grid container p={4}>
            <Grid item xs={12} p={4}>
                <h1>Home</h1>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={7} >
                    <Item sx={{ minHeight: 720 }}>
                        <TodoTable />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={5} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12} sm={12} md={5} >
                            <Grid item>
                                <AddForm />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Item sx={{ minHeight: 385 }}>
                                <TodosList />
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Home;
