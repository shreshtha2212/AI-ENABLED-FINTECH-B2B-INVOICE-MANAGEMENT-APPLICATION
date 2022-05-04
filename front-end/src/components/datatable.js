import React, {useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { headerName: "sl_no", field: "sl_no" },
  { headerName: "business_code", field: "business_code"},
  { headerName: "cust_number", field: "cust_number"},
  { headerName: "clear_date", field: "clear_date" },
  { headerName: "buisness_year", field: "buisness_year" },
  { headerName: "doc_id", field: "doc_id"},
  { headerName: "posting_date", field: "posting_date" },
  { headerName: "document_create_date", field: "document_create_date" },
  { headerName: "due_in_date", field: "due_in_date"},
  { headerName: "invoice_currency", field: "invoice_currency" },
  { headerName: "document_type", field: "document_type"},
  { headerName: "posting_id", field: "posting_id" },
  { headerName: "total_open_amount", field: "total_open_amount" },
  { headerName: "baseline_create_date", field: "baseline_create_date"},
  { headerName: "cust_payment_terms", field: "cust_payment_terms"},
  { headerName: "invoice_id", field: "invoice_id"},
]
export const DataTable = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/first/DataLoading")
        .then((data) => data.json())
        .then((data) => setTableData(data))

    })
   
    return(
      <div style={{ height: 1600, width: '100%' }}>
        
      <DataGrid
        rows={tableData}
        getRowId={(rows)=> rows.field}
        columns={columns}
        pageSize={500}
        rowsPerPageOptions={[500]}
        checkboxSelection
        disableSelectionOnClick 
      />
    </div>
    );
  
}
export default DataTable;