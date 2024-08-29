import { useState } from "react"
import styles from "./App.module.css"
import { letterGenerator } from "./functions/letterGenerator";
import { usePassword } from "./functions/usePassword";
import { passwordStrength } from 'check-password-strength'

function App() {
  // const [password, setPassword] = useState("");

  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passLength, setPassLength] = useState("Small");
  const [generateClicked, setGenerateClicked] = useState(false);
  //dont know if its better to return the value of the password, or the function itself, thus removing the 
  //generateClicked state
  const [password] = usePassword(upperCase, numbers, symbols, passLength, generateClicked);

  const changeSymbolToggle = () => {
    if (symbols === false) {
      setSymbols(true);
    } else if (symbols === true) {
      setSymbols("simple");
    } else {
      setSymbols(false);
    }
  }

  const passStrngth = passwordStrength(password).value;


  return (
    <div className={styles.holder}>
      <div className={styles.options}>
        <button className={`${styles.button} ${upperCase ? styles.clicked : ""}`} onClick={() => setUpperCase(prev => !prev)}> UpperCase</button>
        <button className={`${styles.button} ${numbers ? styles.clicked : ""}`} onClick={() => setNumbers(prev => !prev)}> Numbers</button>
        { symbols !== "simple" && 
         <button className={`${styles.button} ${symbols ? styles.clicked : ""}`} onClick={changeSymbolToggle}> Symbols</button>
        }
        { symbols === "simple" && 
         <button className={`${styles.button} ${symbols ? styles.clicked : ""}`} onClick={changeSymbolToggle}> @</button>
        }
      </div>
      <div className={styles.lengthOption}>
        <button className={`${styles.button} ${passLength === "Small" ? styles.clicked : ""}`} onClick={() => setPassLength("Small")}> Small</button>
        <button className={`${styles.button} ${passLength === "Medium" ? styles.clicked : ""}`} onClick={() => setPassLength("Medium")}> Medium</button>
        <button className={`${styles.button} ${passLength === "Big" ? styles.clicked : ""}`} onClick={() => setPassLength("Big")}> Big</button>
      </div>
      <div>
        <button className={`${styles.button} ${styles.generate}`} onClick={() => setGenerateClicked(prev => !prev)}>GENERATE</button>
      </div>
      <div>
        password: {password}
      </div>
      <div>
        Strength: {passStrngth}
      </div>
    </div>
  )
}

export default App
