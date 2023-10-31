import React from "react";
import Grid from "@mui/material/Grid";
import { StyledItem } from "../styles/components/AddTodo.style";
import TasksTable from "./tasks/TasksTable";
import { connect } from "react-redux";
import { setTaskFilter } from "../actions/filters";
import TasksList from "./tasks/TasksList";
import OptionsMenu from "./menu/OptionsMenu";
import TasksLayout from "../layouts/TasksLayout";
import AddForm from "./tasks/AddForm";

const Home = ({ filterChoice }) => {
  const menuOptions = ["all", "completed", "incompleted"];

  return (
    <Grid container p={2} pt={0}>
      <Grid item xs={12} p={2} className="title_box">
        <h3 align="left">Home</h3>
      </Grid>
      <Grid item xs={12}>
        <OptionsMenu
          menuType="toggle"
          methodToDispatch={setTaskFilter}
          activeChoice={filterChoice}
          options={menuOptions}
          className="tasks_status_options"
        />
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} lg={8}>
          <Grid item xs={12} p={1}>
            <StyledItem>
              <TasksLayout componentType="Table" children={<TasksTable />} />
            </StyledItem>
          </Grid>
          <Grid item xs={12} p={1}>
            <StyledItem>
              <TasksLayout componentType="List" children={<TasksList />} />
            </StyledItem>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} p={1}>
          <Grid item xs={12} p={1}>
            <StyledItem>
              <AddForm />
            </StyledItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = ({ filterChoice }) => {
  return { filterChoice };
};

export default connect(mapStateToProps)(Home);
