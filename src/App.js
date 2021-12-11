import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import SlideA from './Pages/SlideA'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

// import Home from './components/Home'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/slide" component={SlideA} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>

    )
}

export default App
