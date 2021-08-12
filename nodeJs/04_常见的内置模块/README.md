# path模块
  - const path = require("path")
  - windows、macOs、Linux各个操作系统路径拼接不一
  - path.resolve([路径1,路径2]),会查找根源路径
  - path.jion([路径1,路径2]),不会查找根源路径
  - path.extname(),返回路径文件后缀
  - path.dirname(),返回路径
  - path.basename(),返回路径文件
# fs模块
  - fs文件支持三种方式调用，以获取文件信息状态为例
  - const paths = "./info.txt"
    1. 同步调用，会阻塞代码执行
    ```javascript
      // 同步方式，会阻塞代码执行
      const info1 = fs.statSync(paths)
      console.log(info1)
    ```
    2. 异步调用，易出现回调地狱问题
    ```javascript
      // 异步方式，会出现回调地狱问题
      const info2 = fs.stat(paths,(err, res) => {
        if(err) {
          return console.log("错误")
        }

        console.log(res)
      })
    ```
    3. promise方式
    ```javascript
      // 支持promise的方式调用
      const info3 = fs.promises.stat(paths)
      info3.then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    ```
  - 文件描述符，对应资源表中的文件的标识,可以通过文件描述符进行文件操作
  ```javascript
    fs.open("./info.txt",(err,fd) => {
      if(err) {
        return console.log("错误")
      }
      fs.readFile(fd,{encoding:"utf8"},(err,res) => {
        if(err) {
          return console.log("读取错误")
        }
        console.log(res)
      })
    })
  ```
  - 文件的读写,readFile(),writeFile()
  ```javascript
    fs.writeFile("./info.txt","您好呀！",{flag:"a+",encoding:"utf-8"},(err) => {
      console.log(err)
    })
    fs.readFile("./info.txt", {flag: "a+",encoding: "utf-8"}, (err,data) => {
      if(err) {
        return console.log("读取错误")
      }
      console.log(data)
    })
  ```
  - 文件夹的操作
    1. 判断文件夹是否存在，创建文件夹
    ```javascript
      if(!fs.existsSync(dirname)) {
        fs.mkdir(dirname, (err) => {
          console.log(err)
        })
      }
    ```
    2. 文件夹重命名
    ```javascript
      fs.rename("./folders", "./tang", () => {
        console.log("重命名成功")
      })
    ```
    3. 文件夹读取，fs.readdir("./aim",(err, files) => {})
    ```javascript
      // 封装文件夹递归调用
      const dirFolders = (dirname) => {
      fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
        files.forEach(res => {
          if(res.isDirectory()) {
              const newFolders = path.resolve(dirname, res.name)
              dirFolders(newFolders)
            } else {
              console.log(res.name)
            }
          })
        })
      }
      dirFolders(dirname)
    ```
# events模块
  - events发射、监听事件
  ```javascript
    const EventEmitter = require("events")
    const emitter = new EventEmitter()
    emitter.emit("add",11)
    emitter.on("add",(args) => {
      console.log(args)
    })
    emitter.once("add",(args) => {
      console.log(args)
    })
  ```
  - event获取事件信息
  ```javascript
    console.log(emitter.eventNames()) // 监听事件的名字
    console.log(emitter.getMaxListeners())  // 获取最大监听数
    console.log(emitter.listenerCount("add")) // 获取某个事件监听数
    console.log(emitter.listeners("add")) // 获取某个事件监听函数
  ```
