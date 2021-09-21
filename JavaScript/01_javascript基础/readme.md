## JavaScript基础



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
  console.log(0/0)	// 是一个NaN
  console.log(1/0)	// 是一个Infinity
  
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



### 流程控制

- 顺序结构
- 分支结构
- 循环结构



### 类型转换

- 转换为数值

  ```javascript
  // 数字隐式类型转换
  var num = 5;
  var num2 = "10"
  console.log("隐式类型转换", typeof (num - num2), num - num2)  // 减法隐式转换为数字
  console.log("隐式类型转换", typeof (num + num2), num + num2)  // 加法字符串拼接
  
  // 数字显示类型转换
  var num3 = "2"
  var temp = Number(num3)
  console.log(temp) // 调用Number对象构造方法, 显示转换
  num3 = true
  console.log(Number(num3)) // 可以转换, 1
  num3 = false
  console.log(Number(num3)) // 0
  num3 = null
  console.log(Number(num3)) // 可以转换， 0
  num3 = "10e5"
  console.log(Number(num3)) // 科学计数法可以转换 
  num3 = ""
  console.log(Number(num3))
  console.log("--------------------")
  num3 = "xay"
  console.log(Number(num3))   // 无法转换, 返回NaN Not a Number
  num3 = undefined
  console.log(Number(num3)) // undefined不可转换, NaN
  
  console.log("--------------------")
  // parseInt() 库函数, 把一个字符串按照整数方式进行解析, 如果开头部分可以解析只解析一部分, 如果开头不可以则返回NaN
  num3 = "123123"
  console.log(parseInt(num3)) // 解析出数字
  num3 = "123.12312"
  console.log(parseInt(num3)) // 解析前段数字, 遇到.不解析后面
  num3 = "1000px"
  console.log(parseInt(num3)) // 只解析开头是数字的部分
  num3 = "x123"
  console.log(parseInt(num3)) // 返回NaN
  num3 = ""
  console.log(parseInt(num3)) // 空字符串返回NaN
  num3 = "0xA0"
  console.log(parseInt(num3)) // 可以直接解析16进制
  num3 = "F4"
  console.log(parseInt(num3, 16)) // parseInt可以指定进制位, 同理8进制也可以
  num3 = undefined
  console.log(parseInt(num3)) // undefined, null, false都是NaN
  /***
   * 那么如何记忆呢
   * Number和parseInt的区别
   * Number: 本质上是否能转换成数字
   * parseInt: 看开头的部分更像数字
   *  1. Number可以, parseInt不可以: false, null, ""
   *  2. Number不可以, parseInt可以: 数字开头的字符串
   *  3. Number, parseInt都不可以: undefined, 字母开头的
   * ***/
  
  //  parseFloat, 库函数, 用于浮点数或者科学计数法的
  num3 = "10.000"
  console.log(parseFloat(num3)) // 小数位为0, 直接去掉
  num3 = "10"
  console.log(parseFloat(num3))
  num3 = "1.2E5"
  console.log(parseFloat(num3)) // 科学计数法可以
  num3 = "1.2131aa"
  console.log(parseFloat(num3)) //截取属于浮点数的
  
  // isNaN, 如果不是数, 则会自动调用Number库函数,
  console.log(isNaN("12321")) // 会隐式转换
  console.log(isNaN("1231.12312")) // 会隐式转换
  console.log(isNaN(undefined), isNaN(false), isNaN(true), isNaN(null), isNaN(""))  // 同理调用隐式转换
  ```

- 转化为字符串

  ```javascript
  // 隐式类型转换
  var str = ""
  console.log(typeof (str + 000000), (str + 000000))  // 转换为0
  console.log(typeof (str + null), (str + null))  // 转换为字符串
  
  // 显示类型转换
  // String, 库函数, 生成字符串
  console.log(typeof String(null), String(null))	
  console.log(typeof String(2), String(2))
  console.log(typeof String(false), String(false))
  
  // toString(), 成员函数
  str = 80
  console.log(str.toString())   // 调用成员方法转换字符串
  console.log(str.toString(16)) // 可以传入进制参数, 转换指定进行的
  str = true
  console.log(str.toString())	// 转换字符串true
  
  // undefined, null不可以调用toString()
  str = null
  console.log(str.toString()) // 报错
  str = undefined
  console.log(str.toString())
  ```
  
