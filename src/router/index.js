import React from 'react'
import Index from '../pages/hello'
import Fusion from '../pages/fusion'
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

                    </ul>
                </div>
                <div className="robin-content">
                    <Route path='/' exact component={Index} />
                    <Route path='/fusion' exact component={Fusion} />
                </div>
            </div>

        </Router>
    )
}