"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import ResultScene, { ResetButtonText } from "../../../components/ResultScene";
import { Fortune } from "../../../Fortunes";

type Props = {
  fortune: Fortune;
};

const Component = ({ fortune }: Props) => {
  const router = useRouter();

  const handleClickOneMore = useCallback(() => {
    router.replace("/");
  }, [router]);

  return (
    <ResultScene
      fortune={fortune}
      targetText="占いの結果は....."
      resetButtonText={ResetButtonText.draw}
      onClikcOneMore={handleClickOneMore}
    />
  );
};

export default Component;
