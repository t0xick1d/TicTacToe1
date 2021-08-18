import React from 'react'
import './styleModal.css'

const Modal = ({active,setActive, setPlayers}) => {


    let nameElementF= React.createRef();
    let nameElementS= React.createRef();

    const dispatch = () => {
        let nameF= nameElementF.current.value;
        let nameS= nameElementS.current.value;
        setPlayers({firstP: nameF,secondP: nameS})
        setActive(false)

    }
   
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}> 
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e)=>{
                e.stopPropagation()
            }}>
               <h3>Set Name</h3> 
               <h5>First Player</h5>
               <input  ref={nameElementF}/>
               <h5 >Second Player</h5>
               <input ref={nameElementS}/>
               <div>
                  <button onClick={() => {dispatch()}}>Set name players</button> 
               </div>              
            </div>
            
        </div>
    )
}

export default Modal;