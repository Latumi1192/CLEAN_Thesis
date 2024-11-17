import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  Checkbox,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useRouter } from "next/router";
import PageBar from "./PageBar";
import { UserServiceImpl } from "@/features/domain/services/UserServiceImpl";

export default function LoginForm() {
  const router = useRouter();
  const userServ = new UserServiceImpl();

  const [form, setForm] = React.useState({
    account: "",
    password: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const [isRegistered, setRegistered] = React.useState(true);

  return (
    <Box>
      <PageBar />
      <Box
        component="form"
        m="auto"
        sx={{
          mt: 1,
          width: 220,
          border: 3,
          borderColor: "primary.main",
          borderRadius: "16px",
          "& .MuiTextField-root": { mt: 3, ml: 1, width: "25ch" },
          "& .MuiFormControlLabel-root": { m: 0.1, width: "25ch" },
          "& .MuiButton-root": { ml: 1, mb: 2 },
          "& .MuiTypography-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {!isRegistered && (
            <div>
              <Alert
                severity="error"
                sx={{
                  borderRadius: "16px 16px 0px 0px",
                }}
              >
                <AlertTitle>Error</AlertTitle>
                <strong>Check input again!!!</strong>
              </Alert>
            </div>
          )}
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Account"
            name="account"
            value={form.account}
            onChange={handleChange}
            placeholder="Enter your Account"
          />
          <TextField
            focused
            id="outlined-password-input"
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Stay logged in"
        />
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (form.account == "" || form.password == "")
                setRegistered(false);
              else {
                console.log(
                  "Attempt to login with " +
                    form.account +
                    " and " +
                    form.password
                );
                userServ.submitAuth(form);
              }
            }}
          >
            Sign In
          </Button>
        </div>
      </Box>{" "}
    </Box>
  );
}
