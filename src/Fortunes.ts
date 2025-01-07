export type Fortune = {
  id: string;
  result: string;
  description: string;
  image: string;
  weight: number;
  resultOnly: boolean;
  creator: {
    name: string;
    screenName: string;
  };
};

export type Fortunes = Fortune[];

// 重み付き確率でおみくじを選択する関数
export function getWeightedRandomFortune(fortunes: Fortunes): Fortune {
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
  throw new Error("Fortune not found");
}

export function getById(fortunes: Fortunes, id: string): Fortune {
  const found = fortunes.find((fortune) => fortune.id === id);
  if (found) return found;
  throw new Error(`Fortune not found: ${id}`);
}
