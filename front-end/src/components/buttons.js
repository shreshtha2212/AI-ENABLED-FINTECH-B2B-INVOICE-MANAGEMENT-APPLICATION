import  React from 'react';
import { makeStyles } from '@mui/styles';
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
    
    ButtonGroup:{
      
        right: "65%",
        marginLeft: -10,
        bottom: 400,
        
        
     
      position: "absolute",
      
     
    
    
  
}});

export function BasicButtonGroup() {
    const classes = useStyles();
  return (
   
    <div className={classes.root}>
   
     <ButtonGroup size="medium" className={classes.ButtonGroup} >
      <Button style={{
          maxWidth: "170px",
         
          minWidth: "100px",
         
        }}className={classes.Button}>PREDICT</Button>
      <Button style={{
          maxWidth: "170px",
         
          minWidth: "100px",
         
        }}className={classes.Button}>ANALYTICS VIEW </Button>
      <Button style={{
           maxWidth: "170px",
         
           minWidth: "100px",
         
        }}className={classes.Button}>ADVANCE SEARCH</Button>
    </ButtonGroup>
     
 
     
    
    </div>
  
   
  );
}