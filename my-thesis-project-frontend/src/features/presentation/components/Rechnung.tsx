import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface RechnungProps {
  // Define the props you want to accept
  duration: string | null;
  route: string | null;
  brand: String;
  name: string | null;
  details: string | null;
  onChange: (value: boolean) => void;
}

const Rechnung: React.FC<RechnungProps> = (props) => {
  const { onChange, duration, route, brand, name, details } = props; // Destructure onChange from props

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    const newExpandedState = !expanded;
    setExpanded(newExpandedState);
    onChange(newExpandedState);
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
      <Box position="fixed" bottom={0} width="100%">
        <Card
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <CardHeader
            sx={{ color: "white" }}
            title={`Duration: ${
              props.duration == null ? 0 : props.duration
            } Months`}
            action={
              <IconButton
                sx={{ color: "white" }}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
                disabled={!(props.duration !== "0")}
              >
                {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            }
          />
          <CardContent sx={{ color: "white" }}>
            {expanded ? (
              <>
                <Typography variant="h6">Brand: {props.brand}</Typography>
                <Typography variant="h6">Name: {props.name}</Typography>
                <Typography variant="h6">Details: {props.details}</Typography>
                <Typography variant="h6">Route: {props.route}</Typography>
              </>
            ) : null}
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Rechnung;
