const Koa = require("koa2")
const KoaRouter = require("koa-router")

const app = new Koa()
const router = new KoaRouter()

router.get("/test", (ctx, err) => {
  ctx.response.body = "123"
})

app.use(router.routes())
// app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log("服务器启动成功");
})