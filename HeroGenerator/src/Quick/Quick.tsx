import { useEffect, useState } from "react"
import { QuickHero } from "../Interfaces/QuickHero"
import { genderGenerator, originGenerator, societyGenerator } from "../functions/GeneratorFunc"

export default function Quick () {
    const [heroStats, setHeroStats] = useState<QuickHero>({
        gender: "",
        origin: "",
        society: ""
    })

    useEffect( ()=> {
        const genderGen = genderGenerator();
        const origin = originGenerator();
        const society = societyGenerator();
        setHeroStats( (prev)=> ({...prev, gender: genderGen , origin: origin, society:society}))
    },[])

    return (
        <div className="container">
            <p> Пол: {heroStats.gender}</p>
            <p> Произход: {heroStats.origin}</p>
            <p> Общество: {heroStats.society}</p>
        </div>
    )
}