import { useState } from 'react'
import styles from "./App.module.css"

function App() {
  const [arr, setArr] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState('X');
  
  const clickFunction = (boxNumber) => {
    const curArr = [...arr];
    if (curArr[boxNumber].length !== 0) {
      return;
    }
    if (player === "X") {
      curArr[boxNumber] = "X";
      setPlayer("O")
    } else {
      curArr[boxNumber] = "O";
      setPlayer("X")
    }
    setArr( curArr );
  }
  
  return (

    <div className={styles.GameHolder}>
      <div className='firstRow'>
        <div onClick={()=>clickFunction(0)} className={styles.box}>{arr[0]}</div>
        <div onClick={()=>clickFunction(1)} className={styles.box}>{arr[1]}</div>
        <div onClick={()=>clickFunction(2)} className={styles.box}>{arr[2]}</div>
      </div>
      <div className='secondRow'>
        <div onClick={()=>clickFunction(3)} className={styles.box}>{arr[3]}</div>
        <div onClick={()=>clickFunction(4)} className={styles.box}>{arr[4]}</div>
        <div onClick={()=>clickFunction(5)} className={styles.box}>{arr[5]}</div>
      </div>
      <div className='thirdRow'>
        <div onClick={()=>clickFunction(6)} className={styles.box}>{arr[6]}</div>
        <div onClick={()=>clickFunction(7)} className={styles.box}>{arr[7]}</div>
        <div onClick={()=>clickFunction(8)} className={styles.box}>{arr[8]}</div>
      </div>
    </div>
  )

}

export default App
