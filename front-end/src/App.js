import './App.css';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {BasicButtonGroup} from './components/buttons';
import {ButtonAppBar} from './components/header';
import {SButtonGroup} from './components/button';
import { Paper } from '@mui/material';
import React from 'react';
import {MyGrid} from './components/MyGrid';


export default function App() {
 
    ReactDOM.render(
        <React.StrictMode>
    <div className="App">
       
      <Paper style={{background: '#37474f', height: '100000000000vh', width:'270vh'}}>
      <ButtonAppBar />
      
  <BasicButtonGroup/>

  <SButtonGroup/>
  
        <StyledEngineProvider injectFirst>
   <MyGrid/>
   </StyledEngineProvider>
   
      
      
    </Paper>
    
   
   

    </div>,
    </React.StrictMode>,
       document.getElementById('root')
       );
    
 
}