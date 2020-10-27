//自己手写简单koa逻辑
class Koa {
    constructor() {
        this.midFns = [];//类似event中bus
        this.dispatch.bind(this)
        this.compose.bind(this)
    }
    use(midFn) {//类似event中listen
        this.midFns.push(midFn)
    }
    dispatch(index) {//负责流程控制
        if (index === this.midFns.length) return
        let midFn = this.midFns[index]
        /**
         * 这行才是整个代码的核心
         *  将控制流程传递下去
         */
        midFn(() => { this.dispatch(index + 1) })
    }
    compose() {//类似event中trigger
        this.dispatch(0)
    }
}

let app = new Koa()
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
app.compose()
