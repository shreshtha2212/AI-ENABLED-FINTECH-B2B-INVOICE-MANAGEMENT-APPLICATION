import React from "react";
import  Theme  from "@mui/styles";
import { createStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

import logo from './Highradius.png';
const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: Theme
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 240,
      marginRight: '250px'
    }
  })
);

export function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <AppBar style={{ background: '#263238' }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" className={classes.title}>
    <img src={logo} alt="Kitty Katty!" className={classes.logo} />
   
  </Typography>

         
        </Toolbar>
      </AppBar>
 
    </div>
  );
}