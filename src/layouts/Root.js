import React from "react";
import MenuNav from "../components/MenuNav";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import TodoOrGoal from "../components/TodoOrGoal";


const Root = (props) => {
    return (
        <>
        <Grid container>
                {props.userChoice !== null ?
          <div className="app_container"> 
            <MenuNav />
                 <Box className="content_container">
                 <Outlet></Outlet>
                </Box>
            </div>
            :
                  <Box className="content_container">
                    <TodoOrGoal />
                  </Box>
                }
            {/* </div> */}
        </Grid>
        </>
    )
}

const mapStateToProps = ({userChoice}) => {
    return { userChoice }
}


export default connect(mapStateToProps)(Root);