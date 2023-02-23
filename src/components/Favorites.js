import React from "react";
import { connect } from "react-redux";
import Task from "./tasks/Task";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

const Favorites = ({ userChoice, favoritesList }) => {
  return (
    <Grid container p={4} pt={0}>
      <Grid item xs={12}>
        <h1>
          {" "}
          Favorites{" "}
          {userChoice
            .charAt(0)
            .toUpperCase()
            .concat(userChoice.slice(1, 5))}{" "}
        </h1>
      </Grid>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ height: "100%" }}>
            <List>
              {favoritesList.map((t, index) => {
                return <Task type="list" ind={index} key={t.id} id={t.id} />;
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ todos, goals, userChoice }) => {
  const dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((t) => todos[t])
      : Object.keys(goals).map((g) => goals[g]);
  const favoritesList = dataList.filter((favTask) => favTask.isFavorite);
  return { dataList, userChoice, favoritesList };
};

export default connect(mapStateToProps)(Favorites);
