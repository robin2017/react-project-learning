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
         *  异步时：async next()表明next必须有返回，这里需要两个return
         */
        return midFn(() => { return this.dispatch(index + 1) })
    }
    compose() {//类似event中trigger
        this.dispatch(0)
    }
}











let app = new Koa()
function waitTest() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
            console.log('=等待2秒=')
        }, 2000)
    })
}
app.use(async function (next) {
    console.log(1)
    //特别注意：异步时next前面都要加await，否则next后置的就先执行
    await next()
    console.log(3)
})
app.use(async function (next) {
    await waitTest()
    console.log(2)
})
app.compose()
//输出结果
// 1
// =等待2秒=
// 2
// 3