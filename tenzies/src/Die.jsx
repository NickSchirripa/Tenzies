import './index.css'

export default function Die(props){
return(
<button className='die' onClick={props.clicked} style={{backgroundColor: props.isHeld ? 'green' : 'white'}}>{props.value}</button>
)
}