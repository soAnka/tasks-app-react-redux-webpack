import React from 'react';
import Grid from '@mui/material/Grid';
import { StyledItemBg } from '../styles/components/AddTodo.style';
import AddForm from './AddForm';


const Create = () => {
    return (
        <Grid container p={4} pt={0}>
            <Grid item xs={12} p={4}>
                <h1>Create</h1>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={7} >
                    <StyledItemBg sx={{ height: 700 }}></StyledItemBg>
                </Grid>
                <Grid item xs={12} sm={12} md={5} >
                    <Grid item sx={{ height: 700 }} className="form_item">
                        <AddForm />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Create;