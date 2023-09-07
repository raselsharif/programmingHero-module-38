import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import Actors from './Actors'
import Singers from './Singers'
import BookStore from './BookStore'
import './App.css'

function App() {
  const actors = [
    'Tom Hanks',
    'Meryl Streep',
    'Denzel Washington',
    'Scarlett Johansson',
    'Leonardo DiCaprio',
    'Jennifer Lawrence',
    'Brad Pitt',
    'Natalie Portman',
    'Robert De Niro',
    'Charlize Theron'
  ];

  const singers = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Eve', age: 28 },
    { id: 5, name: 'Charlie', age: 40 },
    { id: 6, name: 'Olivia', age: 22 },
    { id: 7, name: 'Daniel', age: 33 },
    { id: 8, name: 'Sophia', age: 29 },
    { id: 9, name: 'Grace', age: 37 },
    { id: 10, name: 'Liam', age: 32 }
  ];

  const books = [
    { id: 0, bookName: "The Great Gatsby", bookPrice: 12.99 },
    { id: 1, bookName: "To Kill a Mockingbird", bookPrice: 10.99 },
    { id: 2, bookName: "1984", bookPrice: 9.99 },
    { id: 3, bookName: "The Catcher in the Rye", bookPrice: 11.99 },
    { id: 4, bookName: "Pride and Prejudice", bookPrice: 8.99 },
    { id: 5, bookName: "The Hobbit", bookPrice: 14.99 },
    { id: 6, bookName: "Fahrenheit 451", bookPrice: 13.99 },
    { id: 7, bookName: "The Lord of the Rings", bookPrice: 15.99 },
    { id: 8, bookName: "Brave New World", bookPrice: 10.49 },
    { id: 9, bookName: "The Alchemist", bookPrice: 11.49 },
    { id: 10, bookName: "The Alchemist", bookPrice: 11.49 },
    { id: 11, bookName: "The Alchemist", bookPrice: 11.49 },
    { id: 12, bookName: "The Alchemist", bookPrice: 11.49 },
    { id: 13, bookName: "The Alchemist", bookPrice: 11.49 },
    { id: 14, bookName: "The Alchemist", bookPrice: 11.49 },
    { id: 15, bookName: "The Alchemist", bookPrice: 11.49 },
  ];


  return (
    <>


      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      {/* {
        actors.map(actor => <Actors name={actor}></Actors>)
      } */}


      {/* <Todo task="learn react" completed={false}></Todo>
    <Todo task="learn JS" completed={true}></Todo>
    <Todo task="learn CSS" completed={true}></Todo> */}

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
