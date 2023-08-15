import {useState} from 'react'

export default function Quotebox() {
    const colors =["red","blue","green","yellow", "brown", "purple", "pink", "orange"];
    const [color, setColor] = useState(colors[Math.floor(Math.random()*colors.length)])
    
    const handleClick = () => {
        setColor(colors[Math.floor(Math.random()*colors.length)])
    }
    return (
        <div id="quote-box" style={{backgroundColor:color}}>
            <button onClick={handleClick}>NEW QUOTE</button>
        </div>
    )
}