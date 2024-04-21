import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Header from "../../components/Header";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is Required & min 3 chars"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
          />
          <TextField
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is Required & min 3 chars"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
          />
        </Stack>

        <TextField
          label="Email"
          variant="filled"
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "This field is Required & min 3 chars"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
        />
        <TextField
          label="Contact Number"
          variant="filled"
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "Please provide a valid Phone number"
              : null
          }
          {...register("ContactNumber", {
            required: true,
            pattern: phoneRegExp,
          })}
        />
        <TextField label="Adress1" variant="filled" />
        <TextField label="Adress2" variant="filled" />

        <TextField
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Creat New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}
