export const { basePath = "" } = require("../next.config");

export const imagePath = (image: string) => {
  return `${basePath}/${image}`.replace("//", "/");
};
