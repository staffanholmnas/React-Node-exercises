import React from 'react'
import ReactDOM from 'react-dom'


const Hello = () => {
console.log("Hello from components")
const now = new Date()
let name = "Billy"
const a = 10
const b = 20
return (
  <div>
    <p>Hello world, greetings {name}!!! It is now{now.toString()}</p>
    <p>
      {a} + {b} + {a} = {a + b + a}
    </p>
  </div> )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))