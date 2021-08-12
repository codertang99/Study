# express框架
  - express框架搭建服务器初体验,引入第三方框架express
  - express()执行它是一个函数,返回一个app函数,listen监听
  ```javascript
    // express是一个函数,执行函数返回另一个函数
    const app = express()

    // 监听get请求login路径,执行中间件的回调函数
    app.get("/login", (req,res,next) => {
      // req 请求对象
      // res 响应对象
      // next 执行下一个中间件函数的next方法

      console.log("第一个中间件函数");
      res.end("hello")

    })

    app.listen(3000, () => {
      console.log("express服务器启动成功");
    })
  ```
  - 中间件的概念,中间件其实就是一系列函数的回调
  - 中间件可以做什么呢？(可以执行任何代码、请求响应处理、调用下一个中间件)
  - 应用中间件的几种方式
    1. 普通中间件,直接调用app.use(callback)的方式,任何请求都会被拦截,调用next执行下一个中间件
    ```javascript
    app.use((req,res,next) => {
      console.log("中间件1");
      next()
    })

    app.use((req,res,next) => {
      console.log("中间件2");
      next()
    })

    app.use((req,res,next) => {
      console.log("中间件3");
      res.end("结束")
    })
    ```
    2. 路径匹配中间件,通过app.use(path,callback)的方式,对应路径的都会被拦截,多个匹配路径中间件调用next执行下一个
    ```javascript
      app.use("/login", (req,res,next) => {
        console.log("路径中间件1");
        next()
      })

      app.use("/login", (req,res,next) => {
        console.log("路径中间件2");
        next()
      })

      app.use("/login", (req,res,next) => {
        console.log("路径中间件3");
        res.end("结束 ")
      })
    ```
    3. 路径和方法匹配中间件,app.get、app.post等方式匹配对应路径对应方法
    ```javascript
    app.use((req,res,next) => {
      console.log("middleware");
      next()
    })

    app.get("/login", (req,res,next) => {
      console.log("path and method middleware1");
      res.end("结束")
      next()
    })

    app.post("/produtcs", (req,res,next) => {
      console.log("path and method middleware");
    })
    ```
    4. 多个中间件的应用
    ```javascript
      app.get("/login",(req,res,next) => {
        console.log("middleware1");
        next()
      },(req,res,next) => {
        console.log("middleware2");
        next()
      },(req,res,next) => {
        console.log("middleware3");
        next()
      },(req,res,next) => {
        console.log("middleware4");
        res.end("结束")
      })
    ```
  - 中间件的应用、参数解析
    1. 一方面可以通过自己手动编写中间件进行解析、以json数据为例,判断headers头中的content-type信息是否是application/json、通过on监听解析
    ```javascript
      // 通过自己手动解析json body中的数据
      app.use((req,res,next) => {
        if(req.headers["content-type"] === "application/json") {
          req.on("data", (data) => {
            req.body = JSON.parse(data.toString())
          })
          req.on("end", () => {
            next()
          })
        } else {
          next()
        }
      })
    ```
    2. express中已经内置了一些参数解析的中间件解析,express.json()解析json数据、express.urlencoded()解析urlencoded数据
    ```javascript
      // 当然express已经有了一些内置的中间件可以自动解析
      app.use(express.json()) // 解析json中的数据
      app.use(express.urlencoded({extended: true})) // 解析urlencodede中的参数信息
      // extended值 true和false的区别
      // true : 表示采用第三放的qs库进行解析处理urlencoded
      // false : 表示采用内置的querystring库解析处理urlencoded

      app.post("/login", (req,res,next) => {
        console.log(req.body);
        res.end("结束")
      })
    ```
    3. express解析form-data中的参数信息,这里express没有内置好的函数,但是有一个multer的第三方库可以解析form-data中的数据(是express官方编写的第三方库),upload.any表示解析文件外的参数信息
    ```javascript
      const upload = multer()
      app.use(upload.any())   // 注意：不要吧upload.any当全局中间件来使用,否则会跟其它等发生冲突,出现意想不到的事情

      app.post("/upload", (req, res, next) => {

        console.log(req.body)

        res.end("结束")
      })
    ```
    利用multer第三方库上传文件解析,通过multer({ storage }),通过multer.diskStorage({destination,filename})定义一个storage,传入路径解析,upload.single上传单个文件、upload.array以数组的形式上传多个文件、upload.fields以数组对象的形式上传 upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
    upload.single、upload.array、upload.fields这三种解析文件的方式如果有文本域数据都会进行解析
    ```javascript
      // 这种方式没有文件后缀名，而且名字也是随机生成的
      const upload = multer({
        dest: "./upload/"
      })

      // 自定义上传文件的名字
      const storage = multer.diskStorage({
        filename: (req, file, callback) => {
          callback(null, Date.now() + path.extname(file.originalname))  // 这是一个回调函数,参数一：传入错误的信息,参数二：文件的名字
        },
        destination: (req, file, callback) => {
          callback(null, "./upload/")   // 这是一个回调函数,参数一：传入错误的信息,参数二：路径
        }
      })

      const upload = multer({
        storage
      })

      app.post("/upload", upload.single("file"), (req,res,next) => {
        console.log(req.body)
        console.log(req.file)
        res.end("上传成功")
      })
    ```
    4. 第三方库morgan的使用,用于在请求接口时写入请求的日志信息的库(对请求接口写入日志信息)
    ```javascript
      const writeStream = fs.createWriteStream("./logs/access.log", {
        flags: "a+"
      })
      
      app.use(morgan("combined", { stream: writeStream }))
    ```
    5. epxress中params、query参数,get请求参数获取,express框架中直接封装了两种参数的获取,而不用自己手动解析参数
    ```javascript
      // 可能会有根据商品id查询详情、根据params获取
      app.get("/product/:id", (req,res,next) => {
        console.log(req.params) // 返回一个对象,因为可能会有多个
        res.end("结束 ")
      })

      // get请求获取url地址参数信息
      app.get("/login", (req, res, next) => {
        console.log(req.query)
        res.end("登录成功 ")
      })
    ```
  - express中响应数据,res.end()响应普通数据(普通格式响应json需要通过自己手动设置响应头信息并配合json.stringfy解析), res.json()可以响应json、array等格式的信息, res.status()设置响应码信息
  ```javascript
    // 通过res.end返回json数据是比较麻烦的
    res.type("application/json")
    res.end(JSON.stringify({username: "tang", password: 123}))

    // express中提供了.json的返回方式直接对json进行解析,而不用自己手动设置json格式

    res.status(400) //设置响应码

    // res.json({username:"codertang",password:123})  //返回json格式
    res.json(["123","123","43534"])  //返回数组格式
  ```
  - express中路由的使用,在对功能定义接口的时候所有的接口逻辑都写在app会使它变得很复杂的所以使用路由把不同功能接口进行一个路由的分离、路由就相当于一个mini的app,具备app的所有基本功能
  ```javascript
    // app中使用路由
    app.use("/user", userRouter)

    // 定义路由
    const userRouter = express.Router()

    userRouter.get("/login", (req ,res ,next) => {
      res.end("get login")
    })

    userRouter.post("/login", (req, res, next) => {
      res.end("post login")
    })
 
    userRouter.delete("/login", (req, res, next) => {
      res.end("delete login")
    })
  ```
  - node做静态服务器,node可以访问静态资源
  ` app.use(express.static()) `
  - node中的错误处理,以登录逻辑为例、在登录接口中既有查询账号密码的逻辑,又有成功返回的逻辑,也有错误处理的逻辑,有时候错误处理的逻辑大部分都是相似的,所有我们可以把错误处理都放到一个统一的地方进行处理返回错误的提示信息、直接调用next()传入error信息进入错误处理的中间件进行统一处理
  ```javascript
    app.use((err, req, res, next) => {

      let statusCode = 400
      let message = ""

      switch(err.message) {
        case USER_NOT_LOGIN:
          message = "user not login"
          break;
        case REGISTRY_FAIL:
          message = "registry fail"
          break;
        default:
          message = "not found"
      }

      res.json({
        failCode: statusCode,
        failMessage: message
      })
      
    })
  ```