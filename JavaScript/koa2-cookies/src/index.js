const Koa2 = require("koa2")
const Router = require("koa-router")

const koa = new Koa2()
const router = new Router()


router.get("/test", (ctx, err) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.cookies.set("tang", "hello tang", {
    maxAge: 1000 * 60
  })
  ctx.response.body = "123123"
})

router.get("/fetch", (ctx, err) => {
  ctx.response.body = `您获取的cookies为${ctx.cookies.get("tang")}`
})

koa.use(router.routes())
koa.use(router.allowedMethods())

koa.listen(3000, () => {
  console.log("服务器启动了~");
})