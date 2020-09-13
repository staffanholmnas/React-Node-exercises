import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
       <Display counter={counter}/>
       <Button
        click={increaseByOne}
        text= "plus"
      />
      <Button
        click={setToZero}
        text='zero'
      />     
      <Button
        click={decreaseByOne}
        text='minus'
      />    
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ click, text }) => (
  <button onClick={click}>
    {text}
  </button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
