import React from 'react'


const Card = (props) =>{
    return <div className= {`ul-card ${props.className}`}>
        {props.children}
    </div>
}

export default Card