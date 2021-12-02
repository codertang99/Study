import "../css/base.css"
import "../font/iconfont.css"

function compose() {

  const div = document.createElement("div")
  div.classList.add("content")
  div.innerHTML = "Hello Webpack"

  const image = document.createElement("img")
  image.src = require("../img/female.jpeg")

  const imageDiv = document.createElement("div")
  imageDiv.className = "images"

  const iCon = document.createElement("i")
  iCon.className = "iconfont icon-caps-lock"
  
  div.appendChild(image)
  div.appendChild(imageDiv)
  div.appendChild(iCon)

  return div

}

document.body.appendChild(compose())