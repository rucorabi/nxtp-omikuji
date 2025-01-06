"use client";

import {
  Box,
  Container,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
  Grid2 as Grid,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100%",
        }}
        display="flex"
        flexDirection="column"
      >
        <MyAppBar text={title} />
        <Box
          component="main"
          flex={1}
          sx={{
            py: 2,
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              {children}
            </Paper>
            <Typography color="gray" sx={{ mt: 1, textAlign: "center" }}>
              ※ 本サイトはファンメイドの非公式アプリです
            </Typography>
          </Container>
        </Box>
        <Box component="footer" sx={{ pt: 2, pb: 3 }}>
          <Grid
            container
            spacing={{
              xs: 1,
              sm: 2,
            }}
            justifyContent="center"
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <Grid>
              <Typography color="inherit">Created by るこらび.</Typography>
            </Grid>
            <Grid height={24}>
              <Typography
                href="/terms/"
                component="a"
                display="inline-flex"
                alignItems="center"
                target="_blank"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    // textDecoration: "underline",
                    borderBottom: "1px solid",
                  },
                }}
              >
                <OpenInNewIcon fontSize="small" sx={{ mr: 1 }} />
                利用規約
              </Typography>
            </Grid>
            <Grid>
              <Typography textAlign="center" color="gray">
                © 2025 All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
