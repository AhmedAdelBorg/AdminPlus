import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Header from '../../components/Header';
function Invoices() {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
    <Box sx={{ height: 650,mx: "auto" }}>
      <DataGrid
      slots={{
        toolbar: GridToolbar,
      }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    </Box>
  )
}


export default Invoices;