import { Fortune } from "../Fortunes";
import { imagePath } from "../utils";
import data from "../../fortunesData.json";

export const fortunes: Fortune[] = data.map(
  ({ creatorScreenName, creatorName, fileName, ...rest }) => ({
    ...rest,
    creator: {
      name: creatorName,
      screenName: creatorScreenName,
    },
    image: imagePath(`/images/${creatorScreenName}/${fileName}`), // basePathを補完する
  })
);
