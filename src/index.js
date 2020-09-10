import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
  console.log("Hello from components")
  const now = new Date()
  //let name = "Billy"
  const a = 10
  const b = 20
  return (
    <>
      <p>Hello world, greetings {props.name}!!! It is now{now.toString()}</p>
      <p>You are {props.age} years old.</p>
      <p>
        {a} + {b} + {a} = {a + b + a}
      </p>
    </>)
}

const App = () => {
  const name = "Terry"
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Brittany" age={15 + 2} />
      <Hello name="Steve" age={age + 35} />
      <Hello name={name} age={age} />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))