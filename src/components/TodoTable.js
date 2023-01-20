import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import Task from './Task';

function renderOnScale(value) {
  let circlesArray = []
  for (let i = 0; i < 5; i++) {
    i < value ? circlesArray.push(<CircleIcon key={i} style={{ opacity: 1 }} fontSize="inherit" color="secondary" />) : circlesArray.push(<CircleIcon key={i} style={{ opacity: 0.2 }} fontSize="inherit" color="neutral" />)
  }
  return <div>{circlesArray}</div>
}

function taskDuration() {
  const today = Number(new Date(Date.now()).toLocaleDateString().slice(0, 2))

  return today;
}

const TodoTable = ({ dataList, userChoice }) => {

  return (
    <Grid container p={4} >
      <Grid item xs={12}>
        <h1>{userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1, 5))} Table</h1>
      </Grid>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ height: '100%' }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Todo title</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Duration</TableCell>
                    <TableCell align="center">Hardness</TableCell>
                    <TableCell align="center">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataList.map((todo, index) => {
                    const durationDaysNum = taskDuration() - Number(todo.date.slice(0, 2))
                    return <Task type="table" ind={index} key={todo.id} id={todo.id} durationDaysNum={durationDaysNum} renderOnScale={renderOnScale} />
                  })}
                </TableBody>
              </Table>
            </TableContainer>
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

export default connect(mapStateToProps)(TodoTable);