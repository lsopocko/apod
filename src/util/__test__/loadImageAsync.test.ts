import loadImage from "../loadImageAsync";
import ImageMock from "./image.mock";

test("returns true when image is loaded", async () => {
  const isImageLoaded = await loadImage("test.jpg");

  expect(isImageLoaded).toBeTruthy();
});