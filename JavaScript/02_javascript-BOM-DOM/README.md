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
        3. attachEvent
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
          e.srcElemt -> (IE8)
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

### BOM(Brower object model)

```javascript
// BOM Brower Object Model 
// 全局变量window, 在window中的一些对象和方法
// window.alert("999999999999999999999999")
// var a = window.prompt("请输入")
// var a = window.confirm("确定吗?")
// console.log(a)

// window.onload事件
window.addEventListener("load", function() {
    console.log("1111Load")
})
window.addEventListener("DOMContentLoaded", function() {
    console.log("1111DOMCOntentLoaded")
})
// src css 外部文件, 它们是异步的, 不会阻塞DOM的parse过程
// 1. HTML文件下载完了, DOM parse完了
// 2. 所有的css外部文件, img 下载完了
// window.onload 是2完成后触发
// DOMContentLoaded, 是1完成后触发

console.log(window.location)
// location.href = "http://www.baidu.com"
// location.replace("http://www.baidu.com")
// location.assign("http://www.baidu.com")

console.log(window.history)
// history.back()
// history.forward()

console.log(window.navigator)
console.log(navigator.userAgent)  // 标明浏览器
```

### 动画

运动的对象,  事件跨度, 步骤数

offset --> width, height, left, right

scroll --> width, height, left, right

### 构造函数

```javascript
// 工厂方法
function createPerson(name, age) {
    var person = {}
    person.name = name
    person.age = age
    person.say = function() {
        console.log("Hello")
    }
    return person
}

var person = createPerson("tang", 20)
console.log(person)

// 直接创建, 不推荐
var person1 = {}
person1.name = "tang"
person1.age = 999
person1.say = function() {
    console.log("tang")
}

// 推荐写法
var person1 = {
    name: "tamg",
    age: 11,
    say: function() {
        console.log("tang")
    }
}

// 构造函数
function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function() {
        console.log("hhhhh")
    }
}
var p = new Person("shen", 8)
console.log(p)

/*** 
     *  工厂方法和构造函数
     *  工厂首字母小写, 构造函数大写
     *  构造函数new调用, 工厂函数调用
     *  返回值工厂必须返回对象, 构造函数建议不返回
     *  对象引用, 工厂创建就用谁, 构造函数this
     * **/
console.log(Person.prototype === p.__proto__) // true
console.log(Person.prototype.constructor) // 函数本身
console.log(p.__proto__.constructor === Person)

var a = []
console.log(a.__proto__.constructor.name)

var obj = {}
console.log(obj.__proto__.constructor.name)

console.log("------------")
console.log(p instanceof Person)
console.log(a instanceof Array)
console.log(obj instanceof Object)

/***
     *  一个构造函数创建的对象
     *  对象.__proto__.constructor 就是构造函数的函数对象
     *  对象 instanceof 构造函数对象 是true
     * **/

var pe1 = new Person("tang", 28)
var pe2 = new Person("tang", 28) // 构造多个不同对象会大量占用内存空间
console.log(pe1.say === pe2.say) // false

console.log("----------------")
// 原型: 用来让所有构造函数生成的对象可以共享属性和方法
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function() {
    console.log("hello")
}
var pe1 = new Person("tang", 28)
var pe2 = new Person("tang", 28) 
console.log(pe1.say === pe2.say)
```

### 面向对象

- 继承的几种方式
  - 原型链继承
  - 构造函数
  - 组合继承(原型链+构造函数)
  - 拷贝继承

```javascript
// 原型链继承, 构造函数继承, 组合继承
// 基类: animal: gender, weight, eat(), sleep()
//        cat: eat(mouse)
//        mouse:
//          vole: eat('crop')
//          rat: eat('garbage')

function Animal(gender, weight) {
    this.gender = gender
    this.weight = weight
}

Animal.prototype.eat = function() {
    console.log("animal is eating")
}
Animal.prototype.sleep = function() {
    console.log("sleep: zzzzzzz")
}

function Cat(gender, weight) {
    Animal.apply(this, [gender, weight])  // 调用父类构造函数传入当前this使其当前具有该属性, 便于拓展
}

Cat.prototype = new Animal("male", 25)
Cat.prototype.constructor = Cat
Cat.prototype.eat = function(mouse) {
    // 如何判断进来的对象是一个mouse, 但是js是弱类型
    // 第一种判断方式
    if(mouse instanceof Mouse) {  // 通过instanceof判断传入变量是否是该mouse属性的对象
        mouse.eat()
    } else {
        console.log("this not eat mouse")
    }

    // 实现接口方式, 通过判断mouse参数是否实现mouse对象的方式
}

function Mouse() {
}

Mouse.prototype = new Animal("female", 3)
Mouse.prototype.constructor = Mouse

function Vole() {
}

Vole.prototype = new Mouse()
Vole.prototype.constructor = Vole
Vole.prototype.eat = function() {
    console.log("vole is eating crop")
}

function Rat() {
}

Rat.prototype = new Mouse()
Rat.prototype.constructor = Rat
Rat.prototype.eat = function() {
    console.log("rat is eating garbage")
}

var cat = new Cat("hh", 1)
var rat = new Rat()
var vole = new Vole()

cat.eat(rat)
cat.eat(vole)
cat.eat(new Animal())
```

### 拷贝

```javascript
function Person(p) {
    this.a = p
}

var p = new Person("tang")

// var curr = new Object()
// curr.__proto__ = p   // 把当前proto指向目标对象的
// // var curr = Object.create(p)  // 更加优雅的写法
// curr.a = "o"
// console.log(curr.a)

// 拷贝继承
// var p1 = Object.create(p.__proto__)
// for(var i in p) {
//   if(p.hasOwnProperty(i))
//     p1[i] = p[i]
// }

// 深拷贝
// function deepCopy(a) {
//   var curr = Object.create(a.__proto__)
//   for(var i in a) {
//     if(a.hasOwnProperty(i)) {
//       if(!a[i] instanceof Object) {
//         curr[i] = a[i]
//       } else {
//         curr[i] = deepCopy(a[i])
//       }
//     }
//   }
//   return curr
// }

// var pp = deepCopy(p)
// 还有待解决
```





