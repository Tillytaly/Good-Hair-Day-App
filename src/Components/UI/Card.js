import React from 'react'
import "./UlStyles.css"

const Card = (props) =>{
    return <div className={`card ${props.className}`}>
        {props.children}
    </div>
}

export default Card