- 转换为boolean

  ```javascript
  // 隐式类型转换
  var b = !0
  console.log(typeof b, b)
  b = !!2
  console.log(typeof b, b)
  console.log("-------------")
  
  // undefined, null, "", NaN 相当于false
  b = !undefined
  console.log(typeof b, b)
  b = !null
  console.log(typeof b, b)
  b = !""
  console.log(typeof b, b)
  b = !NaN
  console.log(typeof b, b)
  
  // && || 不参与隐式类型转换
  console.log(undefined && true)
  
  // Boolean, 库函数, 显示类型转换
  b = Boolean("")
  console.log(typeof b, b)
  ```



### 数组

JavaScript数组是弱类型的, 数组声明的两种方式, 1.字面量方式 2.构造函数的方式

```javascript
// 字面量的方式声明数组
// 1. 如何向数组中添加元素
// 2. 如何访问数组中的某个元素
// 3. 数组的初始化
// 4. 数组初始化时, 只初始化个数, 具体的值以后再添加
// 5. 数组中可以存放任意的元素
var a = [1,,,,,,10]
console.log(typeof a, a)
a = [1,"@3",null, undefined, Object, true, [], {}, Array, Function]
console.log(a)

// 使用构造函数的方式生成数组
var b = new Array(1,23,4,5)
console.log(typeof b, b)
var b2 = new Array(9) // 这种方法初始化了元素的个数, 其实是稀疏的
console.log(b2)

console.log("---------------")
// 数组的索引从 0 ~~  length - 1
console.log(b2.length)
// 如果向一个不在范围内的索引写入数据, 那么这个位置会产生存储, 同时调整length
b2[1.5] = 88  // 数组的底层是类似key-value形式的mapper
b2["123"] = 99
b2["ajdlks"] = "Adfds"
b2[Object] = "12312"
console.log(b2) // 数字, 字符串都可以作为索引, 能parse被解析成数字, length只会受到整数的影响
// 应用:
//  1. 老老实实的使用数组, 同时配合length
//  2. 使用key-value, 全部使用字符串, length会失效
console.log("---------------")
// 访问数组中没有被初始化的位置, 第一不会报错, 同时返回undefined
// 数组是一个引用类型的变量
// 如何判断一个变量是一个数组, 利用constructor方式中的属性
console.log(typeof b2)
console.log(b2.constructor.name === "Array")
/****
 * 数组轮询的方式
 * 1. for - length, 使用length的方式, 在key-value方式, length失效情况下无效
 * 2. for - in, 可以轮询任何方式的数组
 * 3. forEach, 只能轮询数字索引, 非稀疏元素, 不依赖length
 * ****/
console.log("---------------")

/***
 *  数组的成员函数
 *    1. concat: 把两个数组合并成一个
 *    2. join: 把数组串行化为一个字符串
 *    3. sort: 把数组按照字符串的ASCII码进行排序, 在原数组上操作, 不生成新的数组
 *    4. push: 在数组尾部添加一个元素, length有效
 *    5. pop: 在数组尾部的元素去掉, 同时返回删除元素, length有效
 *    6. shift: 在数组头部的元素去掉, 同时返回删除元素, length有效
 *    7. unshift: 在数组头部添加一个元素, length有效
 *	  9. slice: 从数组中选择一部分元素, 拷贝, 生成新的数组, 原数组不受影响, (start, [end]), 正数从0开始, 如果是负数, 从1开始倒数
 *    10. splice: 从数组中截取一部分元素, 原数组受到影响,splice(start)从start到结尾
 		  splice(start, length)从start开始length
 		  splice(start, length, item1, item2, item3...)item从start位置添加
 	  11. delete: delete[index],删除数组中的某个元素, 被删除元素直接empty, 数组变成稀疏
  * **/
var a1 = [1, 2, 3]
var a2 = [6, 5, 4]
var a = a1.concat(a2)
console.log(a)
console.log("concat");

var a = [1,2,4,5,6,7,7]
console.log(a.join(" "))
console.log("join")

var b = [1,2,45,2,234,7]
console.log(b.join(","))
console.log(b.sort()) // 引用类型操作
console.log(b.join(","))
console.log("-----------")
// 按照数字排序
console.log(b.sort((a, b) => {
    console.log(a, b)
    return a - b
}))
console.log("sort")
```



### 内存问题

基本类型和引用类型-对应-栈内存和堆内存

