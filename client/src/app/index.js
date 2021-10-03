import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Title from '../components/Title'
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
            <Title />
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
