import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Hello, this is vite + react project</h1>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
      <Address/>

    </>
  )
}

function Person() {
  const age = 26;
  const name = 'Rasel'

  return (
    <>
      <p>My Name is: {name} and my age is: {age} </p>
    </>
  )

}

function Address(){
const add = `
House No: 325,
Road No: 20/A,
floor: 6th,
`
  return (
    <>
    <h2>
      Address is: {add}
    </h2>
    </>
  )
}

export default App
