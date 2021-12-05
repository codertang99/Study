import React, { PureComponent } from "react"
import ReactDom from "react-dom"

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      message: "hello tang"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.querySelector("#app"))