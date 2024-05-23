import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [screenValue, setScreenValue] = useState("");
  const [theme, setTheme] = useState("light");

  const buttonNumberClickFunc =(e) => {
    const value = e.currentTarget.value;
    setScreenValue( (prev) => prev+value)
  }

  const clearClickFunc = () => {
    setScreenValue("");
  }

  const calculateClickFunc = () => {
    let result = eval(screenValue);
    if ( result === undefined) {
      setScreenValue("");
    } else {
      setScreenValue(result);
    }
  }

  return (
    <div className={`container ${theme}`}>
      <div className={`screen ${theme}`}>
        {screenValue}
      </div>
      <div className='keyboard'>
        <div className={`numbers ${theme}`}>
          <div className='first row '>
            <button value="1" onClick={buttonNumberClickFunc}>1</button>
            <button value="2" onClick={buttonNumberClickFunc}>2</button>
            <button value="3" onClick={buttonNumberClickFunc}>3</button>
          </div>
          <div className='second row'>
            <button value="4" onClick={buttonNumberClickFunc}>4</button>
            <button value="5" onClick={buttonNumberClickFunc}>5</button>
            <button value="6" onClick={buttonNumberClickFunc}>6</button>
          </div>
          <div className='third row'>
            <button value="7" onClick={buttonNumberClickFunc}>7</button>
            <button value="8" onClick={buttonNumberClickFunc}>8</button>
            <button value="9" onClick={buttonNumberClickFunc}>9</button>
          </div>
          <div className='third row'>
            <button value="0" onClick={buttonNumberClickFunc}>0</button>
            <button value="." onClick={buttonNumberClickFunc}>.</button>
            <button className={`delete ${theme}`} onClick={clearClickFunc}>CE</button>
          </div>
        </div>
        <div className={`operators ${theme}`}>
          <button value="+" onClick={buttonNumberClickFunc}>+</button>
          <button value="-" onClick={buttonNumberClickFunc}>-</button>
          <button value="*" onClick={buttonNumberClickFunc}>*</button>
          <button value="/" onClick={buttonNumberClickFunc}>/</button>
        </div>
      </div>
      <div className='calculate'>
        <button className='theme' onClick={ ()=>setTheme("light")}>L</button>
        <button className= {`calculateBtn ${theme}`} onClick={calculateClickFunc}>Calculate</button>
        <button className='theme'onClick={ ()=>setTheme("dark")} >D</button>
      </div>
    </div>
  )
}

export default App
