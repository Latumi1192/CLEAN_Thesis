import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function PageBar() {
  const router = useRouter();

  const theme = createTheme({
    typography: {
      fontFamily: "Itim",
      button: {},
    },
    palette: {
      primary: {
        main: "#5F8575",
        //main: "#5b799e",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box color="primary">
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-evenly" }}>
            <Button
              sx={{ my: 1, color: "white", display: "block" }}
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </Button>
            <Button
              sx={{ my: 1, color: "white", display: "block" }}
              onClick={() => {
                router.push("/aboutus");
              }}
            >
              About us
            </Button>
            <Button
              sx={{ my: 1, color: "white", display: "block" }}
              onClick={() => {
                router.push("/leasingcalculator");
              }}
            >
              Leasing Calculator
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
