//学习koa洋葱模型
const Koa = require('koa')
const app = new Koa()
const PORT = '3000'
app.use((ctx, next) => {
    console.log('1')
    next()
    console.log('5')
})
app.use((ctx, next) => {
    console.log('2')
    next()
    console.log('4')
})
app.use(ctx => {
    console.log('3-设置body')
    ctx.body = 'hello'
})
app.listen(PORT, () => {
    console.log(`服务启动：http://localhost:${PORT}`)
})
//输出结果
// 1
// 2
// 3-设置body
// 4
// 5

