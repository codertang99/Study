/**
 *
 * @param {*} message
 * 1. 没有对参数类型做判断
 * 2. 没有对是否传入参数进行校验
 */
function foo(message) {
    console.log(message.length);
}
foo("hello");
foo("tang");
// foo()
// 报错后面代码永远不会执行
