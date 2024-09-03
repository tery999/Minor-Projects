import * as styles from "./Header.module.css"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className={styles.header}>
            <Link to="/"> Pass-Master</Link>           
        </div>
    )
}