import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import FeeCalculator from '../components/FeeCalculator'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App
