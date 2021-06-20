import React from 'react'
import Home from './components/Home'

const App = () => {
    return (
        <Router>
            <Switch>
                <div>
                <Route exact path = '/home'>
                    <Home/>
                </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default App