import React, { Component, useState } from "react"
import ReactDom from "react-dom"

function Components(props) {

  const [state, setState] = useState("hello React");

  return (
    <div>
      <h2>{state}</h2>
    </div>
  )
}

export default Components