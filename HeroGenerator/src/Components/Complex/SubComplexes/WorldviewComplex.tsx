import React, { useCallback, useState } from "react";
import {  worldView } from "../../../Interfaces/QuickHero";
import { SubComplex } from "../SubComplex";
import { aimsGenerator, callingGenerator, characterGenerator, concernsGenerator } from "../../../functions/worldViewGenerator";

export function WorldviewComplexFunction() {
    const [worldviewStats, setWorldviewStats] = useState<worldView>({
        character: "",
        calling: "",
        aims:"",
        concerns: ""
    })

    const changeViewFunction = useCallback((changedData: any) => {
        setWorldviewStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);

   

    return (
        <div className="WorldviewCont">
                <h2>Мироглед</h2>
                <SubComplex name="Нрав" stat={{ character: worldviewStats.character }} changeStatsFunction={changeViewFunction} reRollFunc={characterGenerator} />
                <SubComplex name="Призвание" stat={{ calling: worldviewStats.calling }} changeStatsFunction={changeViewFunction} reRollFunc={callingGenerator} />
                <SubComplex name="Цели" stat={{ aims: worldviewStats.aims }} changeStatsFunction={changeViewFunction} reRollFunc={aimsGenerator} />
                <SubComplex name="Опасения" stat={{ concerns: worldviewStats.concerns }} changeStatsFunction={changeViewFunction} reRollFunc={concernsGenerator} />
            </div>
    )
}

export const WorldviewComplex = React.memo(WorldviewComplexFunction);