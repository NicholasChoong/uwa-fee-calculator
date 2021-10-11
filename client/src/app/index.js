import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const FeeCalculator = lazy(() => import('../components/FeeCalculator'))

const App = () => {
  return (
    <Suspense
      fallback={
        <>
          <NavBar />
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
          <Footer />
        </>
      }
    >
      <Router>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <Banner />
            <main>
              <FeeCalculator />
            </main>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
