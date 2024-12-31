import {
  Box,
  Container,
  createTheme,
  Paper,
  ThemeProvider,
} from "@mui/material";

import { ReactNode } from "react";
import MyAppBar from "./MyAppBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
  },
});

type Props = {
  title: string;
  children: ReactNode;
};

export default function Template({ title, children }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(255,200,200,0.7), rgba(255,255,200,0.7), rgba(200,255,200,0.7), rgba(200,200,255,0.7))",
      }}
    >
      <ThemeProvider theme={theme}>
        <MyAppBar text={title} />
        <Box
          sx={{
            py: 2,
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              {children}
            </Paper>
          </Container>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
