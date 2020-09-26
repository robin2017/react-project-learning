import React from 'react'
export default () => {
    const url1 = `api/persons`
    const url2 = 'http://robin.com:12808/api/persons'
    const url3 = 'http://robin.com:12808/api/personsCors'
    const url4 = 'http://robin.com:12808/api/personsCorsCookie'
    const sendRequest = (url,open) => {
        //ajax请求测试
        let xhr = new XMLHttpRequest()
        xhr.open('get', url, false)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200) {
                    console.log('url(' + url+')的响应：', xhr.responseText)
                }
            }
        }
  
        if(open){
            xhr.withCredentials = true;
        }else{
            xhr.withCredentials = false;
        }
        xhr.send(null)
    }
    return (
        <div>
            <h4>同域和跨域测试</h4>
            <button onClick={() => { sendRequest(url1) }}>发送同域请求</button>
            <button onClick={() => { sendRequest(url2) }}>发送跨域请求</button>
            <button onClick={() => { sendRequest(url3) }}>发送跨域cors请求</button>
            <button onClick={() => { sendRequest(url4) }}>发送跨域cors请求带cookie</button>
            <button onClick={() => { sendRequest(url4,true) }}>发送跨域cors请求带cookie开withCredentials</button>
        </div>
    )
}
