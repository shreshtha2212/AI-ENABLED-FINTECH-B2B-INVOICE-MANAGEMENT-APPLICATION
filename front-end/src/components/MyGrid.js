import { Grid,Box,Cssbaseline, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from "@mui/material";
import * as React from "react";
import { makeStyles } from '@mui/styles';
import { useEffect,useState } from "react";
import {getData} from '../services/data';

export function MyGrid() {
  const[data,setData] = useState([]);
  useEffect(async() => {
  setData(await getData())
  }, []);






useEffect(async function() {
setData(await getData());
},[]);


 







return<> 


    <TableContainer>
    <Table sx={{ minWidth: 150,bottom:-37200,position:"absolute" }} aria-label="simple table" >
        <TableHead >
          <TableRow  >
          <TableCell >
                <Checkbox
                
                  inputProps={{ "aria-level": "controlled" }}
                />
              </TableCell>
            <TableCell >SL No</TableCell>
            <TableCell>Business Code</TableCell>
            <TableCell>Cust Number</TableCell>
            <TableCell>Clear Date</TableCell> 
            <TableCell>Buisness Year</TableCell>
            <TableCell>Doc ID</TableCell>
            <TableCell>Posting Date</TableCell>
            <TableCell>Document Create Date</TableCell>
            <TableCell>Baseline Create Date</TableCell>
            <TableCell>Due In Date</TableCell>
            <TableCell>Invoice Currency</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Document Type</TableCell>
            <TableCell>Posting ID</TableCell>
            <TableCell>Payment Terms</TableCell>
            <TableCell>Invoice id</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {data.map(data=>(
            <TableRow
              key={data.field}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }
         }}
               
             
             
       >
                  <TableCell component="th" scope="data">
                    {
                      <Checkbox
                   
                     
                      inputProps={{ "aria-level": "controlled" }}
                    />
                    }
                  </TableCell>
              
              <TableCell  align="center">{data.sl_no}</TableCell> 
           
                
              <TableCell align="center">{data.business_code}</TableCell>
              <TableCell align="center">{data.cust_number}</TableCell>
              <TableCell align="center">{data.clear_date}</TableCell>
              <TableCell align="center">{data.buisness_year}</TableCell>
              <TableCell align="center">{data.doc_id}</TableCell>
              <TableCell align="center">{data.posting_date}</TableCell>
              <TableCell align="center">{data.document_create_date}</TableCell>
              <TableCell align="center">{data.baseline_create_date}</TableCell>
              <TableCell align="center">{data.due_in_date}</TableCell>
              <TableCell align="center">{data.invoice_currency}</TableCell>
              <TableCell align="center">{data.total_open_amount}</TableCell>
              <TableCell align="center">{data.document_type}</TableCell>
              <TableCell align="center">{data.posting_id}</TableCell>
              <TableCell align="center">{data.cust_payment_terms}</TableCell>
              <TableCell align="center">{data.invoice_id}</TableCell>
              </TableRow>
           
          ))}
          
        </TableBody>
     
      </Table>
    </TableContainer>
    
  </>
}