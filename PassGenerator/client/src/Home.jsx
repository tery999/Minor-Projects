import styles from "./App.module.css"
import { Link } from "react-router-dom"
import PassGenerator from "./PassGenerator"

export function Home () {
    return (
        <div className={styles.holder}>
      <Link to="Generate"> Generate Password</Link>
    </div>
    )

}