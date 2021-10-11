import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Help = lazy(() => import('../pages/Help'))

const App = () => {
  return (
    <Suspense
      fallback={
        <>
          {/* <NavBar />
          <Banner />
          <main>
            <div style={{ textAlign: 'center' }}>
              <br />
              <br />
              <br />
              <br />
              <hr style={{ width: '50%', margin: 'auto' }} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </main>
          <Footer /> */}
        </>
      }
    >
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
