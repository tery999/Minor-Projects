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

    const [worldviewStats, setWorldviewStats] = useState<worldView>({
        character: "",
        calling: "",
        aims:"",
        concerns: ""
    })

    const changeNarFunction = useCallback((changedData: any) => {
        setNarativeStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);


    const changeViewFunction = useCallback((changedData: any) => {
        setWorldviewStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);

    const changeAgeFunction = useCallback((changedData: any) => {
        debugger;
       setAppearanceStats(changedData);
    }, [])



    //reset all appearance stats if the origin changes
    // const resetStatsOrigin = useCallback(() => {
    //     setAppearanceStats(  { age:"",
    //         color: "",
    //         hair:"",
    //         eyes:"",
    //         features:"",
    //         height:"",
    //         shape:""} )
    // }, [])

    const gender = useMemo( ()=> {return (narativeStats.gender) },[narativeStats.gender]);
    const origin = useMemo( ()=> {return (narativeStats.origin) },[narativeStats.origin]);

    return (
        <div className="container">
            <Link to="/">Назад</Link>
            <div className="NarativeCont">
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={{gender:narativeStats.gender}} changeStatsFunction={changeNarFunction} reRollFunc={genderGenerator} />
                <SubComplex name="Произход" stat={{origin:narativeStats.origin}} changeStatsFunction={changeNarFunction} reRollFunc={()=>originGenerator("quick")} />
                <SubComplex name="Общество" stat={{society:narativeStats.society}} changeStatsFunction={changeNarFunction} reRollFunc={societyGenerator} />
                <SubComplex name="Имe" stat={{name: narativeStats.name}} changeStatsFunction={changeNarFunction} reRollFunc={() => nameGenerator(narativeStats.gender as "мъж" | "жена", narativeStats.origin, appearanceStats.age)} />
            </div>

            <AppearanceComplex gender={gender} origin={origin}  changeAgeFunction={changeAgeFunction}/>

            <div className="WorldviewCont">
                <h2>Мироглед</h2>
                <SubComplex name="Нрав" stat={{ character: worldviewStats.character }} changeStatsFunction={changeViewFunction} reRollFunc={characterGenerator} />
                <SubComplex name="Призвание" stat={{ calling: worldviewStats.calling }} changeStatsFunction={changeViewFunction} reRollFunc={callingGenerator} />
                <SubComplex name="Цели" stat={{ aims: worldviewStats.aims }} changeStatsFunction={changeViewFunction} reRollFunc={aimsGenerator} />
                <SubComplex name="Опасения" stat={{ concerns: worldviewStats.concerns }} changeStatsFunction={changeViewFunction} reRollFunc={concernsGenerator} />
            </div>
        </div>
    )
}