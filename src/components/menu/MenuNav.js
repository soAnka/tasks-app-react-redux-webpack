import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Drawer } from "../../styles/components/MenuNav.style";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  FavoriteBorder,
  BorderColor,
} from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";

function MenuNav({ dataList, userChoice, favoritesList }) {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const userOpt = userChoice === "todos" ? "todos" : "goals";

  const navItems = [
    { id: 0, link: "/", text: "Home", ico: <Home /> },
    { id: 1, link: "/add", text: "Add", ico: <BorderColor /> },
    {
      id: 3,
      link: `/${userOpt}`,
      text: userChoice === "todos" ? "Todos" : "Goals",
      ico: <ListIcon />,
    },
    {
      id: 4,
      link: "/favorites",
      text: "Favorites",
      ico: <FavoriteBorder />,
    },
  ];

  const checkForBadge = (text) => {
    const texts = {
      Todos: dataList.length,
      Goals: dataList.length,
      Favorites: favoritesList.length,
    };

    let badgeNum = texts[text] || 0;

    return <Badge badgeContent={badgeNum} color="secondary" />;
  };

  return (
    <div className="menu_container">
      <Drawer variant="permanent" open={open}>
        <List>
          <Box className="logo_box">L</Box>
          {navItems.map((item) => {
            return (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={NavLink}
                  activeclassname="active"
                  to={item.text === "Home" ? "/" : `${item.link}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {checkForBadge(item.text)}
                    {item.ico}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box>
          <IconButton onClick={handleDrawerToggle} size="small">
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
      </Drawer>
    </div>
  );
}

const mapStateToProps = ({ todos, goals, userChoice }) => {
  const dataList =
    userChoice === "todos"
      ? Object.keys(todos).map((t) => todos[t])
      : Object.keys(goals).map((g) => goals[g]);
  const favoritesList = dataList.filter((favTask) => favTask.isFavorite);

  return { dataList, userChoice, favoritesList };
};

export default connect(mapStateToProps)(MenuNav);
