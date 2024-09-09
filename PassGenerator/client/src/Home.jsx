import styles from "./App.module.css"
import { Link } from "react-router-dom"
import PassGenerator from "./PassGenerator"

export function Home () {
    return (
        <div className={styles.holder}>
      <Link to="Generate"> <div className={styles.linkBox}> Generate Password </div> </Link>
      <Link to="Check"> <div className={styles.linkBox}> Check Password </div> </Link>

    </div>
    )

}