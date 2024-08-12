import { useState } from "react"
import styles from "./App.module.css"
import { letterGenerator } from "./functions/letterGenerator";

function App() {
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [passLength, setPassLength] = useState("Small");

  const generatePasswordClickFunc = () => {
    let generatedPassword = ""
    if ( passLength === "Small") {
      for ( let i = 0 ; i < 6 ; i++) {
        generatedPassword+= letterGenerator();
      }
    }

    setPassword(generatedPassword);
  }
  return (
    <div className={styles.holder}>
      <div className={styles.options}>
        <button className={styles.button}> UpperCase</button>
        <button className={styles.button}> Numbers</button>
      </div>
      <div className={styles.lengthOption}>
        <button className={styles.button}> Small</button>
        <button className={styles.button}> Medium</button>
        <button className={styles.button}> Big</button>
      </div>
      <div>
        <button onClick={generatePasswordClickFunc} className={`${styles.button} ${styles.generate}`}>GENERATE</button>
      </div>
      <div>
        password: {password} 
      </div>
    </div>
  )
}

export default App
