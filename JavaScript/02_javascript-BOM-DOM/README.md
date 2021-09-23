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
var firstChild = divs.firstElementChild || divs.firstChild
```

创建节点

```javascript
// 创建节点
document.write("<h2>123</h2>")  // 1.write()可以跟标签元素, 不建议使用(会立即解析执行), onload中执行会覆盖
document.body.innerHTML = "<hr>"  // innerHTML, 这种方法更简单

var p = document.createElement("p") // 创建节点, 并通过append添加进去, 更灵活, 产生一个暂时不挂在dom tree上的元素
p.innerHTML = "Hello createElement"
var input = document.createElement("input")
input.setAttribute("value", "hhhhh")
var type = document.createAttribute("type")
type.value = "input"
input.setAttributeNode(type)
document.body.appendChild(p)
document.body.appendChild(input)
// insertBefore(元素, 谁的前面)

// DOM 删除
// remove() 自杀(删除自己)
// removeChild(需要删除的子元素) 删除自己的对应子元素

// DOM 改动
// replaceChild(新, 旧)	新旧替换
```

### 事件

```javascript
/***
      事件绑定
        1. onType
            如onclick事件
            特点:
              兼容性非常好
              多个click, 后面的回调会覆盖前面的回调
            解绑:
              onclick = null
        2. addEventListener
            包含三个参数(type, fn, bool)
            特点:
              多个click, 不会覆盖
              IE8及其以下不支持
            解绑:
              removeEventListener(type, fn) (只能删除addEventListener加上去的事件, 删除时必须有函数)
              怎么可以知道某个事件上挂载了多少函数?(借助chrome浏览器工具查看)
        3. attchEvent
            包含两个参数(type(包含on), fn)
            特点
              chrome上不支持
              在回调中this指向的是window
            解绑:
              detachEvent(type(加on), fn)
      哪种方法可以同时兼容IE和chrome(自己写方法判断)
      事件的冒泡和捕获
        事件的冒泡: 一个元素触发事件, 那么其所有的祖先元素(跟结构有关)都会依次触发该事件, 这种机制称作冒泡
          addEventListener第三个参数代表是否捕获, 第三个参数不写(false), 那么事件触发的传递方式就是冒泡, 自底向上
        事件的捕获: 
          addEventListener第三个参数代表是否捕获, 第三个参数为true, 传递方式为捕获(捕获慎用, chrome支持, IE8不支持), 自顶向下
        捕获和冒泡的执行顺序:
          所有的祖先节点安装从高到低执行捕获, 对节点本身是按照绑定顺序触发(冒泡及捕获)
          祖先节点从低到高触发冒泡
        阻止冒泡: 
          e.stopPropagation()(chrome中调用, 不支持IE8) 调用事件默认传递的event事件
          window.event.cancelBubble = true (IE8中设置此属性)
          e || window.event 兼容写法
          如何知道谁被点击了
          e.target ->(chrome)
          e.srcElemt
        阻止默认事件行为: 
          比如onContextmenu方法
           return false
           e.preventDefault ? e.preventDefault() : e.returnValue = true  -> 兼容写法
        事件委托：
          利用冒泡 + 事件的起源, 避免在非常大数量子元素上绑定事件, 而只在少量父元素上绑定事件
          给父元素绑定事件, 点击子元素冒泡给父元素判断处理
    **/
var dom = document.querySelector(".c")
dom.onclick = function() {
    console.log(this)
    console.log("我被点击了")
}
dom.addEventListener("click", function() {
    console.log(this)
    console.log("我被点击了EvenListener")
})

// dom.attachEvent("onclick", function() {
//   console.log(this)
//   console.log("attachOnclick")
// })

// 兼容写法
function divClick() {
    console.log(this)
    console.log("我又被点击了")
}
function addEvent(element, type, fun) {
    // 如果要判断一个对象是否某个成员函数, 用这个方法
    if(element.addEventListener) {
        element.addEventListener(type, fun)
    } else {
        element.attachEvent("on" + type, function() {
            fun.call(element)
        })
    }
}
addEvent(dom, "click", divClick)

// 我们希望通过原型的方式
// 构造函数, 都有一个prototype原型对象, 任何挂载在这个原型对象的函数, 通过构造函数创造出来对象都可以使用

// 事件的解绑
dom.onclick = null // 第一种方式


// 事件冒泡和捕获
var divg = document.querySelector(".clsg")
var divs = document.querySelector(".clss")

divg.addEventListener("click", function() {
    console.log("我是外层的div")
}, false)

divs.addEventListener("click", function(e) {
    // e.stopPropagation()
    // window.event.stopPropagation()
    e = e || window.event
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
    console.log("我是里层的div")
}, false)


// 阻止默认行为
document.oncontextmenu = function(e) {
    console.log("context menu")
    // return false
    // e = e.preventDefault || e.returnValue = true
    e.preventDefault ? e.preventDefault() : e.returnValue = true
}

// 利用事件委托
var ul = document.querySelector("ul")
ul.addEventListener("click", function(e) {
    e = e.target || e.srcElement
    console.log(e)
    e.innerHTML = "hello"
})

```

