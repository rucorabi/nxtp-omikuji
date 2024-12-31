"use client";

import React, { useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";

type Props = {
  userName: string;
  onUserNameChange: (name: string) => void;
  isDrawing: boolean;
  onClickDraw: () => void;
};

const ReadyScene = ({
  userName,
  onUserNameChange,
  isDrawing,
  onClickDraw,
}: Props) => {
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
    `;

  return (
    <>
      <style>{keyframes}</style>
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
          value={userName}
          onChange={(e) => onUserNameChange(e.target.value)}
          disabled={isDrawing}
        />
        <Button
          variant="contained"
          size="large"
          onClick={onClickDraw}
          disabled={!userName || isDrawing}
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
    </>
  );
};

export default ReadyScene;
