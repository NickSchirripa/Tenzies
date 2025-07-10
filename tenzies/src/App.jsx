import { useState } from 'react'
import './index.css'
import Die from "./Die.jsx"

export default function App() {

  //generates 10 random numbers and pushes them to a new array and returns the values.
  
//function generateAllNewDice(){
 //return new Array(10)
 // .fill(0)
  //.map(()=>Math.floor(Math.random()*6)+1)

//change the function above, so it returns an object with properties. One property being a value, with our random number, and another a boolean
function generateAllNewDice(){
  return new Array(10)
  .fill(0)
  .map(()=>({
    value:Math.ceil(Math.random() * 6),
    isHeld:false
  }))
}


//assigns the random number array to a useState variable
const [numbers, setNumbers] = useState(generateAllNewDice())

//maps over the array of random numbers and renders the Die Comp, and gives a random number in the array to each Die comp Value Prop
const diceElement = numbers.map(numberDie=> <Die value={numberDie.value}/>)



//a function that generates new numbers for "numbers" array. 
// So when this is used it will change state, and thus render new numebrs for the diceElement.
//we will use this as a callback function for then button below, which when clicked will trigger the function
function rollDice(){
  setNumbers(generateAllNewDice())
}

  return(
    <main>
    <div className='gridContainer'>
    {diceElement}  
    
    </div>
<button className='rollBtn' onClick={rollDice}>Roll</button>
    </main>
  )
}



