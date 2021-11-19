// 当window作为全局对象, 所有的api, this等都是windown, GO对象也是window
var cname = "tang"
var message = "hello world"

setTimeout(() => {
  console.log("hello settimeout");
}, 2000);

console.log(globalThis);