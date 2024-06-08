import { useCallback, useState } from "react"
import { QuickHero, appearance } from "../../Interfaces/QuickHero"
import { SubComplex } from "./SubComplex"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { ageGenerator, colorGenerator } from "../../functions/appearanceGenerator"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { Link } from "react-router-dom"
import { appearanceStats, narativeStats } from "../../Interfaces/complexHero"


export function Complex() {
    const [narativeStats, setNarativeStats] = useState<narativeStats>({
        gender: "",
        origin: "",
        society: "",
        name: "",
    })

    const [appearanceStats, setAppearanceStatsStats] = useState<appearanceStats>({
        age:"",
        color: "",
        hair:"",
        eyes:"",
        features:"",
        height:"",
        shape:""
    })
    const [heroStats, setHeroStats] = useState<QuickHero>({
        //having a lot of trouble with updating Nested Objects. 
        gender: "мъж",
        origin: "",
        society: "",
        name: "",
        age: "",
        appearance: {
            color: "",
            hair: "",
            eyes: ""
        },
        features: "",
        body: {
            height: "",
            shape: ""
        },
        worldView: {
            character: "",
            calling: "",
            aims: "",
            concerns: ""
        },
        familyAndRelationships: {
            surrounding: "",
            wealth: "",
            familyReputation: "",
            family: "",
            siblings: "",
            relationshipStatus: "",
            ownReputation: "",
            friendship: "",
            enemies: "",
            rumors: "",
            difficultiesAndAchievements: ""
        },
        mechanicalStats: {
            strength: 0,
            confidence: 0,
            ability: 0,
            perception: 0

        }
    })

    const changeNarFunction = useCallback((changedData: any) => {
        debugger;
        setNarativeStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, [])

    return (
        <div className="Container">
            <Link to="/">Назад</Link>
            <div>
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={{ gender: narativeStats.gender }} changeStatsFunction={changeNarFunction} reRollFunc={genderGenerator} />
                <SubComplex name="Произход" stat={{ origin: narativeStats.origin }} changeStatsFunction={changeNarFunction} reRollFunc={() => originGenerator("quick")} />
                <SubComplex name="Общество" stat={{ society: narativeStats.society }} changeStatsFunction={changeNarFunction} reRollFunc={societyGenerator} />
                <SubComplex name="Имe" stat={{ name: narativeStats.name }} changeStatsFunction={changeNarFunction} reRollFunc={() => nameGenerator(narativeStats.gender as "мъж" | "жена", narativeStats.origin, appearanceStats.age)} />
            </div>
        </div>
    )
}