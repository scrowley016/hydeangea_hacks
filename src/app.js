import React from 'react'
import Home from './components/Home'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/home'>
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}

export default App