import React from 'react'
import Index from '../pages/hello'
import Fusion from '../pages/fusion'
import FusionForm from '../pages/fusion/form'
import FusionShell from '../pages/fusion/shell'
import FormilyHello from '../pages/formily/hello/index-jsx'
import FormilyHello2 from '../pages/formily/hello/index-json'
import FormilyQueryList from '../pages/formily/querylist'
import FormilyInsertRecord from '../pages/formily/insertRecord'
import './index.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default () => {
    return (
        <Router>
            <div className="robin-container">
                <div className="robin-nav">
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/fusion">fusion示例</Link>
                        </li>
                        <li>
                            <Link to="/fusion-form">fusion示例-表单</Link>
                        </li>
                        <li>
                            <Link to="/fusion-shell">fusion示例-shell</Link>
                        </li>
                        <li>
                            <Link to="/formily-hello">formily示例-hello-jsx-schema</Link>
                        </li>
                        <li>
                            <Link to="/formily-hello2">formily示例-hello-json-schema</Link>
                        </li>
                        <li>
                            <Link to="/formily-query-list">formily示例-查询列表</Link>
                        </li>
                        <li>
                            <Link to="/formily-insert-record">formily示例-插入记录</Link>
                        </li>
                    </ul>
                </div>
                <div className="robin-content">
                    <Route path='/' exact component={Index} />
                    <Route path='/fusion' exact component={Fusion} />
                    <Route path='/fusion-form' exact component={FusionForm} />
                    <Route path='/fusion-shell' exact component={FusionShell} />
                    <Route path='/formily-hello' exact component={FormilyHello} />
                    <Route path='/formily-hello2' exact component={FormilyHello2} />
                    <Route path='/formily-query-list' exact component={FormilyQueryList} />
                    <Route path='/formily-insert-record' exact component={FormilyInsertRecord} />
                </div>
            </div>

        </Router>
    )
}