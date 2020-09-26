const Koa = require('koa')
const logger = require('koa-logger');
const sslify = require('koa-sslify').default;//http强制HTTPS
const https = require('https');//node内置https server
const fs = require('fs');
const path = require('path');
const serve = require('koa-static');//koa 静态资源插件
const home = serve(path.resolve(__dirname, './public'));
const app = new Koa();
app.use(logger())
app.use(sslify())
app.use(home)

var options = {
    key: fs.readFileSync('./private_key.pem'),  //私钥文件路径
    cert: fs.readFileSync('./ca-cert.pem')  //证书文件路径
};
https.createServer(options, app.callback()).listen(9527, () => {
    console.log(`server running success at 9527`)
});