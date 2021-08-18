import React, {useState} from 'react'
import s from './App.module.css';
import Box from './Component/Box';
import Score from './Component/Score';
import Modal from './Component/Modal'

function App() {

  const [player, setPlayer] = useState({firstP: '',secondP:''})
  const [countWin, setWins] = useState({firstP: 0,secondP: 0})
  const [active, setActive] = useState(true)
  const [state, setState] = useState({squares: Array(9).fill(null),count: 0})
  const [ifSomebodywin, setIfSomebodywin] = useState({name:null, active:false})

  let combWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const isWinner = () =>{
    let s = (state.count % 2 === 0)? 'X' :'O';

    for(let i=0; i < 8; i++){

      let line = combWinner[i];

      if(
          state.squares[line[0]]===s && 
          state.squares[line[1]]===s && 
          state.squares[line[2]]===s) {

            
            
            s === 'X' ? setWins({firstP: countWin.firstP+1,secondP: countWin.secondP}):setWins({firstP: countWin.firstP,secondP: countWin.secondP + 1})
            
            setIfSomebodywin({name: s + ' WINER!!!!', active:true})
            
            setTimeout(()=>{

                setState({squares : Array(9).fill(null),count : 0})
                setIfSomebodywin({name: null, active:false})

                
            },3000)
          } 

          let sss = state.squares.indexOf(null)
          
          if (sss === -1){

            setIfSomebodywin({name: 'Nobody Won', active:true})

            setIfSomebodywin({name: 'Nobody Won', active:true})

            setTimeout(()=>{

            setState({squares : Array(9).fill(null),count : 0})
            setIfSomebodywin({name: null, active:false})

    
            },3000)

          }
    }
  }

  const clickHandler = (event) => {

    if(state.squares[event] === null){
      
        
      state.squares[event] = (state.count % 2 === 0) ? 'X' :'O';
      setState({squares: state.squares,count: state.count + 1})
      
      isWinner();
         
    } else if (state.squares[event] !== null) {
      
      (alert('ERROR'))
      
    } 
  } 
  


  return (
    <div className={s.App_header}>
      <header >
        <h1 className={s.title}>TicTacToe</h1>
          <Modal active={active} setActive={setActive} setPlayers={setPlayer}/>
          {ifSomebodywin.active ? <div>{ifSomebodywin.name}</div>: null}
          <Box clickHandler = {clickHandler} state = {state.squares}/>
          <Score firstPlayer = {player.firstP} secondPlayer={player.secondP} firstPlayerWin={countWin.firstP} secondPlayerWin={countWin.secondP} setActive={setActive}/>
      </header>
    </div>
  );
}

export default App;
