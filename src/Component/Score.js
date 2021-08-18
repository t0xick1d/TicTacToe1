import React from 'react'
import s from './styleScore.module.css'

const Score = (props) => {
    
    return (
        <div className={s.position}>
            <h3>Score</h3>
            <h4 onClick={()=>{props.setActive(true)}}>{props.firstPlayer}: {props.firstPlayerWin}</h4>
            <h4 onClick={()=>{props.setActive(true)}}>{props.secondPlayer}: {props.secondPlayerWin}</h4>
        </div>
    )
}

export default Score;