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
    } else if ( passLength==="Medium") {
        for ( let i = 0 ; i < 12 ; i++) {
          generatedPassword+= letterGenerator();
        }
    } else if ( passLength==="Big") {
      for ( let i = 0 ; i < 20 ; i++) {
        generatedPassword+= letterGenerator();
      }
  }

    setPassword(generatedPassword);
  }
  return (
    <div className={styles.holder}>
      <div className={styles.options}>
        <button className={`${styles.button} ${upperCase ? styles.clicked : ""}`} onClick={()=>setUpperCase(prev => !prev)}> UpperCase</button>
        <button className={`${styles.button} ${numbers ? styles.clicked : ""}`} onClick={()=>setNumbers(prev => !prev)}> Numbers</button>
      </div>
      <div className={styles.lengthOption}>
        <button className={`${styles.button} ${passLength==="Small" ? styles.clicked : ""}`} onClick={()=>setPassLength("Small")}> Small</button>
        <button className={`${styles.button} ${passLength==="Medium" ? styles.clicked : ""}`} onClick={()=>setPassLength("Medium")}> Medium</button>
        <button className={`${styles.button} ${passLength==="Big" ? styles.clicked : ""}`} onClick={()=>setPassLength("Big")}> Big</button>
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
