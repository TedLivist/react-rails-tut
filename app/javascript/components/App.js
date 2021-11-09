import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HelloWorld from './HelloWorld'
import { Provider } from "react-redux";
import configureStore from "../configureStore";
const store = configureStore()

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" render={() => ("Home!.......................Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="Friend ........................"/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
