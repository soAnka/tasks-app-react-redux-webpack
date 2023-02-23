import React from "react";
import Grid from "@mui/material/Grid";
import TasksList from "./tasks/TasksList";
import { StyledItem } from "../styles/components/AddTodo.style";
import TasksTable from "./tasks/TasksTable";
import AddForm from "./tasks/AddForm";
import { connect } from "react-redux";
import TasksLayout from "../layouts/TasksLayout";
import { setTaskFilter } from "../actions/filters";
import OptionsMenu from "./menu/OptionsMenu";

const Home = ({ filterChoice }) => {
  const menuOptions = ["all", "completed", "uncompleted"];

  return (
    <Grid container p={4} pt={0}>
      <Grid item xs={12} p={4} pb={0}>
        <h1>Home</h1>
      </Grid>
      <Grid item xs={12} p={2}>
        <OptionsMenu
          menuType="toggle"
          methodToDispatch={setTaskFilter}
          activeChoice={filterChoice}
          options={menuOptions}
          className="tasks_status_options"
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7}>
          <StyledItem sx={{ minHeight: 720 }}>
            <TasksLayout componentType="Table" children={<TasksTable />} />
          </StyledItem>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
              <Grid item>
                <AddForm />
              </Grid>
            </Grid>
            <Grid item>
              <StyledItem sx={{ minHeight: 385 }}>
                <TasksLayout componentType="List" children={<TasksList />} />
              </StyledItem>
            </Grid>
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
