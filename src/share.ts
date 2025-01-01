import { Fortune } from "./Fortunes";
import { basePath } from "./utils";

export function shareForX(userName: string, fortune: Fortune) {
  const text = `${userName}さんの運勢は.....${fortune.result}です！

${fortune.description}

#次星おみくじ2025\n\n`;

  const url = window.location.origin + basePath + `/result/${fortune.id}/`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`
  );
}
