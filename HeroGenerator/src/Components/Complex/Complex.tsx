import { useCallback, useMemo, useState } from "react"
import "./Complex.css"
import { SubComplex } from "./SubComplex"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { ageGenerator, bodyTypesGenerator, colorGenerator, eyesGenerator, featuresGenerator, hairGenerator } from "../../functions/appearanceGenerator"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { Link } from "react-router-dom"
import { appearanceStats, narativeStats } from "../../Interfaces/complexHero"
import { age, worldView } from "../../Interfaces/QuickHero"
import { calling, character } from "../../InformationObjects/worldView"
import { AppearanceComplex } from "./SubComplexes/AppearanceComplex"
import { aimsGenerator, callingGenerator, characterGenerator, concernsGenerator } from "../../functions/worldViewGenerator"
import { WorldviewComplex } from "./SubComplexes/WorldviewComplex"


export function Complex() {
    const [narativeStats, setNarativeStats] = useState<narativeStats>({
        gender: "",
        origin: "",
        society: "",
        name: "",
    })

    const [appearanceStats, setAppearanceStats] = useState({
        age:"" as age,
    })

    const changeNarFunction = useCallback((changedData: any) => {
        setNarativeStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);

    const changeAgeFunction = useCallback((changedData: any) => {
        debugger;
       setAppearanceStats(changedData);
    }, [])

    const gender = useMemo( ()=> {return (narativeStats.gender) },[narativeStats.gender]);
    const origin = useMemo( ()=> {return (narativeStats.origin) },[narativeStats.origin]);
    const age = useMemo( ()=> {return (appearanceStats.age) },[appearanceStats.age]);

    return (
        <div className="container">
            <Link to="/">Назад</Link>
            <div className="NarativeCont">
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={{gender:narativeStats.gender}} changeStatsFunction={changeNarFunction} reRollFunc={genderGenerator} />
                <SubComplex name="Произход" stat={{origin:narativeStats.origin}} changeStatsFunction={changeNarFunction} reRollFunc={()=>originGenerator("quick")} />
                <SubComplex name="Общество" stat={{society:narativeStats.society}} changeStatsFunction={changeNarFunction} reRollFunc={societyGenerator} />
                <SubComplex name="Имe" stat={{name: narativeStats.name}} changeStatsFunction={changeNarFunction} reRollFunc={() => nameGenerator(narativeStats.gender as "мъж" | "жена", narativeStats.origin, age)} />
            </div>

            <AppearanceComplex age={age} gender={gender} origin={origin}  changeAgeFunction={changeAgeFunction}/>

            <WorldviewComplex/>
        </div>
    )
}