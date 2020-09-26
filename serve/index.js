const path = require('path')
const koa = require('koa')
const static = require('koa-static')
const router = require('koa-router')
const staticPath = './public'
const PORT = 12808;
const persons = [{ name: 'robin' }, { name: 'bota' }]
const app = new koa()
const myRouter = new router()
app.use(static(path.join(__dirname, staticPath)))
myRouter.get('/api/persons', async (ctx) => {
    ctx.body = JSON.stringify(persons)
})
myRouter.get('/api/personsCors', async (ctx) => {
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.body = JSON.stringify(persons)
})
myRouter.get('/', async (ctx) => {
    ctx.body = 'hello,koa'
})
app.use(myRouter.routes()).use(myRouter.allowedMethods());
app.listen(PORT, () => {
    console.log('koa服务器开启，地址为:http://localhost:' + PORT)
})