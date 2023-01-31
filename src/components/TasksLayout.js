import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { connect } from "react-redux";

const TasksLayout = ({ userChoice, title, children }) => {
  const goalOrTodo = userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 5))

  return (
    <Grid container p={4} >
      <Grid item xs={12}>
        <h1>{goalOrTodo} {title}  </h1>
      </Grid>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ height: '100%' }}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}


const mapStateToProps = ({ todos, goals, userChoice }) => {
  const dataList = userChoice === 'todos' ? Object.keys(todos).map((t) => todos[t]) : Object.keys(goals).map((g) => goals[g])

  return { dataList, userChoice }
}

export default connect(mapStateToProps)(TasksLayout);