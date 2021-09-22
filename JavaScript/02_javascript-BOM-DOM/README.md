# JavaScript BOM/DOM

### DOM(document object model)

```javascript
// 1. JS直接写再HTML中, 不可取
// 2. JS与HTML相分离

// 3. 把JS和交互从HTML中剥离
window.onload = function() {
    document.getElementById("btn").onclick = function () {
        alert("hello")
    }
}
// document.getElementById()
// document.getElementsByName() 根据name属性
// document.getElementsByTagName()  根据标签名
```

### QuerySelector 操作dom

```javascript
// 找到符合条件的第一个元素
var p = document.querySelector("body>p")
console.log(p)
var p2 = document.querySelectorAll("body>p")  // NodeList 的伪数组, 不可for in
console.log(p2)
for(var i=0;i<p2.length;i++) {
    var element = p2[i]
    // element.style.color = "#0f0"
    // element.style.fontSize = "50px"
    element.className = "c1"
}

p2.forEach(function(item, index) {
    console.log(item, index)
})

// 常用技巧
var btns = document.querySelector("#btn")
btns.onclick = function() {
    var dataValue = this.dataset["value"]   // data-[] 添加用户数据, 通过dataset方式获取
    var txt = document.querySelector("#txt")
    if(dataValue === "v") {
        txt.disabled = true
        this.value = "有效"
        this.dataset["value"] = "i"
    } else {
        txt.disabled = false
        this.value = "无效"
        this.dataset["value"] = "v"
    }
}
// innerText: 设置文本内容, Chrome, Firefox, IE8
// textContent: 设置文本内容, Chrome, Firefox, IE8不支持
// innerHtml: 设置的是HTML原始字符串
```

### Node节点

nodeType, nodeName, nodeValue定义

遍历节点, childNodes, children, parentNode, parentElemt, previousSIbiling, previousElementSibing, nextSibling, nextElementSibling, firstElementChild, firstChild, lastChild, lastElementChild

```javascript
var divs = document.querySelector(".cls")
console.log(divs.parentNode)  // 获取父节点
console.log(divs.parentElement)  // 获取父节点
console.log(divs.previousSibling)  // 前一个Node
console.log(divs.previousElementSibling)  // 前一个元素
console.log(divs.nextSibling) // 后一个Node
console.log(divs.nextElementSibling)  // 后一个元素
console.log(divs.firstChild)  // 第一个子Node, 在IE8中指的是元素
console.log(divs.firstElementChild)  // 第一个子元素, 在IE8中不支持
console.log(divs.lastChild) // 最后一个子节点, 在IE8中指的是元素
console.log(divs.lastElementChild)  // 最后一个元素, IE8不支持
// 以上方法等, IE8都有问题

// 如何兼容IE8
```

创建节点

```javascript
// 创建节点
document.write("<h2>123</h2>")  // 1.write()可以跟标签元素, 不建议使用(会立即解析执行), onload中执行会覆盖
document.body.innerHTML = "<hr>"  // innerHTML, 这种方法更简单

var p = document.createElement("p") // 创建节点, 并通过append添加进去, 更灵活
p.innerHTML = "Hello createElement"
var input = document.createElement("input")
input.setAttribute("value", "hhhhh")
var type = document.createAttribute("type")
type.value = "input"
input.setAttributeNode(type)
document.body.appendChild(p)
document.body.appendChild(input)
```

