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
}

const Rechnung: React.FC<RechnungProps> = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#B3DCCB",
        // light: will be calculated from palette.primary.main,
        // dark: "#000000",
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box position="fixed" bottom={0} width="100%">
        <Card
          sx={{
            border: "2px solid",
            borderColor: "grey",
            backgroundColor: "primary.main",
          }}
        >
          <CardHeader
            title={`Duration: ${props.duration} Km`}
            action={
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
                disabled={!(props.duration !== "0")}
              >
                {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            }
          />
          <CardContent>
            {expanded ? (
              <>
                <Typography>Name: Placeholder</Typography>
                <Typography>Brand: Placeholder</Typography>
                <Typography>Details: Placeholder</Typography>
                <Typography>Route: {props.route}</Typography>
              </>
            ) : null}
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Rechnung;
