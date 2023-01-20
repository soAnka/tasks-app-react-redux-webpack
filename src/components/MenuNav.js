import React, { useState } from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { Drawer } from '../styles/components/MenuNav.style';
import Box from '@mui/material/Box';
import { IconButton } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Badge from '@mui/material/Badge';


function MenuNav({dataList, userChoice}) {
  const [open, setOpen] = useState(true)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }
  const userOpt = userChoice === 'todos'? 'todos' : 'goals'
  const navItems = [
    { id: 0, link: "/", text: 'Home', ico: <HomeIcon /> },
    { id: 1, link: "/add", text: 'Add', ico: <BorderColorIcon /> },
    { id: 2, link: `/${userOpt}`, text: userChoice === 'todos'? 'Todos' : 'Goals', ico: <ListIcon /> }
  ]

  return (

    <div className="menu_container">
      <Drawer variant="permanent" open={open}>
        <List>
          <Box className="logo_box">
            L
          </Box>
          {navItems.map((item) => {
            return (
              <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={NavLink}
                  activeclassname="active"
                  to={item.text === 'Home' ? '/' : `${item.link}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.text === 'Todos' ? <Badge badgeContent={dataList.length} color="secondary" /> : null}
                    {item.ico}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
        <Box>
          <IconButton onClick={handleDrawerToggle} size="small">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
      </Drawer>
    </div>
  )
}

const mapStateToProps = ({ todos, userChoice }) => {
  const dataList = Object.keys(todos).map((t) => [todos[t]])
  return { dataList, userChoice }
}

export default connect(mapStateToProps)(MenuNav);

