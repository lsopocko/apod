import loadImage from "../loadImageAsync";

test("Returns true when image is loaded", async () => {
  const isImageLoaded = await loadImage("test.jpg");

  expect(isImageLoaded).toBeTruthy();
});