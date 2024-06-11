import React, { useCallback, useState } from "react";
import { appearanceStats } from "../../../Interfaces/complexHero";
import { SubComplex } from "../SubComplex";
import { ageGenerator, bodyTypesGenerator, colorGenerator, featuresGenerator, hairGenerator } from "../../../functions/appearanceGenerator";
import {  origin } from "../../../Interfaces/QuickHero";

export function AppearanceComplexFunction(props:any) {
    const gender:"мъж" | "жена" | "" = props.gender;
    const origin:origin = props.origin;
    const changeAgeFunction = props.changeAgeFunction;
    const [appearanceStats, setAppearanceStats] = useState<appearanceStats>({
        age:"",
        color: "",
        hair:"",
        eyes:"",
        features:"",
        height:"",
        shape:""
    })

    const changeAppFunction = useCallback((changedData: any) => {
        setAppearanceStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);

   

    return (
        <div className="AppearanceCont">
                <h2>Външност</h2>
                <SubComplex name="Възраст" stat={{ age: appearanceStats.age }} changeStatsFunction={changeAppFunction} changeAgeFunction={changeAgeFunction} reRollFunc={ageGenerator} />
                <SubComplex name="Тен" stat={{ color: appearanceStats.color }} changeStatsFunction={changeAppFunction} reRollFunc={() => colorGenerator(origin)} />
                <SubComplex name="Коса" stat={{ hair: appearanceStats.hair }} changeStatsFunction={changeAppFunction} reRollFunc={()=> hairGenerator(origin)} />
                <SubComplex name="Белези" stat={{ features: appearanceStats.features }} changeStatsFunction={changeAppFunction} reRollFunc={featuresGenerator} />
                <SubComplex name="Ръст" stat={{ height: appearanceStats.height }} changeStatsFunction={changeAppFunction} reRollFunc={() => bodyTypesGenerator(gender , appearanceStats.age , origin , "height")} />
                <SubComplex name="Форма" stat={{ shape: appearanceStats.shape }} changeStatsFunction={changeAppFunction} reRollFunc={() => bodyTypesGenerator(gender , appearanceStats.age ,origin , "shape")} />
            </div>
    )
}

export const AppearanceComplex = React.memo(AppearanceComplexFunction);