import { BASE_PATH } from "./config";
import { Fortune } from "./Fortunes";

export function shareForX(userName: string, fortune: Fortune) {
  const text = `${userName}さんの運勢は...【${fortune.result}】です！

${fortune.description}

#次星おみくじ2025\n`;

  const url = window.location.origin + BASE_PATH + `/result/${fortune.id}/`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`
  );
}
