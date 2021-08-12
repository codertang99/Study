import "../css/style.css"
import "../css/title.less"
import "../css/image.css"
import "../font/iconfont.css"

import imgSrc from "../img/2.jpg"

const divEL = document.createElement("div");
divEL.className = "title";
divEL.innerHTML = "您好呀， 李银河!!!";

const imageEL = document.createElement("div");
imageEL.className = "imageBox";

const imgsEL = document.createElement("img");
imgsEL.src = imgSrc;

const iEL = document.createElement("i");
iEL.className = "iconfont icon-ashbin";

document.body.appendChild(divEL);
document.body.appendChild(imageEL);
document.body.appendChild(imgsEL)
document.body.appendChild(iEL);
