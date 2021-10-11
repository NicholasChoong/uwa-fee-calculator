import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import reportWebVitals from './utils/reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

// import axe from '@axe-core/react'
// axe(React, ReactDOM, 1000)
if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => axe.default(React, ReactDOM, 1000))
}

import axe from '@axe-core/react'
axe(React, ReactDOM, 1000)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
