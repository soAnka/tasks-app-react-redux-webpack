import React from "react";
import { connect, useDispatch } from "react-redux";
import { setUserChoice } from '../actions/userChoice';
import Grid from '@mui/material/Grid';
import { ContentBox } from "../styles/components/TodoOrGoal";
import OptionBtn from "./StartBtn";


const TodoOrGoal = () => {
    const dispatch = useDispatch();
    const options = ['todos', 'goals']

    const choiceHandler = (userOption) => {
        dispatch(setUserChoice(userOption))
    }

    return (
        <Grid container p={4} className="section_container">
            <Grid item xs={12} p={4}>
                <h1 className="section_title">Welcome!</h1>
            </Grid>
            <Grid container spacing={2} className="start_container">
                <Grid item xs={12} sm={12} md={6} >
                    <ContentBox className="start_box_description" p={4}>
                        <h1>Note your tasks and goals</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </ContentBox>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ContentBox sx={{ height: '70vh' }} className='start_box_buttons' p={4}>
                        <div className="decoration_line"></div>
                        <p>Where would you like to start?</p>
                        {options.map((opt) => <OptionBtn key={opt} userOpt={opt} choiceHandler={choiceHandler} />
                        )}
                    </ContentBox>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = ({ userChoice }) => {
    return { userChoice }
}

export default connect(mapStateToProps)(TodoOrGoal);