class Koa {
    constructor() {
        this.middlewares = []
    }
    use(callback) {
        this.middlewares.push(callback)
    }
}
var app = new Koa()
app.use(async (ctx, next) => {
    console.log(1)
    await next()
    console.log(5)
})
app.use(async (ctx, next) => {
    console.log(2)
    await next()
    console.log(4)
})
app.use(async (ctx, next) => {
    console.log(3, 'ctx:', ctx)
})
function compose(middlewares) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
        index = i
        if (i === middlewares.length) return
        let fn = middlewares[i]
        let result = fn(null, function next() { // 这里的null应该是context，
            return dispatch(i + 1)    // 世界上核心的思想就是，next()时先执行下一个middleware
        })
        return Promise.resolve(result)
    }
}
compose(app.middlewares)
