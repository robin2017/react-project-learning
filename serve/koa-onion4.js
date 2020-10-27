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
    console.log(1)
    next()
    console.log(3)
})
app.use(function (next) {
    console.log(2)
})
function compose(middlewares) {
    function dispatch(index) {
        if (index === middlewares.length) return // 所有中间件都执行完了
        const fn = middlewares[index]
        //注意此处use只有一个参数next，没有ctx
        fn(() => { dispatch(index + 1) })
    }
    dispatch(0)
}
compose(app.middlewares) // 1 3 2

