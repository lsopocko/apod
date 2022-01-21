export default async function loadImage(src: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(true)
    img.onerror = reject
    img.src = src
  })
}