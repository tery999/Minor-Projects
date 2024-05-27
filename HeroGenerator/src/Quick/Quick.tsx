import { useEffect, useState } from "react"
import { QuickHero } from "../Interfaces/QuickHero"
import { Link } from "react-router-dom"
import { genderGenerator, originGenerator, societyGenerator } from "../functions/GeneratorFunc"
import { nameGenerator } from "../functions/nameGeneratorFunc"
import { ageGenerator, appearanceGeneratorFunc } from "../functions/appearanceGenerator"

export default function Quick() {
    const [heroStats, setHeroStats] = useState<QuickHero>({
        gender: "",
        origin: "",
        society: "",
        name: "",
        age: "",
        appearance: {
            color: "",
            hair: "",
            eyes: ""
        }
    })

    useEffect(() => {
        const genderGen = genderGenerator();
        const origin = originGenerator("quick");
        // const genderGen = "мъж";
        // const origin = "Футарк";
        const society = societyGenerator();
        const name = nameGenerator(genderGen, origin)
        const age = ageGenerator();
        const appearance = appearanceGeneratorFunc(origin);
        setHeroStats((prev) => ({ ...prev, gender: genderGen, origin: origin, 
            society: society, name: name , age:age, appearance:appearance}))
    }, [])

    return (
        <div className="container">
            <Link to="/">Назад</Link>
            <div>
                <h2>Наративни характеристики</h2>
                <p> Пол: {heroStats.gender}</p>
                <p> Произход: {heroStats.origin}</p>
                <p> Общество: {heroStats.society}</p>
                <p> Име: {heroStats.name}</p>
            </div>
            <div>
            <h2>Външност</h2>
            <p> Възраст: {heroStats.age}</p>
            <p> Тен: {heroStats.appearance.color}</p>
            <p> Коса: {heroStats.appearance.hair}</p>
            <p> Очи: {heroStats.appearance.eyes}</p>
            </div>
        </div>
    )
}