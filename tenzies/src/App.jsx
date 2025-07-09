import { useState } from 'react'
import './index.css'
import Die from "./Die.jsx"

export default function App() {

function generateAllNewDice(){
 return new Array(10)
  .fill(0)
  .map(()=>Math.floor(Math.random()*6)+1)
}

const [numbers, setNumbers] = useState(generateAllNewDice())
const diceElement = numbers.map(numberDie=> <Die value={numberDie}/>)


  return(
    <main>
    <div className='gridContainer'>
    {diceElement}
    </div>
    </main>
  )
}


