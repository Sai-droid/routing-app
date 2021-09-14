import React,{useContext}from 'react'
import messageContext from '../contexts/messageContext'
function InnerPage() {
    const [message,setMessage] = useContext(messageContext)
    return (
        <div>
            <h3>Inner:{useContext(messageContext)[0]}</h3>
            <button className="button-style" onClick ={()=>{setMessage(Math.random().toString())}}>change</button>
        </div>
    )
}

export default InnerPage
