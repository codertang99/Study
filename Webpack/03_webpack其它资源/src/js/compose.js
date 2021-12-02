import "../css/base.css"

function compose() {

  const div = document.createElement("div")
  div.classList.add("content")
  div.innerHTML = "Hello Webpack"

  const image = document.createElement("img")
  image.src = require("../img/female.jpeg").default

  const imageDiv = document.createElement("div")
  imageDiv.className = "image-div"
  
  div.appendChild(image)
  div.appendChild(imageDiv)

  return div

}

document.body.appendChild(compose())