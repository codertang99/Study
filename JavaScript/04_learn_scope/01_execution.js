var name = "why"

var num1 = 20
var num2 = 30
var result = num1 + num2

/**
 * 1. 代码被解析, v8引擎会自动帮助我们解析创建一个对象(GlobalObject -> go)
 * 2. 运行代码
 *    2.1 为了执行我们的代码, v8引擎内部会有一个执行上下文栈(Execution Context Stack ECStack)(函数调用栈)
 */