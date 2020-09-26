const path = require('path')
const fs = require('fs')
const koa = require('koa')
const static = require('koa-static')
const router = require('koa-router')
const https = require('https')
const sslify = require('koa-sslify').default;//http强制HTTPS
const staticPath = './public'
const PORT = 12808;
const persons = [{ name: 'robin' }, { name: 'bota' }]
const app = new koa()
app.use(sslify())
const myRouter = new router()
app.use(static(path.join(__dirname, staticPath)))
var options = {
    key: fs.readFileSync('./private_key.pem'),  //私钥文件路径
    cert: fs.readFileSync('./ca-cert.pem')  //证书文件路径
};
myRouter.get('/', async (ctx) => {
    ctx.body = 'hello,koa'
})
myRouter.get('/api/persons', async (ctx) => {
    ctx.cookies.set('hello','world')
    ctx.body = JSON.stringify(persons)
})
myRouter.get('/api/personsCors', async (ctx) => {
    //如果配完成，必须：协议+域名+端口
    ctx.set('Access-Control-Allow-Origin','http://bota.com:3000')
    ctx.body = JSON.stringify(persons)
})
myRouter.get('/api/personsCorsCookie', async (ctx) => {
    //如果配完成，必须：协议+域名+端口
    ctx.set('Access-Control-Allow-Origin','http://bota.com:3000')
    //配合前端：xhr.withCredentials = true;一起使用
    ctx.set('Access-Control-Allow-Credentials',true)
    //samesite还需要配合https一起使用！！！
    ctx.cookies.set('hello','world',{sameSite:"none"})
    ctx.body = JSON.stringify(persons)
})

app.use(myRouter.routes()).use(myRouter.allowedMethods());
// app.listen(PORT, () => {
//     console.log('koa服务器开启，地址为:http://localhost:' + PORT)
// })
https.createServer(options,app.callback()).listen(PORT,()=>{
    console.log('koa服务器开启，地址为:https://localhost:' + PORT)
})