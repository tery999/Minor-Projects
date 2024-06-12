import React, { useCallback, useEffect, useState } from "react";
import { appearanceStats } from "../../../Interfaces/complexHero";
import { SubComplex } from "../SubComplex";
import { ageGenerator, bodyTypesGenerator, colorGenerator, featuresGenerator, hairGenerator } from "../../../functions/appearanceGenerator";
import {  age, origin } from "../../../Interfaces/QuickHero";

export function AppearanceComplexFunction(props:any) {
    debugger;
    const gender:"мъж" | "жена" | "" = props.gender;
    const origin:origin = props.origin;
    const age:age = props.age;
    const changeAgeFunction = props.changeAgeFunction;
    const [appearanceStats, setAppearanceStats] = useState<appearanceStats>({
        age:age,
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

    // if origin , age or gender changes - reset the stats
    useEffect( ()=> {
        setAppearanceStats ( (prev) => {
            return ( { ...prev , color: "",
                hair:"",
                eyes:"",
                features:"",
                height:"",
                shape:""})
           })
    },[origin , age, gender])

   

    return (
        <div className="AppearanceCont">
                <h2>Външност</h2>
                <SubComplex name="Възраст" stat={{ age: age }} changeStatsFunction={changeAppFunction} changeAgeFunction={changeAgeFunction} reRollFunc={ageGenerator} />
                <SubComplex name="Тен" stat={{ color: appearanceStats.color }} changeStatsFunction={changeAppFunction} reRollFunc={() => colorGenerator(origin)} />
                <SubComplex name="Коса" stat={{ hair: appearanceStats.hair }} changeStatsFunction={changeAppFunction} reRollFunc={()=> hairGenerator(origin)} />
                <SubComplex name="Белези" stat={{ features: appearanceStats.features }} changeStatsFunction={changeAppFunction} reRollFunc={featuresGenerator} />
                <SubComplex name="Ръст" stat={{ height: appearanceStats.height }} changeStatsFunction={changeAppFunction} reRollFunc={() => bodyTypesGenerator(gender , age , origin , "height")} />
                <SubComplex name="Форма" stat={{ shape: appearanceStats.shape }} changeStatsFunction={changeAppFunction} reRollFunc={() => bodyTypesGenerator(gender , age ,origin , "shape")} />
            </div>
    )
}

export const AppearanceComplex = React.memo(AppearanceComplexFunction);