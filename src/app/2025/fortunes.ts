export type Fortune = {
  id: string;
  result: string;
  description: string;
  color: string;
  image: "/images/dummy.png";
  alt: string;
  weight: number;
};

export const fortunes: Fortune[] = [
  {
    id: "daikichi",
    result: "大吉",
    description: "最高の運勢です！すべてが上手くいきそう！",
    color: "#e53935",
    image: "/images/dummy.png",
    alt: "大吉を表す縁起の良い画像",
    weight: 10, // 10%
  },
  {
    id: "chukichi",
    result: "中吉",
    description: "とても良い運勢です。前向きに進みましょう！",
    color: "#fb8c00",
    image: "/images/dummy.png",
    alt: "中吉を表す良い画像",
    weight: 25, // 25%
  },
  {
    id: "shokichi",
    result: "小吉",
    description: "穏やかな運勢です。着実に進みましょう。",
    color: "#fdd835",
    image: "/images/dummy.png",
    alt: "小吉を表す穏やかな画像",
    weight: 30, // 30%
  },
  {
    id: "suekichi",
    result: "末吉",
    description: "平凡な運勢です。慎重に進めましょう。",
    color: "#43a047",
    image: "/images/dummy.png",
    alt: "末吉を表す平凡な画像",
    weight: 25, // 25%
  },
  {
    id: "kyo",
    result: "凶",
    description: "少し運気が低めです。気を付けて行動しましょう。",
    color: "#1e88e5",
    image: "/images/dummy.png",
    alt: "凶を表す画像",
    weight: 10, // 10%
  },
];

// 重み付き確率でおみくじを選択する関数
export const getWeightedRandomFortune = (): Fortune => {
  const totalWeight = fortunes.reduce(
    (sum, fortune) => sum + fortune.weight,
    0
  );
  let random = Math.random() * totalWeight;

  for (const fortune of fortunes) {
    random -= fortune.weight;
    if (random <= 0) {
      return fortune;
    }
  }

  // 万が一のフォールバック
  return fortunes[fortunes.length - 1];
};

export function getById(id: string): Fortune | undefined {
  return fortunes.find((fortune) => fortune.id === id);
}
