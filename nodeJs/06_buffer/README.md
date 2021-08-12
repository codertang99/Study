# buffer
  1. 创建buffer及使用、通常采用Buffer.from方式
  ```javascript
    // 通过new的方式创建buffer
    const buffer = new Buffer(text)
    console.log(buffer)

    // 通过from方式创建buffer
    const buffer2 = Buffer.from(text)
    console.log(buffer2)
  ```
  2. buffer中文存储,可以采用不同编码方式存储、及采用tostring方法转换
  ```const buffer2 = Buffer.from(text, "utf16le")```
  3. alloc分配内存,创建一个指定大小的buffer，通过数组的方式存储
  ```javascript
    // 创建一个buffer长度为8
    const buffer = Buffer.alloc(8) //默认情况下 <Buffer 00 00 00 00 00 00 00 00>
    console.log(buffer)

    buffer[0] = 100 
    buffer[1] = 0x100
    console.log(buffer.toString())
  ```
  buffer在使用的的时候不是每次都需要申请内存，而是在创建时候，系统自动分配的内存池子，如果所存储的内存大于池子中一半再申请扩容 
  
  4. buffer方式配合读写文件(适合文本文件)、图像文件可采用第三方sharp库进行操作(裁剪、缩放等)
  ```javascript
    fs.readFile("./ba.txt",(err, data) => {
      console.log(data.toString())

      fs.writeFile("./baa.txt", data, (data) => {
        console.log(data)
      })
    })
  ```
# 事件循环
  1. 事件循环可以理解为JavaScript代码和浏览器之前或者node之前的桥梁
  2. 浏览器的事件循环,JavaScript代码中和浏览器api调用的桥梁(ajax、settimeout、监听事件)
    - JavaScript是单线程执行的、会在执行过程中调用压栈、出栈操作(main script)
    - 执行过程中有settimeout、ajax、dom监听(宏任务队列)
    - 执行过程中promise、queueMicrotask(微任务队列)
  ```javascript
    //面试题1
    setTimeout(function () {
      console.log("set1");
      new Promise(function (resolve) {
        resolve();
      }).then(function () {
        new Promise(function (resolve) {
          resolve();
          }).then(function () {
            console.log("then4");
          });
          console.log("then2");
      });
    });

    new Promise(function (resolve) {
      console.log("pr1");
      resolve();
    }).then(function () {
      console.log("then1");
    });

    setTimeout(function () {
      console.log("set2");
    });

    console.log(2);

    queueMicrotask(() => {
      console.log("queueMicrotask1")
    });

    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then3");
    });
    // pr1
    // 2
    // then1
    // queuemicrotask1
    // then3
    // set1
    // then2
    // then4
    // set2
  ```
  ```javascript
    // 面试题2
    async function async1 () {
      console.log('async1 start')
      await async2();
      console.log('async1 end')
    }
    
    async function async2 () {
      console.log('async2')
    }

    console.log('script start')

    setTimeout(function () {
      console.log('setTimeout')
    }, 0)
    
    async1();
    
    new Promise (function (resolve) {
      console.log('promise1')
      resolve();
    }).then (function () {
      console.log('promise2')
    })

    console.log('script end')
    // script start
    // async1 start
    // async2
    // promise1
    // script end
    // aysnc1 end
    // promise2
    // setToueout
  ```
  3. node中的事件循环,JavaScript代码中与系统调用api(io、settimeout)
  ```python
    /*定时器（Timers）：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
    p 待定回调（Pending Callback）：对某些系统操作（如TCP错误类型）执行回调，比如TCP连接时接收到
    ECONNREFUSED。
    p idle, prepare：仅系统内部使用。
    p 轮询（Poll）：检索新的 I/O 事件；执行与 I/O 相关的回调；
    p 检测：setImmediate() 回调函数在这里执行。
    p 关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)*/
  ```
  ```javascript
    async function async1() {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }

    async function async2() {
      console.log('async2')
    }

    console.log('script start')

    setTimeout(function () {
      console.log('setTimeout0')
    }, 0)

    setTimeout(function () {
      console.log('setTimeout2')
    }, 300)

    setImmediate(() => console.log('setImmediate'));

    process.nextTick(() => console.log('nextTick1'));

    async1();

    process.nextTick(() => console.log('nextTick2'));

    new Promise(function (resolve) {
      console.log('promise1')
      resolve();
      console.log('promise2')
    }).then(function () {
      console.log('promise3')
    })

    console.log('script end')
    // script start
    // async1 start
    // async2
    // promise1
    // promise2
    // script end
    // nextTick1
    // nextTick2
    // async1 end
    //  promise3
    // setTimeout0
    // setImmediate
    // setTimeout2
  ```
  ```javascript
    setTimeout(() => {
      console.log("setTimeout");
    }, 0);

    setImmediate(() => {
      console.log("setImmediate");
    });
    // 问题: setTimeout setImmediate
  ```