import { useState } from "react"
import { QuickHero } from "../../Interfaces/QuickHero"
import { SubComplex } from "./SubComplex"

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

    const changeStatsFunction = (changedData: any) => {
        setHeroStats((prev) => {
            return ({ ...prev, changedData })
        })
    }

    return (
        <div className="Container">
            <div>
                <h2>Наративни характеристики</h2>
                <SubComplex name="Пол" stat={heroStats.gender} changeStatsFunction={changeStatsFunction}/>
                <p> Пол: {heroStats.gender}</p>
                <p> Произход: {heroStats.origin}</p>
                <p> Общество: {heroStats.society}</p>
                <p> Име: {heroStats.name}</p>
            </div>
        </div>
    )
}