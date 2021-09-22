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
```

