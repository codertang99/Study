# Stream

  1. stream也可以进行文件的读写操作、相较于readfile的方式,stream可以进行精准控制(从哪里开始、结束、读写几个)
  2. readfile方式就比较单一,只是进行文件一次性读取回调,stream对于理解http模块也有帮助
  3. createReadStream用法
  
    - fs.createReadStream([路径],{[...参数]})
    ```javascript
      const read = fs.createReadStream("./index.txt", {
        start: 3, //从哪里开始读
        end: 6, // 到哪里结束
        highWaterMark: 2  // 一次读取几个
      })

      read.on("data", data => {
        console.log(data);  //监听读取数据
      })

      read.on("open", () => {
        console.log("开始读取文件");
      })

      read.on("close", () => {
        console.log("结束读取文件");
      })
    ```
  4. createWriteStream用法
  
    - fs.createWriteStream([路径], {[...参数]}), 返回write对象
    - 通过write.write方法写入,或者.end()写入并关闭流通道
    - on 方法监听finish完成、close关闭
    ```javascript
      const write = fs.createWriteStream("./index.txt",{
        flags: "a",
        start:1 
      })
      write.write("abc", () => {
        console.log("写入成功")
      })
      write.end("ends")
      write.on("close", () => {
        console.log("close事件")
      })
      write.on("finish", () => {
        console.log("文件写入完成")
      })
    ```
  5. pipe管道的用法
    - fs在进行常规读写时候，会调用较多嵌套fs.readfile,fs.writefile较多回调问题
    - 可以通过createReadStream、createWriteStream,通过read.pipe(write)直接进行读出写入
    - 当然别忘了关闭写入的流write.close()
  ```javascript
    const read = fs.createReadStream("./index.txt");
    const write = fs.createWriteStream("./indez.txt");

    read.pipe(write)
  ```