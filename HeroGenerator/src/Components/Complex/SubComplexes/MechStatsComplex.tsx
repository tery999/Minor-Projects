import { useState } from "react";
import { mechanicStats } from "../../../Interfaces/QuickHero";
import { mechStatGenerator } from "../../../functions/mechStatGenerator";

export function MechStatsComplex() {
    const [mechStats, setMechStats] = useState<mechanicStats>({
        strength: 0,
        confidence: 0,
        ability: 0,
        perception: 0
    })

    const rollStats = () => {
        const mechSt = mechStatGenerator();
        setMechStats(mechSt);
    }

    return (
        <div>
            <h2>Механични измерения</h2>
            <button onClick={rollStats}>buttontest</button>
            <p> Крепкост: {mechStats.strength}</p>
            <p> Увереност: {mechStats.confidence}</p>
            <p> Способност: {mechStats.ability}</p>
            <p> Възприятие: {mechStats.perception}</p>
        </div>
    )
}