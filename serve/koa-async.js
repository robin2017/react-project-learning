class Koa {
    constructor () {
        this.middlewares = []
    }
    use (fn) {
        this.middlewares.push(fn)
    }
}
var app = new Koa()
// 中间件1
app.use(async function (next) {
    console.log(1)
    await next()
    console.log(2)
})
function ajax () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
            console.log(5)
        }, 2000)
    })
}
// 中间件2
app.use(async function (next) {
    await ajax()
    console.log(3)
})
 
function compose (middlewares) {
    function dispatch (index) {
        if (index === middlewares.length) return // 所有中间件都执行完了
        const fn = middlewares[index] // 获得中间件
       return fn( // 注意这是一个中间件函数执行，下面的 function next 是参数，函数作为参数，所以中间件中才能执行这个函数
            // 开始执行中间件，打印console.log(1)
            function next(){ // 相当于 自建了一个 next 函数，等待中间件中 await next() 调用，这行中的next就是个标识，可以不写
                // 中间件中执行的await next() 就相当于执行了这个函数
                // 直接进入下一个中间件执行
                return dispatch(index+1)
                // 这里的 return 为了确保 next()有返回值，而若想返回值为promise对象，那是不是得 dispatch()返回？
        
            }
         )
          
         // 注意，这里才是 dispatch()返回值得地方，对应第39行。必须要返回 promise ，供 await 使用
         // 而返回什么 promise 对象啊？返回的当然是你要 await 啥了啊
         // await next()，   next() 的本质是  完全执行完下一个中间件函数
         // ，因此 await 等待的 promise 对象，就是中间件函数执行完后返回的promise !
         // 来看看中间件函数是啥
         /* async function (next) {
              console.log(3)
          }
                */
            // 这就是要执行的下一个中间件函数啊，也就是第34行的fn啊
          // 那目的就成为 fn() 执行后要返回一个 promise
          // 而 fn 本身就是带有 async 的，async 关键字的函数本身就返回 promise !
          // 因此如果你中间件函数直接写 async 了，那直接返回 res 就行了！
          
         // async本身返回的就是 promise
         // 但是源码中会有判断你中间件函数写没写 async，因此如果fn（）返回的是乱七八糟的，兼容都转成promise了
         // return Promise.resolve(res) // 不管你 res是啥，全都转成 promise
    }
    dispatch(0)
}
compose(app.middlewares)
