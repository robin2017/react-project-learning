function hello(name) {
    console.log(`hello:${name}`)
}
/**
 * 参数为函数时，可以有两种方式传递
 * 1、自己构造一个无参函数：()=>{xxx}
 * 2、函数bind
 */
function test(fn) {
    fn()
}
//1、一般方式
test(() => { hello('bota') })
//2、优雅方式
test(hello.bind(null, 'bota'))


