//类：有一个属性:middlewares；有一个方法:use
//相当于event中bus和listen
//全局方法compose相当于trigger
class Koa {
    constructor() {
        this.middlewares = []
    }
    use(fn) {
        this.middlewares.push(fn)
    }
}
var app = new Koa()
app.use(function (next) {
    debugger
    console.log(1)
    next()
    debugger
    console.log(3)
})
app.use(function (next) {
    debugger
    console.log(2)
})
function compose(middlewares) {
    debugger
    function dispatch(index) {
        debugger
        if (index === middlewares.length) return // 所有中间件都执行完了
        const midFn = middlewares[index]
        //注意此处use只有一个参数next，没有ctx
        midFn(
            function nextFn() { dispatch(index + 1) }
        )
    }
    dispatch(0)
}
compose(app.middlewares)
//返回结果
// 1 2 3

