import { Link } from "react-router-dom"
export default function Home () {
    return (
        <div className="container">
            <h2>Създай герой</h2>
            <Link to="Quick">Бърз</Link>
            <Link to="Complex">Сложен</Link>
        </div>
    )
}