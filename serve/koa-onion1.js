const app = {
    // 存放中间件的数组
    middlewares: [],
    // 存储方法,模拟使用中间件
    use(fn) {
        this.middlewares.push(fn)
        //console.log('middlewares:',this.middlewares)
    }
};

app.compose = function (middlewares) {
    return async function () {

        await dispath(0);

        async function dispath(idx) {
           
            if (idx === app.middlewares.length) return;

            const fn = middlewares[idx];

            await fn(function next() {
                
                dispath(idx + 1);
            });
        }
    }
}
app.use(function (next) {
    console.log(1);
    next();
    console.log(1.1)
})

app.use(function (next) {
    console.log(2);
    next();
    console.log(2.2);

})

app.use(function (next) {
    console.log(3);
    next();
    console.log(3.3);
});


app.compose()(); 
