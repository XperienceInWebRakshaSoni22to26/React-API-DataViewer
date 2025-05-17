import React from 'react';
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return ( <
        div >
        <
        form onSubmit = { handleSubmit } > <
        Button reqType = { reqType }
        setReqType = { setReqType }
        buttonText = "users"
        className = "submitbtn" /
        >
        <
        Button reqType = { reqType }
        setReqType = { setReqType }
        buttonText = "posts"
        className = "submitbtn" /
        >
        <
        Button reqType = { reqType }
        setReqType = { setReqType }
        buttonText = "comments"
        className = "submitbtn" /
        >

        <
        /form>


        <
        /
        div >
    )
}

export default Form