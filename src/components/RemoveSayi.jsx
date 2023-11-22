import React, { useState } from 'react'
function RemoveSayi() {
  const [sayi, setsayi] = useState(["78",
  "69",
  "85",
  "10",
  "4",
  "63",
  "14",
  "5",
  "27",
   "77", 
  "36",
  "44",
  "21",]);
 const remove=() =>{
  const newArray=[...sayi]
  const randomNumbers= Math.floor(Math.random()*newArray.length)
  const removed=newArray.splice(randomNumbers,1)
  const yenisayi= newArray.filter((i)=>i !==removed)
  setsayi(yenisayi)

  }
  
  return (
    <>
      <div>
        {sayi.map((number)=> <span>{number} </span>)}
      </div>
    <button onClick={remove} >REMOVE</button>
    </>
  
  )


   
}
        

         





export default RemoveSayi
