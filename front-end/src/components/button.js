import React from 'react';
import { makeStyles,createTheme } from '@mui/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const useStyles = makeStyles ({
    
      Button:{
     
        '&:hover': {
          backgroundColor: '#40c4ff',
          
      },
      color:"#fff",
      borderColor: "#40c4ff",
     
       },
    
    SButtonGroup:{
        left: "65%",
        marginLeft: -10,
        bottom: 400,
     
     
      position: "absolute"
    }
    
  
  });
  
  
export function SButtonGroup(handleClickOpen) {
    const classes = useStyles();
    
  return (
    
    <div className={classes.root}>
     
  
    <ButtonGroup size="medium"  className={classes.SButtonGroup} >
    
      <Button  style={{
          maxWidth: "300px",
         
          minWidth: "150px",
         
        }}className={classes.Button} onClick={handleClickOpen} >ADD</Button>
      <Button style={{
          maxWidth: "300px",
         
          minWidth: "150px",
         
        }}className={classes.Button} >EDIT </Button>
      <Button style={{
          maxWidth: "300px",
         
          minWidth: "150px",
         
        }}className={classes.Button}>DELETE</Button>
      
    </ButtonGroup>
  
    </div>
  );
}
  