import React from "react";
const VoteButton = ({...props}) =>{
    return(
        <button onClick={props.callback}>{props.content}</button>
    )
}

export default VoteButton