import { useState } from 'react'
import './index.css'
import Die from "./Die.jsx"
import {nanoid} from 'nanoid'

export default function App() {

  //generates 10 random numbers and pushes them to a new array and returns the values.

//function generateAllNewDice(){
 //return new Array(10)
 // .fill(0)
  //.map(()=>Math.floor(Math.random()*6)+1)

//change the function above, so it returns an object with properties. One properties: 
// 1.being a value that gives us a random number,  2. a boolean 3. a unique id
function generateAllNewDice(){
  return new Array(10)
  .fill(0)
  .map(()=>({
    id:nanoid(),
    value:Math.ceil(Math.random() * 6),
    isHeld:false
  }))
}

//function that gets object id of clicked button. Then checks that id and maps over the array, 
// to change the isHeld Property of the object that has a mathcing id- or the clicked one
function hold(id){
  setNumbers(prevDie=> prevDie.map(prevDie =>{
    return prevDie.id === id ? {...prevDie, isHeld: !prevDie.isHeld}: prevDie
  }))
}

//assigns the random number array to a useState variable
const [numbers, setNumbers] = useState(generateAllNewDice())

//maps over the array of random numbers and renders the Die Comp, and gives a random number in the array to each Die comp Value Prop
const diceElement = numbers.map(numberDie=> 
  <Die
     key={numberDie.id}
     value={numberDie.value} 
     isHeld={numberDie.isHeld}
     clicked={()=>hold(numberDie.id)}
     />)



//a function that generates new numbers for "numbers" array. 
// So when this is used it will change state, and thus render new numebrs for the diceElement.
//we will use this as a callback function for then button below, which when clicked will trigger the function
function rollDice(){
  setNumbers(oldDice => oldDice.map(dice=> dice.isHeld === true ? dice: {...dice, value:Math.ceil(Math.random() * 6) }))
}

  return(
    <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className='gridContainer'>
    {diceElement}  
    
    </div>
<button className='rollBtn' onClick={rollDice}>Roll</button>
    </main>
  )
}




