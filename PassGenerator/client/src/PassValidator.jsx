import { useState } from "react"
import * as styles from "./PassValidator.module.css"
import { passwordStrengthFunc } from "./functions/passwordStrenghtFunc";

export function PassValidator() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(0);
    const [strengthClsName , setStrengthClsName] = useState("");

    const checkPassStrength = (e) => {
        const currentStrength = passwordStrengthFunc(e.target.value);
        if ( currentStrength === 0 ) {
            setStrengthClsName("")
        } else if ( currentStrength <= 3 ) {
            setStrengthClsName("weak");
        } else if ( currentStrength <= 6 ) {
            setStrengthClsName("medium");
        } else if ( currentStrength >= 7 ) {
            setStrengthClsName("high");
        }
        setStrength(currentStrength);
        setPassword(e.target.value);

    }

    //{`${styles.button} ${upperCase ? styles.clicked : ""}`}
    return (
        <div className={`${styles.DynHolder} ${styles[strengthClsName]}`}>
            <form >
                <label>Input password:
                    <input type="text" value={password} onChange={checkPassStrength} />
                </label>
            </form>
            <div>
                Strength: {strength}
            </div>
        </div>
    )
}