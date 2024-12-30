import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

type Props = {
  text: string;
};

const MyAppBar = ({ text }: Props) => {
  return (
    <Container maxWidth={false} disableGutters sx={{ pt: 2 }}>
      <Box
        sx={{
          margin: "0 auto",
          width: "320px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "32px",
          boxShadow: "5px 5px 30px 0 rgba(51, 51, 51, .12)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
            }}
          >
            {text}
          </Typography>
        </Toolbar>
      </Box>
    </Container>
  );
};

export default MyAppBar;
