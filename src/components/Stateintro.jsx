import React, { useState } from 'react'

function Stateintro() {
    const [size, setSize] = useState(200)
    const increase = () => {
        setSize(size + 100)

    }
    const [numbers, setnumbers] = useState([])
    const add = () => {
        const randomNumbers = Math.floor(Math.random() * 100 + 1)
        if (numbers.includes(randomNumbers)) {
            return
        }
        else {
            setnumbers([...numbers, randomNumbers])
        }


    }
    const [color, setcolor] = useState("black");
    const colors = ["red",
        "orange",
        "yellow",
        "purple",
        "pink",
        "blue",
        "gray",]

        const change=()=>{
            const randomNumbers = Math.floor(Math.random() * 6)
            setcolor(colors[randomNumbers])

        }







    return (
        <>
            <div style={{ backgroundColor: color, height: 200, width: 200 }} className='10renk'></div>
            <button onClick={change} >CHANGE COLOR</button>
            <div className="App">
                <button onClick={increase}>increase</button>
                <div style={{ height: size, width: size, backgroundColor: 'tomato' }}></div>
            </div>
            <button onClick={add} >ADD</button>
            <ul style={{listStyle:'none'}}>
                {numbers.map((number) => <li>{number}</li>)}
            </ul>
        </>

    )
}



export default Stateintro