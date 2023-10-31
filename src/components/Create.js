import React from "react";
import Grid from "@mui/material/Grid";
import { StyledItemBg } from "../styles/components/AddTodo.style";
import AddForm from "./tasks/AddForm";
import { connect } from "react-redux";

const Create = ({ userChoice }) => {
  return (
    <Grid container p={4} pt={0}>
      <Grid item xs={12} p={2} className="title_box">
        <h3 align="left">
          Create New{" "}
          {userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 5))}{" "}
        </h3>
      </Grid>{" "}
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} sm={12} md={7}>
          <StyledItemBg sx={{ height: 700 }}></StyledItemBg>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Grid item sx={{ height: 700 }} className="form_item">
            <AddForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = ({ userChoice }) => {
  return { userChoice };
};
export default connect(mapStateToProps)(Create);
