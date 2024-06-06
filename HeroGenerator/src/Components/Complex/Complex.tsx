import { useCallback, useState } from "react"
import { QuickHero, appearance } from "../../Interfaces/QuickHero"
import { SubComplex } from "./SubComplex"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { ageGenerator, colorGenerator } from "../../functions/appearanceGenerator"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { Link } from "react-router-dom"
import { SubComplexAppearance } from "./SubComplexAppearance"

export function Complex() {
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

    const changeStatsFunction = useCallback ( (changedData: any) => {
        debugger;
        setHeroStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    } ,[])

    const changeStatsNestedFunction = useCallback ( (changedData: appearance) => {
        debugger;
        setHeroStats((prev) => {
            let previusApp = prev.appearance;
            prev.appearance = { ...previusApp , ...changedData };
            return ({ ...prev })
        })
    } ,[])

    // const changeStatsNestedFunction = useCallback ( (changedData: any) => {
    //     debugger;
    //     setHeroStats((prev) => {
    //         debugger;
    //         return ({ ...prev, ...changedData })
    //     })
    // } ,[])

        console.log("HERO STATS", heroStats);
    // const nameOriginConflictRemoval = useCallback( () => {
    //     debugger;
    //     setHeroStats((prev) => {
    //        return ({ ...prev, name: "" })
    // })
    // },[heroStats.origin])


    return (
        <div className="Container">
            <Link to="/">Назад</Link>
            <div>
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={{ gender: heroStats.gender }} changeStatsFunction={changeStatsFunction} reRollFunc={genderGenerator} />
                <SubComplex name="Произход" stat={{ origin: heroStats.origin }} changeStatsFunction={changeStatsFunction} reRollFunc={() => originGenerator("quick")}  />
                <SubComplex name="Общество" stat={{ society: heroStats.society }} changeStatsFunction={changeStatsFunction} reRollFunc={societyGenerator} />
                <SubComplex name="Имe" stat={{ name: heroStats.name }} changeStatsFunction={changeStatsFunction} reRollFunc={() => nameGenerator(heroStats.gender as "мъж" | "жена", heroStats.origin, heroStats.age)} />
            </div>
            <div>
            <h2>Външност - НЕ Е ГОТОВО</h2>
            <SubComplex name="Възраст" stat={{ age: heroStats.age }} changeStatsFunction={changeStatsFunction} reRollFunc={ageGenerator} />
            <SubComplexAppearance name="Тен" stat={ {color: heroStats.appearance.color }} changeStatsFunction={changeStatsNestedFunction} reRollFunc={()=>colorGenerator(heroStats.origin)} />
            <SubComplexAppearance name="Коса" stat={{ hair: heroStats.appearance.hair }} changeStatsFunction={changeStatsFunction} reRollFunc={ageGenerator} />
            <SubComplexAppearance name="Очи" stat={{ eyes: heroStats.appearance.eyes }} changeStatsFunction={changeStatsFunction} reRollFunc={ageGenerator} />
            </div>
        </div>
    )
}