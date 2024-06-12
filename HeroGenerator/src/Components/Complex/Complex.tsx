import { useCallback, useEffect, useMemo, useState } from "react"
import "./Complex.css"
import { SubComplex } from "./SubComplex"
import { genderGenerator, originGenerator, societyGenerator } from "../../functions/GeneratorFunc"
import { nameGenerator } from "../../functions/nameGeneratorFunc"
import { Link } from "react-router-dom"
import { narativeStats } from "../../Interfaces/complexHero"
import { age } from "../../Interfaces/QuickHero"
import { AppearanceComplex } from "./SubComplexes/AppearanceComplex"
import { WorldviewComplex } from "./SubComplexes/WorldviewComplex"
import { FamilyNRelationshipComplex } from "./SubComplexes/FamilyNRelationshipComplex"
import { MechStatsComplex } from "./SubComplexes/MechStatsComplex"
import { MechStatNames } from "../../functions/mechStatGenerator"


export function Complex() {
    const [narativeStats, setNarativeStats] = useState<narativeStats>({
        gender: "",
        origin: "",
        society: "",
        name: "",
    })
    const changeNarFunction = useCallback((changedData: any) => {
        setNarativeStats((prev) => {
            return ({ ...prev, ...changedData })
        })
    }, []);


    //outside AppearanceComplex as its needed for other stats as parameter
    const [appearanceStats, setAppearanceStats] = useState({
        age: "" as age,
    })
    const changeAgeFunction = useCallback((changedData: any) => {
        setAppearanceStats(changedData);
    }, [])


    //used for generator in familyNRelations
    const [mechLowHigh, setMechLowHigh] = useState<MechStatNames[]>([]);
    const changeMechLowHigh = useCallback( (changedData: MechStatNames[]) => {
        setMechLowHigh(changedData)
    },[])




    const gender = useMemo(() => { return (narativeStats.gender) }, [narativeStats.gender]);
    const origin = useMemo(() => { return (narativeStats.origin) }, [narativeStats.origin]);
    const age = useMemo(() => { return (appearanceStats.age) }, [appearanceStats.age]);
    const mechStatLowHigh = useMemo(() => { return (mechLowHigh) }, [mechLowHigh]);

    // reset name every time origin changes
    useEffect(() => {
        setNarativeStats((prev) => ({ ...prev, name: "" }))
    }, [narativeStats.origin])

    return (
        <div className="container">
            <Link to="/">Назад</Link>
            <div className="FirstRow">
                <div className="NarativeCont">
                    <h2>Наративни характеристики</h2>
                    <SubComplex name="Пол" stat={{ gender: narativeStats.gender }} changeStatsFunction={changeNarFunction} reRollFunc={genderGenerator} />
                    <SubComplex name="Произход" stat={{ origin: narativeStats.origin }} changeStatsFunction={changeNarFunction} reRollFunc={() => originGenerator("quick")} />
                    <SubComplex name="Общество" stat={{ society: narativeStats.society }} changeStatsFunction={changeNarFunction} reRollFunc={societyGenerator} />
                    <SubComplex name="Имe" stat={{ name: narativeStats.name }} changeStatsFunction={changeNarFunction} reRollFunc={() => nameGenerator(narativeStats.gender as "мъж" | "жена", narativeStats.origin, age)} />
                </div>

                <AppearanceComplex age={age} gender={gender} origin={origin} changeAgeFunction={changeAgeFunction} />
            </div>

            <WorldviewComplex />

            <MechStatsComplex changeMechLowHigh={changeMechLowHigh} />

            <FamilyNRelationshipComplex age={age} mechLowHigh={mechStatLowHigh} />
        </div>
    )
}