- 原始数据类型变量的内存在栈中分配, 数据存在栈中
- 引用数据类型变量的内存在栈中分配, 实际内存在堆中分配, 变量的内存中只存储了内存地址(在堆中的)
- 拷贝问题, 原始数据类型直接拷贝数据, 引用数据类型拷贝的是堆中的内存地址
- 计数器: 引用类型, 每个变量存储了它的地址, 那么计数器+1, 反之-1, 当计数器为0时, 内存被释放



### 数组的性质

```javascript
var a = [1, 2, 3, 4, 5]
console.log(a.join(","))
a.length = 2
console.log(a.join(","))
a.length = 0
console.log(a)

/***
 *  面试题: 有几种清空数组的方法
 *  1. array.length = 0
 *  2. array.splice(0)
 *  3. pop、shift
 *  4. array = [] 有隐患
 * **/
```



### 函数

function 函数名([形参]){函数体}， 编写一个函数要考虑其各种情况, 并编写一些测试用例

函数字面量和函数表达式, 函数表达式本身不占用名字空间, 立即执行函数



### 面向对象

```javascript
// 2. 一个没有定义的变量直接赋值, 会产生怎样的后果(直接挂载在window上)
function fn() {
    aaa = 222;
}
fn()
console.log(aaa)
// 发生了什么
// 1. 有个对象叫window
// 2. 所有在脚本中(不包括函数), 通过var定义的变量都挂载在window上
// 3. 在任意位置, 一个变量赋值都可以看作是在window中寻找这个变量
var abc = 123;
console.log(obj.propertyIsEnumerable("name")) // 判断属性在对象中是否可枚举的
console.log(obj.hasOwnProperty("pageNumber")) // 查找属性是否存在对象中
```



函数的调用方式

```javascript
  /***
     *  1. 直接调用
     *  2. 对象调用
     *  3. 赋值间接调用, 产生this指针问题, 通过apply和call的方式解决
     * **/
function f1(x) {
    console.log(x)
}
f1("Hello world") // 直接调用

var obj = {
    f1: function(x) {
        console.log(x)
    }
}
obj.f1("Hello Obj") // 对象方式调用

var obj2 = {
    name1: "tang",
    f1: function(a, b, c) {
        console.log(this, this.name1)
        console.log(a, b, c)
    }
}
obj2.f1(1, 2, 3)  // 对象本身调用, this就是本身
var fn1 = obj2.f1 // 间接调用赋值调用, 会产生一个this指针的问题
fn1(1, 2, 3)  // 间接赋值方式, 实际上var定义变量是添加在window上的, 可以看作window.fn1调用, 所以调用this是window

// 解决办法, call和apply, 通过call和apply调用, 可以传递this绑定, 但是注意两个方法传递参数的方式不一样
fn1.call(obj2, 1, 2, 3)
fn1.apply(obj2, [1, 2, 3])
```



判断函数的类型

```javascript
/***
     * 如果判断一个函数的类型
     * 实际上所有的引用类型都是object的
     * 但是有一个奇怪的问题就是 typeof null实际上也是一个object
     * function typeof 的时候不是object, 是一个function
     * 同样通过constructor.name方式判断是一个Function
     * **/
function fn() {
    console.log("hello")
}

// 这是一种方式 typeof === function
console.log(typeof fn)
if(typeof fn === "function") {
    console.log("is function")
} else {
    console.log("not")
}

// 第二种方式 通过constructor.name === Function
console.log(fn.constructor.name)
if(fn.constructor.name === "Function") {
    console.log("is function")
} else {
    console.log("not")
}
```



arguments对象数组

```javascript
/***
     * 函数在调用的时候会有一个arguments数组对象
     * 可以传递不同数量的实参, 在arguments上面接收
     * 形参和实参是不同的变量, 它们是系统自动绑定的
     *      在形参和实参数量一致的时候, 它们是绑定的
     *      在不一致的情况下, 实参少于形参, 修改undefined形参不会绑定, 它们是没有关系的
     * arguments的calleed代表函数本身
     * ***/
function fn(a, b, c) {
    console.log(fn.length)  // 函数.length 形参的数量
    console.log(a, b, c, arguments)  // arguments对象中代表传递进来的实参的数组
    c = 100
    console.log(a, b, c, arguments) 
    arguments[2] = 1000
    console.log(a, b, c, arguments) 
}
fn(1)
```



