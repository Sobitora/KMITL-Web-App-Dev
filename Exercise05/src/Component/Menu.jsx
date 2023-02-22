import React, { useState } from 'react';
import "./Menu.css"

const Menu = ({...props}) => {
    const [count, setCount] = useState(0);
    let vote
    let unvote
    let score
    const a = () =>{
        props.update("abc")
    }
    
    if (count == 10) {
        vote = <button onClick={()=>{alert("test")}}>Click to vote</button>
        unvote =<button onClick={()=>setCount(count-1)}>Click to Unvote</button>
        score = "MAX"
    }
    else if(count<10 && count>0){
        vote =<button onClick={()=>setCount(count+1)}>Click to Vote</button>
        unvote =<button onClick={()=>setCount(count-1)}>Click to Unvote</button>
        score = count
    }
    else if(count == 0){
        vote =<button onClick={()=>setCount(count+1)}>Click to Vote</button>
        unvote = <button onClick={()=>{alert("test")}}>Click to unvote</button>
        score = "MIN"
    }

    return(
        <div className="Box-container">
            <div className="food-container">
                <div>
                    <h2>{props.type}</h2>
                    <h3>{props.name}</h3>
                    <div>{props.info}</div>
                </div>
                <div>
                    <img src={props.img} alt="" />
                </div>
            </div>
            <div className="vote-container">
                {vote}
                <div className="test">{score}</div>
                {unvote}
            </div>
        </div>
    )
}

export default Menu