export default class ImageMock {
    public onload: () => void = () => {};
    constructor() {
        setTimeout(() => {
          this.onload();
        }, 100);
    }
}