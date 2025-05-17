import React from 'react'

const Button = ({ reqType, setReqType, buttonText }) => {
    return ( <
        div >
        <
        button className = { buttonText === reqType ? "selected" : null }
        onClick = {
            () => setReqType(buttonText)
        } > { buttonText } < /button>  < /
        div >
    )
}

export default Button