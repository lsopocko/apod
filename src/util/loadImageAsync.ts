export default async function loadImage(src: string): Promise<null> {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(null)
    img.onerror = reject
    img.src = src
  })
}