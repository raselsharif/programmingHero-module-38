import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Hello, this is vite + react project</h1>
      <Device name="laptop" price="35000"></Device>
      <Device name="mobile" price="25000"></Device>
      <Device name="watch" price="3000"></Device>
      <Device name="watch-02" price="3000"/>
      <Person/>
      <Address/>
    </>
  )
}

function Device(props){
console.log(props);
  return (
      <h2>This device: {props.name}, price: {props.price} </h2>
  )
}

function Person() {
  const age = 26;
  const name = 'Rasel'
  const Style = {
    color: "white",
    fontSize: "20px",
    backgroundColor: "blueviolet",
    padding: "10px",
  }
  return (
    <>
      <p style={Style}>My Name is: {name} and my age is: {age} </p>
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
    <h2 className='name'>
      Address is: {add}
    </h2>
    </>
  )
}

export default App
