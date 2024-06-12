import React, { useCallback, useEffect, useState } from "react";
import { SubComplex } from "../SubComplex";
import {  age, familyAndRelationships, origin } from "../../../Interfaces/QuickHero";
import { DiffAndAch, familyGenerator, familyReputationGenerator, foesGenerator, friendshipGenerator, relationshipStatusFunc, reputationGenerator, rumorGenerator, siblingsGenerator, surroundingGenerator, wealthGenerator } from "../../../functions/familyRelationshipsGenerator";

export function FamilyNRelationshipFunc(props:any) {
    debugger;
    const age:age = props.age;
    const mechLowHigh = props.mechLowHigh;
    const [familyStats, setFamilyStats] = useState<familyAndRelationships>({
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
        
    })

    const changeFamFunction = useCallback((changedData: any) => {
        setFamilyStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);

   useEffect( ()=> {
    setFamilyStats((prev) => {
        return ({ ...prev, relationshipStatus: "" })
    })
   },[age]);

   useEffect( ()=> {
    setFamilyStats((prev) => {
        return ({ ...prev, difficultiesAndAchievements: "" })
    })
   },[mechLowHigh])

   useEffect( ()=> {
    setFamilyStats((prev) => {
        return ({ ...prev, ownReputation: "" , friendship: ""})
    })
   },[familyStats.surrounding])

    return (
        <div className="FamilyCont">
                <h2>Среда и положение</h2>
                <SubComplex name="Среда" stat={{ surrounding: familyStats.surrounding }} changeStatsFunction={changeFamFunction} reRollFunc={surroundingGenerator} />
                <SubComplex name="Положение" stat={{ wealth: familyStats.wealth }} changeStatsFunction={changeFamFunction} reRollFunc={wealthGenerator} />
                <SubComplex name="Род" stat={{ familyReputation: familyStats.familyReputation }} changeStatsFunction={changeFamFunction} reRollFunc={familyReputationGenerator} />
                <SubComplex name="Семейство" stat={{ family: familyStats.family }} changeStatsFunction={changeFamFunction} reRollFunc={familyGenerator} />
                <SubComplex name="Братя и сестри" stat={{ siblings: familyStats.siblings }} changeStatsFunction={changeFamFunction} reRollFunc={siblingsGenerator} />
                <SubComplex name="Семейно положение" stat={{ relationshipStatus: familyStats.relationshipStatus }} changeStatsFunction={changeFamFunction} reRollFunc={() => relationshipStatusFunc(age)} />
                <SubComplex name="Репутация" stat={{ ownReputation: familyStats.ownReputation }} changeStatsFunction={changeFamFunction} reRollFunc={()=>reputationGenerator(familyStats.surrounding)} />
                <SubComplex name="Приятелства" stat={{ friendship: familyStats.friendship }} changeStatsFunction={changeFamFunction}  reRollFunc={()=>friendshipGenerator(familyStats.surrounding)}  />
                <SubComplex name="Вражди" stat={{ enemies: familyStats.enemies }} changeStatsFunction={changeFamFunction} reRollFunc={foesGenerator} />
                <SubComplex name="Слухове" stat={{ rumors: familyStats.rumors }} changeStatsFunction={changeFamFunction} reRollFunc={rumorGenerator} />
                <SubComplex name="Трудности и Постижения" stat={{ difficultiesAndAchievements: familyStats.difficultiesAndAchievements }} changeStatsFunction={changeFamFunction} reRollFunc={()=> DiffAndAch(mechLowHigh[0], mechLowHigh[1])} />
            </div>
    )
}

export const FamilyNRelationshipComplex = React.memo(FamilyNRelationshipFunc);