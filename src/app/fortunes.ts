import { Fortune } from "../Fortunes";
import { imagePath } from "../utils";
import data from "./fortunesData.json";

export const fortunes: Fortune[] = data.map((org) => ({
  ...org,
  image: imagePath(`/images/${org.creatorScreenName}/${org.fileName}`), // basePathを補完する
}));
