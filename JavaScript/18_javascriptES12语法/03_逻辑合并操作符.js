/**
 * ||=
 * &&=
 * ??=
 */

let str = ""
let str2 = ""


// 相当于 str = str || "hello", 这种写法
str ||= "hello"
console.log(str);

// 相当于 str = str ?? "hello", 这种写法,  ?? 会对 “” 和 0进行判断为true
str2 ??= "hello"
console.log(str2);

let obj = {
  name: "tang"
}

// 相当于 obj = obj && obj.name 这种形式, 用法比较少
obj &&= obj.name