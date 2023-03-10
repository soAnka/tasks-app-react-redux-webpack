import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import MenuNav from "../components/menu/MenuNav";
import { Grid, Box } from "@mui/material";
import TodoOrGoal from "../components/TodoOrGoal";
import OptionsMenu from "../components/menu/OptionsMenu";
import { setUserChoice } from "../actions/userChoice";

const Root = (props) => {
  const menuOptions = ["todos", "goals"];
  return (
    <>
      <Grid container>
        {props.userChoice !== null ? (
          <div className="app_container">
            <MenuNav />
            <Box className="content_container">
              <OptionsMenu
                menuType="toggle"
                methodToDispatch={setUserChoice}
                options={menuOptions}
                activeChoice={props.userChoice}
              />
              <Outlet></Outlet>
            </Box>
          </div>
        ) : (
          <Box className="content_container">
            <TodoOrGoal />
          </Box>
        )}
      </Grid>
    </>
  );
};

const mapStateToProps = ({ userChoice }) => {
  return { userChoice };
};

export default connect(mapStateToProps)(Root);
