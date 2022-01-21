import loadImage from "../loadImageAsync";
import ImageMock from "./image.mock";

global.Image = ImageMock as any;

test("returns true when image is loaded", async () => {
  const isImageLoaded = await loadImage("test.jpg");

  expect(isImageLoaded).toBeTruthy();
});