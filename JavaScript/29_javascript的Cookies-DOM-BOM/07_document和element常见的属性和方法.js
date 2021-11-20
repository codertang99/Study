// 设置网页标题
document.title = "my document"

console.log(document.body);
console.log(document.head);
console.log(document.children);

// 创建dom元素
const dom1 = document.createElement("div")
// const dom2 = new HTMLDivElement()

const app = document.getElementById("app")
// document.getElementsByClassName("btn")
// document.getElementsByName("hello")
// document.getElementsByTagName("div")

console.log("---------------");

// 子元素和子节点
console.log(app.children);
console.log(app.childNodes);


console.log(app.tagName);
console.log(app.textContent);
app.setAttribute("tang", "hello tang")
console.log(app.getAttribute("tang"));