"use client";

import React, { JSX } from "react";
import { Typography, Button, Box, Stack, Zoom, Link } from "@mui/material";
import { Fortune } from "../Fortunes";
import { shareForX } from "../share";

type Props = {
  targetText: string;
  fortune: Fortune;
  onClikcOneMore: () => void;
  shareButton?: JSX.Element;
  resetButtonText: string;
};

const ResultScene = ({
  targetText,
  fortune,
  resetButtonText,
  shareButton,
  onClikcOneMore,
}: Props) => {
  return (
    <>
      <KeyFrames />
      <Stack alignItems="center">
        <Typography
          variant="h6"
          className="float-animation"
          sx={{
            opacity: 0,
            animationDelay: "0.3s",
            animationFillMode: "forwards",
          }}
        >
          {targetText}
        </Typography>

        <Zoom in timeout={500}>
          <Box
            className="result-animation"
            sx={{
              mt: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 640,
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={fortune.image}
                alt={fortune.result}
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
            mt: 4,
            opacity: 0,
            animationDelay: "1.3s",
            animationFillMode: "forwards",
          }}
        >
          {fortune.description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>

        <Box textAlign="right" width="100%" sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            提供:
            <Link
              href={`https://x.com/i/user/${fortune.creator.userId}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "inherit",
                textDecoration: "none",
                ml: 1,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {fortune.creator.name}様 (@{fortune.creator.screenName})
            </Link>
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          className="float-animation"
          sx={{
            mt: 4,
            opacity: 0,
            animationDelay: "1.6s",
            animationFillMode: "forwards",
          }}
        >
          <Button variant="outlined" size="large" onClick={onClikcOneMore}>
            {resetButtonText}
          </Button>
          {shareButton}
        </Stack>
      </Stack>
    </>
  );
};

export default ResultScene;

export const ResetButtonText = Object.freeze({
  oneMore: "もう一回引く",
  draw: "おみくじを引く",
});

export const ShareForXButton = ({
  userName,
  fortune,
}: {
  userName: string;
  fortune: Fortune;
}) => {
  const shareOnX = () => shareForX(userName, fortune);
  return (
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
  );
};

const KeyFrames = React.memo(() => {
  const keyframes = `
    @keyframes resultIn {
      0% { transform: scale(0.3) opacity: 0; }
      100% { transform: scale(1) opacity: 1; }
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
  return <style>{keyframes}</style>;
});
