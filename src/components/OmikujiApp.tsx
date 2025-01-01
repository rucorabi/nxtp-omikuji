"use client";

import React, { useState, useCallback } from "react";
import { Fade } from "@mui/material";

import ReadyScene from "./ReadyScene";
import ResultScene from "./ResultScene";
import { Fortunes, getWeightedRandomFortune } from "../Fortunes";

type Props = {
  fortunes: Fortunes;
};

const OmikujiApp = ({ fortunes }: Props) => {
  const [name, setName] = useState("");
  const [fortune, setFortune] = useState(null);
  const [isDrawn, setIsDrawn] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const drawFortune = useCallback(async () => {
    setIsDrawing(true);
    const selectedFortune = getWeightedRandomFortune(fortunes);

    // アニメーションのための遅延
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFortune(selectedFortune);
    setIsDrawn(true);
    setIsDrawing(false);
    setShowResult(true);
  }, []);

  const reset = useCallback(() => {
    setShowResult(false);
    setTimeout(() => {
      setIsDrawn(false);
      setFortune(null);
    }, 300);
  }, []);

  return !isDrawn ? (
    <Fade in={!isDrawn} timeout={10}>
      <div>
        <ReadyScene
          userName={name}
          onUserNameChange={setName}
          isDrawing={isDrawing}
          onClickDraw={drawFortune}
        />
      </div>
    </Fade>
  ) : (
    <Fade in={showResult} timeout={10}>
      <div>
        <ResultScene userName={name} fortune={fortune} onClikcOneMore={reset} />
      </div>
    </Fade>
  );
};

export default OmikujiApp;
