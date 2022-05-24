import React from 'react'


const UICard = (props) =>{
    return <div className= {`ul-card ${props.className}`}>
        {props.children}
    </div>
}

export default UICard