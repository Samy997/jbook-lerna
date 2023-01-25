export const serve = (port: number, filename: string, dir: string) => {
  console.log(`Serving Traffic on PORT ${port}`);
  console.log("Saving/Fetching cells from", filename);
  console.log("That file is in directory", dir);
};
