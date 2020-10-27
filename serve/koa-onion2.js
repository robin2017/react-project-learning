const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
    console.log('---1--->')
    await next()
    console.log('===6===>')
})
app.use(async (ctx, next) => {
    console.log('---2--->')
    await next()
    console.log('===5===>')
})
app.use(async (ctx, next) => {
    console.log('---3--->')
    await next()
    console.log('===4===>')
})
//可以不用设置ctx.body的值
app.listen(8899, () => {
    console.log('应用启动了')
})

// 执行结果如下：
// ---1--->
// ---2--->
// ---3--->
// ===4===>
// ===5===>
// ===6===>

