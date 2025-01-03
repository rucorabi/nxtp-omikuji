"use client";

import React, { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Fade } from "@mui/material";

import ReadyScene from "./ReadyScene";
import ResultScene, { ResetButtonText, ShareForXButton } from "./ResultScene";
import { Fortune, Fortunes, getWeightedRandomFortune } from "../Fortunes";

type Props = {
  fortunes: Fortunes;
};

const OmikujiApp = ({ fortunes }: Props) => {
  const params = useSearchParams();
  const debugResultId = params.get("__debug");

  const [fortune, setFortune] = useState<Fortune>(() => {
    if (!debugResultId) return null;
    return fortunes.find((f) => f.id === debugResultId);
  });

  const [userName, setUserName] = useState<string>(fortune ? "デバッグ" : "");
  const [isDrawn, setIsDrawn] = useState(!!fortune);
  const [isDrawing, setIsDrawing] = useState(!!fortune);

  const drawFortune = useCallback(async () => {
    setIsDrawing(true);
    const selectedFortune = getWeightedRandomFortune(fortunes);
    const img = new Image();
    img.src = selectedFortune.image; // preload

    // アニメーションのための遅延
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFortune(selectedFortune);
    setIsDrawn(true);
    setIsDrawing(false);
  }, []);

  const reset = useCallback(() => {
    setTimeout(() => {
      setIsDrawn(false);
      setFortune(null);
    }, 300);
  }, []);

  return !isDrawn ? (
    <Fade in timeout={10}>
      <div>
        <ReadyScene
          userName={userName}
          onUserNameChange={setUserName}
          isDrawing={isDrawing}
          onClickDraw={drawFortune}
        />
      </div>
    </Fade>
  ) : (
    <Fade in timeout={10}>
      <div>
        <ResultScene
          targetText={`${userName}さんの運勢は.....`}
          fortune={fortune}
          onClikcOneMore={reset}
          resetButtonText={ResetButtonText.oneMore}
          shareButton={
            <ShareForXButton fortune={fortune} userName={userName} />
          }
        />
      </div>
    </Fade>
  );
};

export default OmikujiApp;
