import React from "react";
import MenuNav from "../components/MenuNav";
import Grid from '@mui/material/Grid';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import TodoOrGoal from "../components/TodoOrGoal";
import OptionsMenu from "../components/OptionsMenu";
import { setUserChoice } from "../actions/userChoice";


const Root = (props) => {
    const menuOptions = ['todos', 'goals']
    return (
        <>
            <Grid container>
                {props.userChoice !== null ?
                    <div className="app_container">
                        <MenuNav />
                        <Box className="content_container">
                            <OptionsMenu menuType="toggle" methodToDispatch={setUserChoice} options={menuOptions} activeChoice={props.userChoice} />
                            {/* <StyledToggleGroup>
                                {['todos', 'goals'].map((opt) => <OptionBtn className={props.userChoice === opt ? 'active' : null} key={opt} type="toggle" value={opt} >{opt}</OptionBtn>)}
                            </StyledToggleGroup> */}
                            <Outlet></Outlet>
                        </Box>
                    </div>
                    :
                    <Box className="content_container">
                        <TodoOrGoal />
                    </Box>
                }
            </Grid>
        </>
    )
}

const mapStateToProps = ({ userChoice }) => {
    return { userChoice }
}


export default connect(mapStateToProps)(Root);