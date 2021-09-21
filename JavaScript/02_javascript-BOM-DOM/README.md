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

