import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
 function handleClick(){
  alert('button clicked')
 }
 const addToFive = (num) =>{
  alert(num+5)
 }

  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
     <button onClick={handleClick}>Click me</button>
     <button onClick={() =>{alert('clicked 2')}}>click2</button>
     <button onClick={() =>addToFive(3)}>four</button>
     
    </>
  )
}

export default App
