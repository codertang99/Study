/**
 * 通过require方式导入的模块, 会被默认执行一次, 在node环境的文件里面每一个文件就是一个模块
 * 然后里面会有一个loaded属性, 默认为false, require导入会执行一次, loaded变为true
 * 如果有多次引入则不会再执行
 * 循环引入则采用深度优先遍历算法执行, 可以用函数的调用来理解这种引入方式
 */
const bar = requir("./01_bar.cjs")