### 工厂模式、构造函数和包装类

```javascript
// 普通工厂模式
var person = {}
person.createPerson = function(name, age, gender) {
    var p = {}
    p.type = "person"
    p.name = name
    p.age = age
    p.gender = gender || "male"
    p.study = function() {
        console.log("I am studying")
    }
    p.say = function() {
        console.log("Hello!!!")
    }
    return p
}
var liSi = person.createPerson("lisi", 20)
var wangWu = person.createPerson("wangwu", 21, "female")

// 实际上构造函数只是一种在普通工厂模式下去掉了定义和返回值的通过new 函数名的一种函数
// 构造函数产生一个this对象, 并返回this本身
function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.study = function() {
        console.log("I am studying")
    }
    this.say = function() {
        console.log("Hello!!!")
    }
}

var p1 = new Person("lili", 12, "female")

// 但其实这设计到一个返回值的一个奇怪又混乱的东西
// 构造函数添加返回值, 如果返回的是原始类型, 通过直接调用方式返回return, 而new方式返回this
// 如果返回是引用类型, 直接调用和new方式都返回return引用
function Person1(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.study = function() {
        console.log("I am studying")
    }
    this.say = function() {
        console.log("Hello!!!")
    }
    return {}
}
var pp1 = new Person1("t", 1, "male")
var pp2 = Person1("t", 1, "male")

// 在之前我们又有印象一个非常奇怪的, Number, Boolean, String这样的这种叫做包装类
// 这相当于给这样包装类开了一个后门, 可以直接调用, 返回基本类型, new方式返回object对象
var str = new String(1)
// 但这样又有一个非常奇怪的问题
var str1 = "123"
var str2 = str1.concat("hello") // 明明是基本数据类型为什么又可以调用成员函数
// 实际上上面做了三件事情, 会有一个自动包装和销毁的过程
// strTemp = new String("123")
// strTemp.concat("hello")
// str2 = str
```



### 预编译

预编译-脚本

```javascript
// 脚本的预编译
// 1. 没有var的变量, 都不是变量的声明, 全部都认为是window的全部变量, 不参与预编译
// console.log(aaa)
aaa = "123"
console.log(aaa)

// 2. 即使aa在函数中, aa也是全局变量, 是运行时生效, 不是预编译时生效
// console.log(aa)
test()   // 直接调用不会出错
function test() {
    aa = 123
    console.log("test")
}
console.log(aa)

// 3. 脚本中所有的变量声明, 在脚本的预编译阶段完成, 所有变量的声明与实际的书写的位置无关
console.log(a)
var a = 5
console.log(a)

// 4.  脚本中所有的函数声明, 在脚本的预编译阶段完成, 所有函数的声明与实际的书写的位置无关
console.log(f)
function f() {
    console.log("object")
}

// 5. 脚本中如果函数和变量同名, 那么在预编译过程中函数将覆盖变量
console.log(ss)
var ss = 123
console.log(ss)
function ss() {
    console.log("hello")
}
console.log(ss)
console.log("---------------")
// 6. 脚本中如果变量与函数同名, 函数可以覆盖变量, 但是变量是无法覆盖函数的
console.log(f)
function f() {
    console.log("hhhh")
}
var f = 123
console.log(f)

console.log("--------------")
// 7. 脚本中如果有两个或两个以上的同名函数, 在最后的函数会覆盖前面的, 并且参数个数是忽略的, JS不支持重载
console.log(fn)
function fn(x) {
    console.log(x)
}
function fn(x, y, z) {
    console.log(x, y, z)
}
```

预编译-函数

