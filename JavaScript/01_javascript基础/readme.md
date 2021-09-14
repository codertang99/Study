# JavaScript基础



### javascript的三种引入方式

- 嵌入html标签的事件中
- 写入script标签中
- script标签引入外部定义的js

```html
<input type="button" value="click" onclick="alert(11111)">
<script type="text/javascript">
  alert("Hello JavaScript!!!");
</script>
<script src="js/my.js"></script>
```



### javascript的三种输入方式

```html
<script>
    alert("message");
    document.write("messsge");
    console.log("message")
</script>
```



### 变量的声明和赋值

```javascript
var x;	// 声明变量, undefined
x = 12;	// 变量赋值
y = 10;	// 可以直接使用y变量赋值、但千万不要这样做
// 相当于window.y = 10;
```



### javascript的数据类型

- 原始数据类型: number、string、boolean、undefined、null
- 引用数据类型: array、object、function

#### number

```javascript
var num = 10; // 十进制
console.log(num);

num = 076;  // 八进制
console.log(num);

num = 0x1f; // 十六进制
console.log(num);

num = 1.99e12;  // 类型科学计数法的相当于 1.99 * 10^12次方
console.log(num)

num = Number.MAX_VALUE;
num2 = Number.MIN_VALUE// 数值的最大值和最小值一般用作比较
console.log(num, num2);

num = Number.POSITIVE_INFINITY // 正无穷值, 移除时返回
console.log(num)
console.log(Number.isFinite(99))  // 不能通过比较大小、一般有对应的方法进行判别 Number.isFinite()

num = Number.NaN // 非数字的值为NaN
num2 = Number.NaN
console.log(num) 
console.log(num == num2)  // 注意不能通过 == 做比较, NaN不等于NaN, 如果要判别NaN可以通过Number.isNaN()
console.log(Number.isNaN(num), Number.isNaN(num2))
```



#### string

```javascript
var str, str2;
str = "Hello stringl!!!";
str2 = "Hello string2!!!";
console.log(str);
console.log(str.length, str2.length); // 字符串内置的length没有括号, 返回字符串长度

console.log(str.charAt(6)); // 返回目标字符串指定位置的值, 下标从0开始

console.log(str.concat(str2)); // 连接字符串, 当然在字符串中也可以使用 + 方式进行拼接

console.log(str.indexOf("o"), str2.indexOf("9"));  // 检索字符串中是否存在字符, 返回指定下标, 如果不存在返回-1

console.log(str.indexOf("l", 5)); // 第二个参数指定开始查找的位置

console.log(str.substring(0, 5))  // 截取从开始位置(包含开始位置)到结束位置(不包含结束位置), 这样做时为了计算机方便
```



#### boolean、undefined、null

```javascript
var boo = true
console.log(boo == true)
var un = undefined
console.log(undefined == undefined) // 相等
console.log(null == null) // 相等 // null 其实是引用对象不使用是即可赋值为null, 这里涉及对象回收等问题
console.log(undefined == null)  // 相等 // 涉及一套复杂的类型的转换
console.log(typeof null)	// 实际上是一个object
```



### 运算符

- 算术运算符(+, -, *, /, ++, --)

  注意: 有字符串的运算会把所有东西吃进去、数字运算会转换成数字，不能转换则NaN

- 需要注意以下比较

  ```javascript
  // 看上去不相等, 但是是相等的
  console.log("undefined == null", undefined == null)
  console.log("false == 0", false == 0)
  console.log("true == 1", true == 1)
  console.log("'5' == 5", '5' == 5)
  console.log("[] == ''", [] == "")
  console.log('{} == "[object Object]"', {} == "[object Object]")
  console.log("[5] == '[5]'", [5] == '[5]')
  
  // 注意以下是不相等的
  console.log("NaN == NaN", NaN == NaN) // NaN 与谁相比较都是false
  console.log("'NaN' == NaN", NaN == 'NaN')
  console.log("NaN != NaN", NaN != NaN) // 这是true的
  console.log("true == 2", true == 2)
  console.log("undefined == 0", undefined == 0)
  console.log("null == 0", null == 0)
  ```











