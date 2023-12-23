import React, { useState } from 'react'
import Header from './Header'

export const Footer = (props) => {
    const {data}=props
    const [temp,settemp]=useState(false)
    const arr=[1,2,3,4]
    
    const newArray=arr.map((value,index)=>{
      return value*3
    })
    console.log(newArray);




    function handle(){
     
      settemp(temp?false:true)
    console.log(temp);

    }


  return (
    <><button onClick={handle}>click</button>
    {temp?<div style={{border:'1px solid red'}}>trasfasdfasdfasdfasdfasdfue</div>:<Header/>}
    {arr.map((value)=>(<div>{value}</div>))}
    
    </>
  )
}

export default Footer