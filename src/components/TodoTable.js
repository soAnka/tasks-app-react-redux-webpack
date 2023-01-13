import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import { useTheme } from 'styled-components';


const hardness = ['ok', 'easy', 'difficult', 'hard', 'super hard']

function renderOnScale(value) {
    let comp = []
    for(let i = 0; i < 5; i++) {
        i < value ? comp.push(<CircleIcon key={i} style={{ opacity: 1 }} fontSize="inherit" color="secondary"/>) : comp.push(<CircleIcon key={i} style={{ opacity: 0.4 }} fontSize="inherit" color="secondary"/>)
    }
    return <div>{comp}</div>
}

const TodoTable = ({dataList, userChoice }) => {
  const theme = useTheme()
    return (
        <Grid container p={4} >
        <Grid item xs={12}>
            <h1>{userChoice.charAt(0).toUpperCase().concat(userChoice.slice(1,5))} Table</h1>
        </Grid>
        <Grid container spacing={2} sx={{height:'100%'}}>
            <Grid item xs={12} sm={12} md={12}>
                <Box sx={{height:'100%'}}>
            
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Todo title</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Hardness</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {dataList.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.text}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.completed?<Chip label="completed" color='success'/>:<Chip label="incomplete" color="warning" />}</TableCell>
                <TableCell align="right">2 days</TableCell>
                <TableCell align="right">
                    {renderOnScale(row.hardness)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </Box>
            </Grid>
        </Grid>
    </Grid>
    )
}

const mapStateToProps = ({todos, goals, userChoice}) => {
  const dataList = userChoice === 'todos' ? Object.keys(todos).map((t)=>todos[t]) :  Object.keys(goals).map((g)=>goals[g])
  return { dataList, userChoice }
}

export default connect(mapStateToProps)(TodoTable);