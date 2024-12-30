"use client";

import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Fade,
  Stack,
  Zoom,
  CircularProgress,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getWeightedRandomFortune } from "./fortunes";
import MyAppBar from "../../components/MyAppBar";
import { basePath, imagePath } from "../../utils";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
  },
});

const OmikujiApp = () => {
  const [name, setName] = useState("");
  const [fortune, setFortune] = useState(null);
  const [isDrawn, setIsDrawn] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const drawFortune = async () => {
    setIsDrawing(true);
    const selectedFortune = getWeightedRandomFortune();

    // アニメーションのための遅延
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFortune(selectedFortune);
    setIsDrawn(true);
    setIsDrawing(false);
    setShowResult(true);
  };

  const shareOnX = () => {
    const text = `${name}さんの運勢は.....${fortune.result}です！\n\n#次星おみくじ2025\n\n`;
    const url =
      window.location.hostname + basePath + `/2025/result/${fortune.id}/`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`
    );
  };

  const reset = () => {
    setShowResult(false);
    setTimeout(() => {
      setIsDrawn(false);
      setFortune(null);
    }, 300);
  };

  // アニメーションのスタイル定義
  const keyframes = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px) rotate(-5deg); }
      75% { transform: translateX(5px) rotate(5deg); }
    }

    .shake-animation {
      animation: shake 0.5s infinite;
    }

    @keyframes resultIn {
      0% { transform: scale(0.3) rotate(15deg); opacity: 0; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    .result-animation {
      animation: resultIn 0.6s ease-out forwards;
    }

    @keyframes floatUp {
      0% { transform: translateY(20px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    .float-animation {
      animation: floatUp 0.6s ease-out forwards;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <style>{keyframes}</style>
      <MyAppBar text="次星おみくじ2025" />
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
            {!isDrawn ? (
              <Fade in={!isDrawn}>
                <Stack spacing={3}>
                  <Typography
                    variant="body1"
                    component="span"
                    align="center"
                    color="text.secondary"
                    sx={{ display: "block" }}
                  >
                    名前を入力してください
                  </Typography>
                  <TextField
                    fullWidth
                    label="お名前"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isDrawing}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    onClick={drawFortune}
                    disabled={!name || isDrawing}
                    fullWidth
                  >
                    {isDrawing ? (
                      <Box display="flex" alignItems="center" gap={1}>
                        <span className="shake-animation">🎋</span>
                        <CircularProgress size={24} color="inherit" />
                        <span>おみくじを引いています...</span>
                      </Box>
                    ) : (
                      "おみくじを引く"
                    )}
                  </Button>
                </Stack>
              </Fade>
            ) : (
              <Fade in={showResult}>
                <Stack spacing={3} alignItems="center">
                  <Typography
                    variant="h6"
                    className="float-animation"
                    sx={{
                      opacity: 0,
                      animationDelay: "0.3s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {name}さんの運勢は.....
                  </Typography>
                  <Zoom in={showResult} timeout={500}>
                    <Box
                      className="result-animation"
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                          color: fortune.color,
                          mb: 2,
                        }}
                      >
                        {fortune.result}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 640,
                          position: "relative",
                          mb: 2,
                          overflow: "hidden",
                          borderRadius: 2,
                          boxShadow: 3,
                        }}
                      >
                        <Box
                          component="img"
                          src={imagePath(fortune.image)}
                          alt={fortune.alt}
                          sx={{
                            verticalAlign: "bottom",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transition: "transform 0.3s ease-out",
                          }}
                        />
                      </Box>
                    </Box>
                  </Zoom>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="float-animation"
                    sx={{
                      opacity: 0,
                      animationDelay: "1.3s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {fortune.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    className="float-animation"
                    sx={{
                      opacity: 0,
                      animationDelay: "1.6s",
                      animationFillMode: "forwards",
                    }}
                  >
                    <Button variant="outlined" size="large" onClick={reset}>
                      もう一回引く
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={shareOnX}
                      sx={{
                        px: 5,
                        bgcolor: "black",
                        letterSpacing: 1,
                        "&:hover": { bgcolor: "#333" },
                      }}
                    >
                      Xで共有
                    </Button>
                  </Stack>
                </Stack>
              </Fade>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default OmikujiApp;
