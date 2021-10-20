/**
 * 在js运行中有两种不同运行环境, 一种是浏览器, 一种是Node环境
 * 那么这必然有一个全局对象的不统一
 */

// 在浏览器环境下this和window都能访问全局对象
// console.log(this);
// console.log(window);


// 而在Node环境下global方式访问全局对象
// console.log(global);  

// 为了我们代码通用情况下, 我们通常都会进行判断, 让其都能访问全局对象
// 类似这种判断
// let _this = undefined
// if(this !== undefined) {
//   _this = this
// } else {
//   _this = global
// }


// ES11中提供了globalThis方式在不同环境下都能够进行访问
console.log(globalThis);