
const computedRem = (pictureWidth = 750, remWidth = 100) => {
  let html = document.documentElement
  html.style.fontSize = html.clientWidth / (pictureWidth / (2 * remWidth)) + 'px'
  window.onresize = () => {
    let html = document.documentElement
    html.style.fontSize = html.clientWidth / (pictureWidth / (2 * remWidth)) + 'px'
  }
}

export default computedRem
