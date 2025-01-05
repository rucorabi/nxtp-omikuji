const basePath = process.env.BASE_PATH ?? "";

export const imagePath = (image: string) => {
  return `${basePath}/${image}`.replace("//", "/");
};
