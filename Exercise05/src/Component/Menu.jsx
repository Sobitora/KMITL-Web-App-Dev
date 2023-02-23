import React, { useState } from 'react';
import "../styles/Menu.css"
import VoteButton from './VoteButton';

const Menu = ({...props}) => {
    const [count, setCount] = useState(0);
    let vote
    let unvote
    let score

    if (count === 10) {
        vote = () =>{
            alert("Cannot Vote more")
        }
        unvote = ()=>{
            setCount(count-1)
        }
        score = "MAX"
    }
    else if(count<10 && count>0){
        vote = () =>{
            setCount(count+1)
        }
        unvote = ()=>{
            setCount(count-1)
        }
        score = count
    }
    else if(count === 0){
        vote = () =>{
            setCount(count+1)
        }
        unvote = ()=>{
            alert("Cannot Unvote")
        }
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
                <VoteButton callback={vote} content="Click to Vote"/>
                <div>{score}</div>
                <VoteButton callback={unvote} content="Click to Unvote"/>
            </div>
        </div>
    )
}

export default Menu