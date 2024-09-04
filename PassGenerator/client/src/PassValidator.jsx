import { useState } from "react"
import * as styles from "./PassValidator.module.css"
import { passwordStrengthFunc } from "./functions/passwordStrenghtFunc";

export function PassValidator() {
    const [password, setPassword] = useState("");
    const [ strength, setStrength] = useState(0);

    const checkPassStrength = (e) => {
        const currentStrength = passwordStrengthFunc(e.target.value);
        setStrength(currentStrength);
        setPassword(e.target.value);

    }
    return (
        <div className={styles.DynHolder}>
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