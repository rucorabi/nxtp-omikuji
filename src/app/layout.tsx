import { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "次星おみくじ",
  description: "非公式のねくすとぴあおみくじツールです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <CssBaseline />
      </head>
      <body>
        <Box
          sx={{
            minHeight: "100vh",
            background:
              "linear-gradient(135deg, rgba(255,200,200,0.7), rgba(255,255,200,0.7), rgba(200,255,200,0.7), rgba(200,200,255,0.7))",
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
