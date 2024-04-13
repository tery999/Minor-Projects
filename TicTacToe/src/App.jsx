import { useRef, useState } from 'react'
import { combinations } from './combinations';
import styles from "./App.module.css"

function App() {
  const [arr, setArr] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState('X');
  const [gameFinished, setGameFinished] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);
  const turns = useRef(0);

  if (arr.includes("") === false && gameFinished === false) {
    setGameFinished(true);
  }

  if (turns.current >= 5 && gameFinished === false) {
    debugger;
    const previusMoveSymbol = player === "O" ? "X" : "O";
    const results = combinations(arr, previusMoveSymbol);
    if (results === true) {
      setPlayerWon(true);
      setGameFinished(true);
    }
  }

  const clickFunction = (boxNumber) => {
    debugger;
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
    turns.current++;
    console.log("TURNS", turns)
    setArr(curArr);
  }


  const resetGame = () => {
    setArr(Array(9).fill(""));
    turns.current = 0;
    setGameFinished(false);
    setPlayerWon(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.GameHolder}>
        <div className={styles.firstRow}>
          <div onClick={() => clickFunction(0)} className={styles.box}>{arr[0]}</div>
          <div onClick={() => clickFunction(1)} className={styles.box}>{arr[1]}</div>
          <div onClick={() => clickFunction(2)} className={styles.box}>{arr[2]}</div>
        </div>
        <div className='secondRow'>
          <div onClick={() => clickFunction(3)} className={styles.box}>{arr[3]}</div>
          <div onClick={() => clickFunction(4)} className={styles.box}>{arr[4]}</div>
          <div onClick={() => clickFunction(5)} className={styles.box}>{arr[5]}</div>
        </div>
        <div className='thirdRow'>
          <div onClick={() => clickFunction(6)} className={styles.box}>{arr[6]}</div>
          <div onClick={() => clickFunction(7)} className={styles.box}>{arr[7]}</div>
          <div onClick={() => clickFunction(8)} className={styles.box}>{arr[8]}</div>
        </div>
      </div>
      {gameFinished &&
        <h2>Game Finished</h2>
      }
      {playerWon &&
        <h2>Player won</h2>
      }
      <div>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  )

}

export default App
