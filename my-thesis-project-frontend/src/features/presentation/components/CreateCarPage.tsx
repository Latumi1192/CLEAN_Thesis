import React, { useState } from "react";
import { Car } from "@/features/domain/dto/CarDTO";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Alert,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { CarServiceImpl } from "@/features/domain/services/CarServiceImpl";

export default function CreateCarPage() {
  const CarServ = new CarServiceImpl();

  const [form, setForm] = useState<Car>({
    brand: "",
    carname: "",
    price: 0,
    leasingrate: 0,
    availability: true,
    ID: "",
    count: 0,
  });

  const [error, setError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]:
        name === "price" || name === "leasingrate" || name === "count"
          ? Number(value)
          : value,
    }));
  };

  const handleAvailabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      availability: event.target.checked,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.brand || !form.carname || !form.ID) {
      setError("Please fill in all the required fields.");
      return;
    }
    CarServ.addCarIntoDatabase(form);
    console.log("Car object created:", form);
    setError("");
    setForm({
      brand: "",
      carname: "",
      price: 0,
      leasingrate: 0,
      availability: true,
      ID: "",
      count: 0,
    });
  };

  const theme = createTheme({
    typography: {
      button: {},
    },
    palette: {
      primary: {
        //main: "#5F8575",
        main: "#5b799e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "2rem",
          maxWidth: "500px",
          margin: "0 auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: 2,
          mt: "10px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create Car Object
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: "1rem" }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: "1.5rem" }}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              required
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Car Name"
              name="carname"
              value={form.carname}
              onChange={handleChange}
              required
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              required
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Leasing Rate"
              name="leasingrate"
              type="number"
              value={form.leasingrate}
              onChange={handleChange}
              required
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="ID"
              name="ID"
              value={form.ID}
              onChange={handleChange}
              required
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Count"
              name="count"
              type="number"
              value={form.count}
              onChange={handleChange}
              required
              sx={{ marginBottom: "1rem" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.availability}
                  onChange={handleAvailabilityChange}
                />
              }
              label="Available"
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" type="submit" color="primary">
              Create Car
            </Button>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
}
