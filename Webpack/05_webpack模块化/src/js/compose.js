import "./module"

function compose() {

  const div = document.createElement("div")
  div.classList.add("content")
  div.innerHTML = "Hello Webpack"

  return div

}

document.body.appendChild(compose())