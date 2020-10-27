//学习koa洋葱模型
const Koa = require('koa')
const app = new Koa()
const PORT = '3000'

app.use(async (ctx, next) => {
    console.log('start-1')
    await next()
    console.log('end-1')
})
app.use(async (ctx, next) => {
    console.log('start-2')
    await next()
    console.log('end-2')
})
//参数带next的 必须在 参数不带next的 前面，否则失效
app.use(async ctx => {
    console.log('设置body')
    ctx.body = 'hello'
})
app.listen(PORT, () => {
    console.log(`服务启动：http://localhost:${PORT}`)
})


