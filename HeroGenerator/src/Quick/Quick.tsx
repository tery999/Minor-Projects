import { useEffect, useState } from "react"
import { QuickHero } from "../Interfaces/QuickHero"
import { genderGenerator, nameGenerator, originGenerator, societyGenerator } from "../functions/GeneratorFunc"

export default function Quick () {
    const [heroStats, setHeroStats] = useState<QuickHero>({
        gender: "",
        origin: "",
        society: "",
        name: ""
    })

    useEffect( ()=> {
        const genderGen = genderGenerator();
        const origin = originGenerator();
        const society = societyGenerator();
        const name = nameGenerator(genderGen, origin)
        setHeroStats( (prev)=> ({...prev, gender: genderGen , origin: origin, society:society, name:name}))
    },[])

    return (
        <div className="container">
            <p> Пол: {heroStats.gender}</p>
            <p> Произход: {heroStats.origin}</p>
            <p> Общество: {heroStats.society}</p>
            <p> Име: {heroStats.name}</p>
        </div>
    )
}