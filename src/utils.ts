import { BASE_PATH } from "./config";

export const imagePath = (image: string) => {
  return `${BASE_PATH}/${image}`.replace("//", "/");
};
