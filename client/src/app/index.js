import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Help = lazy(() => import('../pages/Help'))

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact strict path='/help'>
            <Help />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
