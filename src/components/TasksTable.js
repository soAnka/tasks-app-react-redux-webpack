import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import CircleIcon from '@mui/icons-material/Circle';
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

const TasksTable = ({ dataList, filterChoice }) => {
  const renderFiltered = () => {

    let filtered = dataList

    switch (filterChoice) {
      case 'completed':
        return filtered = dataList.filter(t => t.completed)
      case 'uncompleted':
        return filtered = dataList.filter(t => !t.completed)
      case 'all':
        return filtered = dataList
      default:
        dataList
    }
    return filtered
  }
  const filteredTasks = renderFiltered()
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Hardness</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTasks.map((task, index) => {
            const durationDaysNum = taskDuration() - Number(task.date.slice(0, 2))
            return <Task type="table" ind={index} key={task.id} id={task.id} durationDaysNum={durationDaysNum} renderOnScale={renderOnScale} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = ({ todos, goals, userChoice, filterChoice }) => {
  const dataList = userChoice === 'todos' ? Object.keys(todos).map((t) => todos[t]) : Object.keys(goals).map((g) => goals[g])

  return { dataList, userChoice, filterChoice }
}

export default connect(mapStateToProps)(TasksTable);