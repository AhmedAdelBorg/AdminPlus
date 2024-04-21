import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da5Ba",
            }}
          >
            {
               access === "Admin" && (<AdminPanelSettingsOutlined sx={{ color: "#fff"}}/>)
            }
            {
               access === "Manager" && (<LockOpenOutlined sx={{color: "#fff"}}/>)
            }
            {
               access === "User" && (<SecurityOutlined  sx={{ color: "#fff"}}/>)
            }
            
            <Typography sx={{fontSize: "13px", color: "#fff"}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
    <Box sx={{ height: 600, mx: "auto"  }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    </Box>
  );
}

export default Team;
