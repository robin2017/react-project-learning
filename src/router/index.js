import React from 'react'
import './index.scss'
import routes from './config'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default () => {
    return (
        <Router>
            <div className="robin-container">
                <div className="robin-nav">
                    <ul>
                        {
                            routes.map((route, index) => (
                                <li key={index}>
                                    <Link to={route.path}>{route.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="robin-content">
                    {
                        routes.map((route, index) =>
                            <Route key={index} path={route.path} exact component={route.Component} />
                        )
                    }
                </div>
            </div>
        </Router>
    )
}