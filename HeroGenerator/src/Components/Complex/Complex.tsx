import { useCallback, useState } from "react"
import { QuickHero } from "../../Interfaces/QuickHero"
import { SubComplex } from "./SubComplex"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { ageGenerator } from "../../functions/appearanceGenerator"
import { nameGenerator } from "../../functions/nameGeneratorFunc"

export function Complex() {
    const [heroStats, setHeroStats] = useState<QuickHero>({
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

    const nameOriginConflictRemoval = useCallback( () => {
        debugger;
        setHeroStats((prev) => {
           return ({ ...prev, name: "" })
    })
    },[heroStats.origin])


    return (
        <div className="Container">
            <div>
                <button onClick={nameOriginConflictRemoval}>Testingasd</button>
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={{ gender: heroStats.gender }} changeStatsFunction={changeStatsFunction} reRollFunc={genderGenerator} />
                <SubComplex name="Произход" stat={{ origin: heroStats.origin }} changeStatsFunction={changeStatsFunction} reRollFunc={() => originGenerator("quick")} nameOriginConflictRemoval={nameOriginConflictRemoval} />
                <SubComplex name="Общество" stat={{ society: heroStats.society }} changeStatsFunction={changeStatsFunction} reRollFunc={societyGenerator} />
                <SubComplex name="Възраст" stat={{ age: heroStats.age }} changeStatsFunction={changeStatsFunction} reRollFunc={ageGenerator} />
                <SubComplex name="Имe" stat={{ name: heroStats.name }} changeStatsFunction={changeStatsFunction} reRollFunc={() => nameGenerator(heroStats.gender as "мъж" | "жена", heroStats.origin, heroStats.age)} />

            </div>
        </div>
    )
}