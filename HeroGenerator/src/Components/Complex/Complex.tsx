import { useCallback, useMemo, useState } from "react"
import "./Complex.css"
import { SubComplex } from "./SubComplex"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { ageGenerator, bodyTypesGenerator, colorGenerator, eyesGenerator, featuresGenerator, hairGenerator } from "../../functions/appearanceGenerator"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { Link } from "react-router-dom"
import { appearanceStats, narativeStats } from "../../Interfaces/complexHero"
import { worldView } from "../../Interfaces/QuickHero"
import { calling, character } from "../../InformationObjects/worldView"
import { aimsGenerator, callingGenerator, characterGenerator, concernsGenerator } from "../../functions/worldViewGenerator"


export function Complex() {
    const [narativeStats, setNarativeStats] = useState<narativeStats>({
        gender: "",
        origin: "",
        society: "",
        name: "",
    })

    const [appearanceStats, setAppearanceStats] = useState<appearanceStats>({
        age:"",
        color: "",
        hair:"",
        eyes:"",
        features:"",
        height:"",
        shape:""
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

    const changeAppFunction = useCallback((changedData: any) => {
        setAppearanceStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);

    const changeViewFunction = useCallback((changedData: any) => {
        setWorldviewStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, [])

    //reset all appearance stats if the origin changes
    const resetStatsOrigin = useCallback(() => {
        setAppearanceStats(  { age:"",
            color: "",
            hair:"",
            eyes:"",
            features:"",
            height:"",
            shape:""} )
    }, [])

    // Works, but will have to useMemo every value, and UseCallback every function. There has to be a more efficient way
    // const gender = useMemo( ()=> {return {gender:(narativeStats.gender) }},[narativeStats.gender]);
    // const origin = useMemo( ()=> {return {origin:(narativeStats.origin) }},[narativeStats.origin]);
    // const society = useMemo( ()=> {return {society:(narativeStats.society) }},[narativeStats.society]);
    // const name = useMemo( ()=> {return {name:(narativeStats.name) }},[narativeStats.name]);

    // const genderReroll = useCallback ( ()=> {
    //    return genderGenerator();
    // },[])

    // const originReroll = useCallback ( ()=> {
    //     return originGenerator("quick");
    //  },[])

    return (
        <div className="container">
            <Link to="/">Назад</Link>
            <div className="NarativeCont">
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={{gender:narativeStats.gender}} resetStatsOrigin={resetStatsOrigin} changeStatsFunction={changeNarFunction} reRollFunc={genderGenerator} />
                <SubComplex name="Произход" stat={{origin:narativeStats.origin}} resetStatsOrigin={resetStatsOrigin} changeStatsFunction={changeNarFunction} reRollFunc={()=>originGenerator("quick")} />
                <SubComplex name="Общество" stat={{society:narativeStats.society}} changeStatsFunction={changeNarFunction} reRollFunc={societyGenerator} />
                <SubComplex name="Имe" stat={{name: narativeStats.name}} changeStatsFunction={changeNarFunction} reRollFunc={() => nameGenerator(narativeStats.gender as "мъж" | "жена", narativeStats.origin, appearanceStats.age)} />
            </div>

            <div className="AppearanceCont">
                <h2>Външност</h2>
                <SubComplex name="Възраст" stat={{ age: appearanceStats.age }} changeStatsFunction={changeAppFunction} reRollFunc={ageGenerator} />
                <SubComplex name="Тен" stat={{ color: appearanceStats.color }} changeStatsFunction={changeAppFunction} reRollFunc={() => colorGenerator(narativeStats.origin)} />
                <SubComplex name="Коса" stat={{ hair: appearanceStats.hair }} changeStatsFunction={changeAppFunction} reRollFunc={()=> hairGenerator(narativeStats.origin)} />
                <SubComplex name="Белези" stat={{ features: appearanceStats.features }} changeStatsFunction={changeAppFunction} reRollFunc={featuresGenerator} />
                <SubComplex name="Ръст" stat={{ height: appearanceStats.height }} changeStatsFunction={changeAppFunction} reRollFunc={() => bodyTypesGenerator(narativeStats.gender , appearanceStats.age , narativeStats.origin , "height")} />
                <SubComplex name="Форма" stat={{ shape: appearanceStats.shape }} changeStatsFunction={changeAppFunction} reRollFunc={() => bodyTypesGenerator(narativeStats.gender , appearanceStats.age , narativeStats.origin , "shape")} />
            </div>

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