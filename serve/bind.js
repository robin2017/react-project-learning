function hello(name) {
    return `hello:${name}`
}
/**
 * 参数为函数时，可以有两种方式传递
 * 1、自己构造一个无参函数：()=>{xxx}
 * 2、函数bind
 */
function showMsg(fn) {
    console.log(fn())
}
//1、一般方式
showMsg(() => { return hello('bota1') })
//2、优雅方式
showMsg(hello.bind(null, 'bota2'))
//结果输出
// hello:bota1
// hello:bota2



