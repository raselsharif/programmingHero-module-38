import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import './App.css'

function App() {
  return (
    <>
    <Todo task="learn react" completed={false}></Todo>
    <Todo task="learn JS" completed={true}></Todo>
    <Todo task="learn CSS" completed={true}></Todo>
    
      {/* <h1>Hello, this is vite + react project</h1>
      <Device name="laptop" price="35000"></Device>
      <Device name="mobile" price="25000"></Device>
      <Device name="watch" price="3000"></Device>
      <Device name="watch-02" price="3000" />
      <Students myClass="12" grade="85"></Students>
      <Students myClass="12" grade="90"></Students>
      <Students myClass="12" grade="100"></Students>
      <Students myClass="12" grade="95"></Students>
      <Person />
      <Address /> */}
    </>
  )
}

function Students({ myClass, grade }) {
  // console.log(myClass);
  return (
    <h3>Class: {myClass} , Grade: {grade} </h3>
  )
}

function Device(props) {
  // console.log(props);
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

function Address() {
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
