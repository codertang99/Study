/**
 * 生成器可以传递参数和return返回值的
 * 但是比较特殊, 理解就好了
 */
function *foo(str) {
  // 在这里遇到第一个yield的时候, 直接通过函数传入就可以了
  // 在第一个yield之前使用参数
  const value = str
  console.log(value);
  // 在yield里放入每次的返回值, 以下每一个yield都是这样
  const value2 = yield "这是第一个返回值"

  const c = value2 * 10
  console.log("我是第二个:", c);

  const value3 = yield "这是第二个返回值"

  console.log("我是第三个:", value3);

}

const generator = foo("hhhh")

// 在执行完next函数之后也是可以有返回值的, 直接在yield后面添加即返回值

// { value: '这是第一个返回值', done: false } 注意是这样一种格式 返回的是一个对象, value是值 -> done是看后面有没有yield执行了
// 如果到最后了value是undefined done为true
console.log(generator.next());
// 从第二个开始, 都是在next函数里面传入参数, 然后在上一个yield的返回值获取
// 这是一种规范 -> 理解就好
// 下面依次类推都是上一个的返回值, 作为传递进来的参数
console.log(generator.next(100));
console.log(generator.next(1000));
console.log(generator.next(10000));