```javascript
// 1. 函数中所有的变量声明, 在函数的预编译阶段完成, 所有变量的声明与实际的书写位置无关
// fn()
function fn() {
    console.log(a)
    var a = 123
    console.log(a)
}

// 2. 函数中所有的函数声明, 在函数的预编译阶段完成, 所有函数的声明与实际的书写位置无关
function fn() {
    console.log(finner)
    function finner() {
        console.log("finner")
    }
    console.log(finner)
}

// 3. 函数中如果变量和函数同名, 那么函数将覆盖同名变量
function fn() {
    console.log(finner)
    var finner = "hahaha"
    function finner() {
        console.log("finner")
    }
}

// 4. 函数中只有函数能覆盖变量, 变量无法覆盖函数
function fn() {
    console.log(finner)
    function finner() {
        console.log("finner")
    }
    var finner = "hahaha"
    console.log(finner)
}

// 5. 函数中, 同名函数, 后面的函数覆盖前面的函数声明
// 6. 当函数预编译后遇到需要访问的变量或函数, 优先考虑自己AO中定义中的变量和函数, 
// 如果找不到, 才会在其定义的上一层AO中寻找, 直至到GO, 直至报错
var scope = "global"
function fn() {
    console.log(1, scope)
    var scope = "local"
    console.log(2, scope)
}
fn()
console.log(3, scope)


console.log("练习, ------------------")

console.log(1, scopes) // undefined
var scopes = "global"
function fnc() {
    var scopes = "1-local"
    function fnc2() {
        console.log(2, scopes) // undefined
        var scopes = "2-local"
        console.log(3, scopes) // 2-local
    }
    fnc2()
    console.log(4, scopes) // 1-local
}
fnc()
console.log(5, scopes) // global

/***
     *  GO -> 
     *    scopes -> global
     *    fnc -> function  
     * 
     *  AO1 ->
     *    scopes -> 1-local
     *    fnc2 -> function
     *  AO2 -> 
     *    scopes -> 2-local
     * **/
```

### 作用域和作用域链

```javascript
// 作用域链
// 1. 函数外部对内部可见
// 2. 函数内部对外部不可见
// 3. 函数内部和外部都有的时候内部优先
var scope = "scope"
function fn() {
    var scope = "l"
    }
fn()

// 作用域是函数级别的
var sco = "g"
if(true) {
    console.log(sco)
    var sco = "l"
    console.log(sco)
}
console.log(sco)
console.log("---------------")
// 循环的大括号无法影响函数的作用域
for(var i=0; i<5; i++) {
}
console.log(i)
```



<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F2149677-192a1dac90d296f4.png&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634655117&t=8d2855f3a1f660d11eee7f57eb4bf541" style="zoom:150%;" />



### 闭包

特点: 封装变量, 只暴露函数

应用:

- 共有变量
- 缓存存储结构
- 模块化

```javascript
// 共有变量 一个变量一个函数
// function createCounter() {
//   var count = 0
//   function counterAdd() {
//     count++
//     console.log(count)
//     return count
//   }
//   return counterAdd
// }

// var counter = createCounter()
// counter()

// 2. 缓存存储结构, 多个变量, 多个函数

function create() {
    var count = 0
    function counterAdd() {
        count++
        console.log(count)
        return count
    }

    function counterAdd2() {
        count+=2
        console.log(count)
        return count
    }

    function clearAction() {
        count = 0
        console.log(count)
        return count
    }

    return [counterAdd, counterAdd2, clearAction]

}

var coun = create()

coun[0]()
coun[1]()
coun[1]()
coun[2]()

// 模块化 JQuery
function createCount() {
    var count = 0
    var counter = {
        counterAdd: function() {
            count++
            console.log(count)
            return count
        },
        counterAdd2: function() {
            count +=2
            console.log(count)
            return count
        },
        clearAction: function() {
            count = 0
            console.log(count)
            return count
        }
    }
    return counter
}

var cccc = createCount()
cccc.counterAdd()
```

### 内置对象-Math

```javascript
 // 内置对象
console.log(typeof Math)  // object

// 常量
console.log(Math.PI)  // 🥧
console.log(Math.E) // lim极限的值
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)
console.log(Math.SQRT2) // 根号2
console.log(Math.SQRT1_2)

console.log("-----------")
// 成员函数
console.log(Math.abs(-10))  // 绝对值
console.log(Math.sin(Math.PI/3)) // 三角函数 弧度-角度-306deg
console.log(Math.cos(Math.PI/3))
console.log(Math.tan(Math.PI/3))

console.log(Math.asin(1)) // 反三角函数 弧度值
console.log(Math.acos(1))
console.log(Math.atan(1))
console.log(Math.atan2(1, 1)) // (x, y)

console.log(Math.round(12.5)) // 四舍五入
console.log(Math.floor(1.12990901112))  // 取整
console.log(Math.ceil(12.4))  // 向上取整
console.log(Math.fround(13.4))  // 找到最接近的单精度
console.log(Math.exp(2))  // 指数, e
console.log(Math.log(25)) // 对数log, 以e为底
console.log(Math.pow(10, 2))  // 任意数的指数
console.log(Math.sqrt(4)) // 开根号

console.log(Math.max(2, 10, 1213, 123123)) // 最大数
console.log(Math.min(1, 0.22, 0.11111)) // 最小值

console.log(Math.random())  // 产生随机值, 0 - 1 平均分布的小数
console.log(Math.floor(Math.random() * 6) + 1)  // 产生离散的数, 平均分布的 6 
```

