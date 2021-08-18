import React from 'react'
import s from './styleBox.module.css'

const Box = ({state,clickHandler}) => {
    

    let array = [0,1,2,3,4,5,6,7,8]

    let setSquare = state.map((e,i) => {
        
        return (
            <div className={s.ttt_grid} onClick={()=>{clickHandler(array[i])}} > {state[i]} </div>
        )
    })

    
        
    return (
        
        <div className = {s.box}>
            {setSquare}
        </div>

    ) 
    
    
}

export default Box;