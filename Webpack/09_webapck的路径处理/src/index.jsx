import React, { Component } from "react"
import { Link, BrowserRouter, Route, Routes } from "react-router-dom"

import Test from "./Test.jsx"
import Cache from "./Cache.jsx"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "hello"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" component={<Test/>}></Route>
            <Route path="/test" component={<Test/>}></Route>
            <Route path="/cache" component={<Cache/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

}

export default App