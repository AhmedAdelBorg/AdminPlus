import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Box } from '@mui/material';
import Header from '../../components/Header';
function Contacts() {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
    <Box sx={{ height: 650, width: "100%" }}>
      <DataGrid
            checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    </Box>
  )
}
export default Contacts