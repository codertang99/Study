/**
 * 柯里化: 
 *    把函数正常调用方式, 转换为分解多个多次调用传入参数的函数这个过程叫做柯里化
 * 作用:
 *    1. 保证函数的单一原则(single responsibility principle), 在每个参数只对应函数做自己的事情保证单一性
 *    2. 增强函数的复用和扩展, 对函数调用保存调用传入参数后的函数返回结果, 实现对函数的扩展
 */

// 普通函数
function foo(x, y, z) {
  return x + y + z
}

console.log(foo(10, 20, 30));

// 柯里化后的函数
function foo1(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

console.log(foo1(10)(20)(30));

// 柯里化函数箭头函数简写
var foo2 = x => y => z => x + y + z
console.log(foo2(10)(20)(30));

// 柯里化函数保证函数的单一性, 每个参数函数只做自己对应的事情
function foo3(x) {
  x = x + 10
  return function(y) {
    y = y * 10
    return function(z) {
      z = z * z
      return x + y + z
    }
  }
}

console.log(foo3(10)(20)(30));

// 普通函数log打印
function log(date, type, message) {
  console.log(`[${date.getHours()}: ${type}]: ${message}`);
}

log(new Date(), "bug", "编写列表bug")

// 柯里化后的函数
function log1(date) {
  return function(type) {
    return function(message) {
      console.log(`[${date.getHours()}: ${type}]: ${message}`);
    }
  }
}

// 柯里化函数, 函数的复用和扩展, 打印同一时间段信息
var currDateLog = log1(new Date())
currDateLog("bug")("测试用户bug")
// 柯里化函数, 函数的复用和扩展, 打印同一时间段, bug的信息
var bugLog = log1(new Date())("bug")
bugLog("编写登录bug")