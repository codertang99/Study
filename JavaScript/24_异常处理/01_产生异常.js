class MyError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode
    this.errorMessage = errorMessage
  }
}

function fn(n1, n2) {

  if(typeof n1 !== "number" || typeof n2 !== "number") {
    // 虽然这里通过类型判断来终止执行函数, 但是这里返回是一个return undefined无法判断是什么错误, 如果这里的业务逻辑很复杂的话
    // return
    // 这里可以通过throw方式抛出异常信息, 来告知开发者产生错误
    throw new Error("typeof message")

    /**
     * throw 抛出异常共有三种类型
     *  1 -> 抛出普通字符串信息
     *  2 -> 抛出一个对象, { errorCode: 0000, errorMessage: "typeof error" }
     *  3 -> 抛出一个自定义类, new的类对象, MyError { errorCode: 0, errorMessage: 'this is myError' }
     *  4 -> 抛出一个Error类或对应子类, JavaScript帮助我们内置好了对应错误类推荐使用
     */
  }

  return n1 + n2
}

// 正常我们函数的功能只是数字的相加, 但是如果我传入其它类型的值应该产生对应错误
fn(2, "!@3123")