### 内置对象-Date

```javascript
//  Date 对象 日期和时间
var d = new Date()
console.log(d)

// 巨大的正整数, 从1970年1月1号0点以来, 到现在的毫秒数
console.log(d.getTime())

var x = d.getTime()
x /= 1000 * 3600 * 24 * 365
console.log(x)

// 3. setFullYear 设定年月(0~11)日
var d = new Date()
d.setFullYear(2021, 3, 1)
console.log(d)

// 4. Date() construct
var d2 = new Date(2021, 3, 3)
console.log(d2)

// 5. GMT 格林尼治时间, UTC协调世界时间
console.log(d.toUTCString())
console.log(d.toGMTString())

console.log("--------------")
d.setFullYear(2000)
console.log(d)
console.log(d.getFullYear())

// 6. 获得月
console.log(d.getMonth() + 1)
console.log(d.getDay()) // 星期几, 0代表星期日
console.log(d.getDate())  // 天
console.log(d.getTime()) // 获得毫秒数

// 7. 克隆
var currday = new Date(d)
console.log(currday)

// 12. 小时、分钟、秒
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())

// 13. 如何计算两个时间之前的差?
var dStart = new Date(2019, 4, 1)
var dEnd = new Date(2019, 4, 5)
console.log(dStart, dEnd)
console.log((dEnd - dStart) / (1000*3600*24))

// 14. Date格式化
//  日期格式化
//  时间格式化
console.log(d.toDateString())
console.log(d.toLocaleDateString())

// 时间的格式化
console.log(d.toTimeString())
console.log(d.toLocaleTimeString())

var d3 = +new Date()   // 存在类型转换
console.log(d3)
```



### 包装类-String

```javascript
// string是原始类型, String是对象
// JS里面没有char型变量
var str = "abcde"
str[1] = "M"  // 为什么改不了
for(var i=0; i<str.length; i++) {
    console.log(str[i])
}
str.a = 15  // 包装类
console.log(str.a)  // 复制完直接销毁

// 字符串的常用方法
var str = "01234"
console.log(str.charAt(2))  // 返回指定位置字符串, index从0开始
console.log(String.fromCharCode(107, 108, 109))  // ASCII值, 可以多个
console.log(str.concat("hhhh")) // 拼接字符串, 可以多个
console.log(str.indexOf("h")) 
console.log("---------------")
console.log(str)
console.log(str.replace("2", "MMMM")) // 替换字符串中某一部分值
console.log(str.slice(0, 2))  // 截取一部分, 原字符串不受影响
console.log(str.split(""))  // 基于某个字符分割成数组

console.log("---------------")
var str = "abcdefg"
// 都是截取字符串
console.log(str.substring(1, 4))  // start end
console.log(str.substr(1, 4)) // start length

var str = "AbCd"
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str)

console.log("---------------")
var str = " abc "
console.log(str.trimLeft())
console.log(str.trim()) // 去除两边空格, 或等价的制表符
console.log(str.trimRight())  
```

### JSON

```javascript
// 数据通信只能依靠字符串, 我们关心字符串的格式
// 对象 -> 字符串(串行化)
/***
     *  1. JSON.stringify()
     *  2. JQuery.toJSON()
     * **/

//  字符串 -> 对象
/***
     *  1. eval()
     *  2. JSON.parse()
     *  3. JQuery.parseJSON()
     * **/
```

### 定时器 -> setTimeout和setInterval

```javascript
// 定时器, setTimeout调用时只是把任务放置到队列中, 然后返回, 等到规定的时间到了, 会再调用
function fn() {
    var d = new Date()
    console.log(1, d)
}

setTimeout(fn, 5000);

var d2 = new Date()
console.log(2, d2)

// 用setTimeout做一个时钟
var txt = document.getElementById("txt")
setInterval(function() {
    var now = new Date()
    txt.innerHTML = now.toLocaleTimeString()
}, 1000);
```

