import React,{useContext} from 'react'
import InnerPage from './InnerPage'
import messageContext from '../contexts/messageContext'

function OuterPage() {
    return (
        <div>
            <h2>Outer:{useContext(messageContext)[0]}</h2>
            <InnerPage />
        </div>
    )
}

export default OuterPage
