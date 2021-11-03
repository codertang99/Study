/**
 *  事件循环, 代码的执行, 因为是JavaScript是单线程的, 在执行的是主线程
 *  像settimeout, 网络请求等是交给浏览器来执行的, 让浏览器来帮助我们执行这里代码
 *  浏览器在执行完后会把对应的回调, 放入队列里面, js在在队列中依次去执行
 *    队列:
 *       宏任务队列: settimeout, network, setinterval
 *       微任务队列: promise.then, queueMicrotask
 *  当然还有node的事件循环, 它涉及操作系统的io等所以更为复杂, 但大同小异
 *    队列:
 *      微任务队列:
 *        nexttick: process.nexttick
 *        other micro: then
 *      宏任务队列：
 *        timer: settimeout
 *        poll: io
 *        check: setimmediate
 */