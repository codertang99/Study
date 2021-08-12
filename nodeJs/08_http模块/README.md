# http
  - web服务器，当客户端需要某个资源的时候，向服务器进行http获取的就是web服务器
  - 创建服务器的两种方式、http.createServer方式本质上返回的new http.Server
  ```javascript
    const server = http.createServer((req,res) => {
      res.end("hello server")
    })
    const server = new http.Server((req, res) => {
      res.end("hello server")
    })
  ```
  - 通过server.listen监听、设置匹配端口号，如果不指定则系统随机分配、可通过server.address().port方式获取
  - 监听的主机地址，localhost映射127.0.0.1回环地址、或系统默认0.0.0.0、可自动映射本地ip地址
  ```javascript
    server.listen(3000, "0.0.0.0", () => {
      console.log("服务器启动成功!!!");
      // console.log(server.address().port);  如果不指定端口，则系统自动分配端口，可通过server.address().port方式获取
      // 指定主机地址,localhost映射127.0.0.1回环地址，而0.0.0.0则会自动映射localhost、127.0.0.1,系统默认0.0.0.0
    })
  ```
  - request对象分析、request对象中保存着客户端向服务器发送请求的相关参数信息
    1. request.url、url地址，针对不同url做不同响应处理
    ```javascript
      // 普通方式处理
      if(url === "/login") {
        res.end("login欢迎回来")
      } else if(url === "/register") {
        res.end("register")
      } else {
        res.end("server")
      }
      // 带参方式处理
      const urls = url.parse(req.url) //通过url模块的parse方法分割url和参数信息
      console.log(urls.pathname)  // 解析后保存路径的信息
      console.log(urls.query) // 保存get参数的信息
      const qsObj = qs.parse(urls.query)  // 可以通过qs模块的parse方法解析具体参数
      console.log(qsObj)
      res.end("server")
    ```
    2. request.method、发送请求的方式，通过get请求或者post请求传递参数获取
      - 针对post请求对url.parse()的pathname进行url判断
      - req.method对请求方式进行判断
      - 而post是通过body请求体进行传递参数的(不能通过req.body方式获取参数，框架是对它做的封装而已)
      - 在post中通过req.on的方式监听传递的数据(因为是采用的二进制的方式),req.setEncoding()设置编码(在监听前设置),或者tostring方式转换
    ```javascript
      const { pathname } = url.parse(req.url)
      if(pathname === "/login") {
        if(req.method === "POST") {
          // console.log(req.body); 这样是获取不到的
          // body是通过数据流的方式传递的，可通过on进行监听,二进制的方式
          req.setEncoding("utf-8")
          req.on("data", (data) => {
            console.log(data); //这里拿到的是字符串
            const { username,password } = JSON.parse(data) //通过json对象解析
          })
          res.end("hello")
        }
      }
    ```
    3. request.headers、请求头的相关信息，通常在请求头中保存用户的token值
      - content-type,代表着服务器返回的参数类型的信息(application/json的json格式、或者xml、普通text/plain格式、multipart/form-data文件格式)
      - content-length 文件的大小,如果文件过大不是一次性读取的、而是多次
      - connection:keep-alive保持tcp长连接(一般默认5s)
      - accept-encoding：告知服务器，客户端支持的文件压缩格式，比如js文件可以使用gzip编码，对应 .gz文件
    4. response.write方法可以响应数据，但是还没有关闭响应流,res.end()响应数据并关闭响应流
    5. res的http响应码，跟据响应状态码来告知客户端不同的状态信息
      - res.statusCode = 400 方式设置状态码
      - res.writeHeade(401) 方式设置状态码,可以和head一起设置
    6. res的响应头信息，可以根据响应头对响应信息解析处理(同时可以携带编码信息)
      - res.setHeader("content-type", "text/html;charset=utf8")
      - res.writeHead(200, {"content-type": "text/html;charset=utf8"}) (响应状态码的同时响应头信息)
    7. http发送网络请求,node中的http可以发送get、post等网络请求
      - http.get请求方式
    ```javascript
      http.get("请求地址",(res) => {
        // res通过.on()方式监听data数据,采用二进制的方式
        // http.get("http://localhost:3000",(res) => {

        res.on("data", (data) => {
            console.log(data.toString())
        })
      })
    ```
      - http.post请求方式,post请求不能直接通过.post方式,而是.request的方式,post请求必须在返回的实例执行end方法才能发送请求
    ```javascript
      const req = http.request({
        host:"localhost", // 主机名
        port:"3000",  // 端口号
        method:"POST" 
      }, (res) => {
        res.on("data", (data) => {
          console.log(data.toString())
        })

        res.on("end", () => {
          console.log("请求发送成功")
        })
      })
      req.end()
    ```
    8. http原生文件上传解析
      - 错误的做法,原生文件上传通常是通过form表单的形式进行的,所以在传递后会携带有一些文件的其它信息(文件描述信息、boundry等)
    ```javascript
      // 直接监听data流的方式写入文件的做法是错误的
      if(req.url === "/upload") {
        if(req.method === "POST") {

          const write = fs.createWriteStream("./foo.png")
          req.pipe(write)
          // 这种方式是错误的，因为在上传文件的时候还附带着一些其它的信息(文件的描述信息、boundry、等)
          req.on("data", (data) => {
            // console.log(data.toString());
            // write.write(data)
          })

          req.on("end", () => {
            console.log("文件打印结束"); 
            res.end("结束")
          })

        }
      }
    ```
      - 正确的做法,大概思路就是把图片内容那一块信息截取出来,再进行写入
    ```javascript
      if(req.url === "/upload") {
        if(req.method === "POST") {

          req.setEncoding("binary")
          const header = req.headers["content-type"].split(" boundary=")[1]

          let body = ""

          req.on("data", (data) => {
            body += data
          })

          req.on("end", () => {
            // console.log(body);
            const content = qs.parse(body, "\r\n", ": ")["Content-Type"]
            let inner = body.split(content)[1]
            inner = inner.substring(0, inner.indexOf(`--${header}--`))
            inner = inner.replace(/^\s\s*/, '')
            fs.writeFile("./foo.png", inner,"binary" ,(err) => {
              console.log(err);
            })
            res.end("结束")
          })

        }
      }
    ```