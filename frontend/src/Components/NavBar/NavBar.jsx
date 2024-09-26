import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import {
  Home,
  Search,
  Forum,
  Notifications,
  Person,
  Message,
  AccountBox,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Filter
          </Typography>

          <IconButton color="inherit" component={Link} to="/">
            <Home />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/home/search">
            <Search />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/home/pitches">
            <Forum />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/home/mentor">
            <AccountBox />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/home/messages">
            <Message />
          </IconButton>

          <IconButton color="inherit" component={Link} to="/home/notifications">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile">
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
