import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { CarServiceImpl } from "@/features/domain/services/CarServiceImpl";
import { BrandServiceImpl } from "@/features/domain/services/BrandServiceImpl";
import { Car } from "@/features/domain/dto/CarDTO";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rechnung from "./Rechnung";

export default function BasicMenu() {
  const CarServ = new CarServiceImpl();
  const BrandServ = new BrandServiceImpl();
  const brandArray = BrandServ.getAllBrand();

  //   const [brandArray, setBrandArray] = React.useState<String[]>([]);

  //   React.useEffect(() => {
  //     const tmpArray = BrandServ.getAllBrand();
  //     tmpArray
  //       .then((data) => {
  //         setBrandArray(data.data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
    setCar("Select Car");
    setVisibility(false);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [alignment, setAlignment] = React.useState<string | null>("0");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const [alignment2, setAlignment2] = React.useState<string | null>("0");

  const handleAlignment2 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment2(newAlignment);
    }
  };
  const [alignment3, setAlignment3] = React.useState<String>("0");
  const [alignment4, setAlignment4] = React.useState<string | null>("0");
  const [alignment5, setAlignment5] = React.useState<string | null>("");

  const [brand, setBrand] = React.useState<String>("Select Brand");
  const [car, setCar] = React.useState<String>("Select Car");
  const [carArray, setCarArray] = React.useState<Car[]>([]);
  const [visibility, setVisibility] = React.useState(false);

  // State in parent to store the value (true/false)
  const [rechnung, setRechnung] = React.useState(false);

  // Function to be passed to the child to update the parent's state
  const handleRechnung = (value: boolean) => {
    setRechnung(value); // Update the parent's state with true or false
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5b799e",

        // light: will be calculated from palette.primary.main,
        // dark: "#000000",
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* Display selected car model */}

      <Box
        sx={{
          m: 1,
          "& .MuiButton-root": { mt: 1, ml: 2, mb: 1, mr: 2 },
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          {/* Image Box (Left side) */}
          {true && (
            <Box
              sx={{
                width: "400px", // Fixed width for the image container
                height: "400px", // Auto height to maintain aspect ratio of the image
              }}
            >
              <Box sx={{ marginTop: 2, textAlign: "center" }}>
                <img
                  src={
                    "https://imgs.search.brave.com/kWBECDXiEnC1exK-xfMO6RFCotKUiqkCaHa4KPxRXrU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/MS8wMi8xMy8wMi9j/YXItNjM5MzBfNjQw/LmpwZw"
                  }
                  alt="Car"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Box>
          )}

          {/* Menu Box (Right side) */}
          <Box>
            <Button
              sx={{
                width: "150px", // Set a fixed width
                height: "50px", // Set a fixed height
                color: "white",
              }}
              id="basic-button"
              aria-controls={open1 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              variant="contained"
              onClick={handleClick1}
            >
              {brand}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {brandArray.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setBrand(item);
                    setAlignment3(item);
                    setAlignment(null);
                    setAlignment2(null);
                    setAlignment4(null);
                    setCarArray(BrandServ.getAllCarFromBrand(item));
                    handleClose1();
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            <Button
              sx={{
                width: "150px", // Set a fixed width
                height: "50px", // Set a fixed height
                color: "white",
              }}
              id="basic-button"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              variant="contained"
              onClick={handleClick2}
            >
              {car}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {carArray.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setCar(item.carname);
                    setAlignment4(item.carname);
                    setAlignment(null);
                    setAlignment2(null);
                    setVisibility(true);
                    handleClose2();
                  }}
                >
                  {item.carname}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>

        {visibility && (
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
          >
            <Box>
              {/* First ToggleButtonGroup with enhanced button styling */}
              <Typography variant="h6" sx={{ color: "#5b799e" }}>
                Select the duration:
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                sx={{ flexGrow: 1 }}
              >
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: "8px",
                  }}
                >
                  <ToggleButton
                    value="12"
                    aria-label="left aligned"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: "20%", // Remove rounding
                      border: "3px solid #5b799e", // Add a distinct border color
                      color: "#5b799e",
                      backgroundColor: "white", // Set background for unselected
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e", // Set background for selected
                        color: "white",
                        border: "3px",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                      "&:first-of-type": {
                        borderRadius: "20%", // Remove rounding
                      },
                    }}
                  >
                    12 Months
                  </ToggleButton>
                  <ToggleButton
                    value="24"
                    aria-label="centered"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                        border: "3px",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    24 Months
                  </ToggleButton>
                  <ToggleButton
                    value="36"
                    aria-label="right aligned"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    36 Months
                  </ToggleButton>
                  <ToggleButton
                    value="48"
                    aria-label="justified"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    48 Months
                  </ToggleButton>
                  <ToggleButton
                    value="60"
                    aria-label="justified"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    60 Months
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              {/* Second ToggleButtonGroup with same styling */}
              <Typography mt={6} variant="h6" sx={{ color: "#5b799e" }}>
                Select the duration:
              </Typography>
              <Box>
                <ToggleButtonGroup
                  value={alignment2}
                  exclusive
                  onChange={handleAlignment2}
                  aria-label="text alignment"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: "8px",
                  }}
                >
                  <ToggleButton
                    value="10000"
                    aria-label="left aligned"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:first-of-type": {
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    10,000 km
                  </ToggleButton>
                  <ToggleButton
                    value="15000"
                    aria-label="centered"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    15,000 km
                  </ToggleButton>
                  <ToggleButton
                    value="20000"
                    aria-label="right aligned"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    20,000 km
                  </ToggleButton>
                  <ToggleButton
                    value="25000"
                    aria-label="justified"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    25,000 km
                  </ToggleButton>
                  <ToggleButton
                    value="30000"
                    aria-label="justified"
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 0,
                      border: "3px solid #5b799e",
                      color: "#5b799e",
                      backgroundColor: "white",
                      "&.Mui-selected": {
                        backgroundColor: "#5b799e",
                        color: "white",
                      },
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      "&:not(:first-of-type)": {
                        borderLeft: "3px solid #5b799e", // Remove left border for other buttons
                        borderRadius: "20%", // Remove rounding
                        "&.Mui-selected": {
                          border: "3px",
                        },
                      },
                    }}
                  >
                    30,000 km
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>
          </div>
        )}
        <Rechnung
          duration={alignment}
          route={alignment2}
          brand={alignment3}
          name={alignment4}
          details={alignment5}
          onChange={handleRechnung}
        />
      </Box>
    </ThemeProvider>
  );
}
