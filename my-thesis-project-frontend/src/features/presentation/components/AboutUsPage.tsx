import * as React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const teamMembers = [
  {
    name: "Hong Hai Bui",
    titel: "",
    role: "Developer",
    image:
      "https://scontent-ham3-1.xx.fbcdn.net/v/t1.6435-9/60213410_618230238651925_8245960775911342080_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ANnUe7kVyqMQ7kNvgFvWoje&_nc_zt=23&_nc_ht=scontent-ham3-1.xx&_nc_gid=At2g5ugWmFqufVugfiIAdOF&oh=00_AYDWEWdsc5n8khjzSt_1nyEX7aQJ4t9YmNDzC7N-dMVY6Q&oe=67656D7A",
  },
  {
    name: "Stefan Sarstedt",
    titel: "Prof. Dr.",
    role: "Erstprüfer",
    image:
      "https://www.haw-hamburg.de/fileadmin/_processed_/c/b/csm_251620_237f67e147.jpg",
    URL: "https://www.haw-hamburg.de/hochschule/beschaeftigte/detail/person/person/show/stefan-sarstedt/",
  },
  {
    name: "Olaf Zukunft",
    titel: "Prof. Dr.",
    role: "Zweitprüfer",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
    URL: "https://www.haw-hamburg.de/hochschule/beschaeftigte/detail/person/person/show/olaf-zukunft/",
  },
];

export default function AboutUs() {
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

  const handleClick = (url: string | any) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          About Us
        </Typography>

        {/* Team Section */}
        <Box sx={{ marginTop: "4rem" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                sx={{
                  width: 300,
                  padding: "1rem",
                  textAlign: "center",
                  boxShadow: 3,
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(member.URL)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginTop: "0.5rem" }}
                  >
                    {member.titel}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
