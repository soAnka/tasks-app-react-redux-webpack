import React, { lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";
import { StyledItem } from "../styles/components/AddTodo.style";
import TasksTable from "./tasks/TasksTable";
import { connect } from "react-redux";
import { setTaskFilter } from "../actions/filters";

const OptionsMenu = lazy(() => import("./menu/OptionsMenu"));
const TasksLayout = lazy(() => import("../layouts/TasksLayout"));
const AddForm = lazy(() => import("./tasks/AddForm"));

const Home = ({ filterChoice }) => {
  const menuOptions = ["all", "completed", "uncompleted"];

  return (
    <Grid container p={4} pt={0}>
      <Grid item xs={12} p={4} pb={0}>
        <h1>Home</h1>
      </Grid>
      <Grid item xs={12} p={2}>
        <Suspense fallback={<div>loading component...</div>}>
          <OptionsMenu
            menuType="toggle"
            methodToDispatch={setTaskFilter}
            activeChoice={filterChoice}
            options={menuOptions}
            className="tasks_status_options"
          />
        </Suspense>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7}>
          <StyledItem sx={{ minHeight: 720 }}>
            <Suspense fallback={<div>loading component...</div>}>
              <TasksLayout componentType="Table" children={<TasksTable />} />
            </Suspense>
          </StyledItem>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
              <Grid item>
                <Suspense fallback={<div>loading component</div>}>
                  <AddForm />
                </Suspense>
              </Grid>
            </Grid>
            <Grid item>
              <StyledItem sx={{ minHeight: 385 }}>
                <Suspense fallback={<div>loading component...</div>}>
                  <TasksLayout componentType="List" children={<TasksTable />} />
                </Suspense>
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
