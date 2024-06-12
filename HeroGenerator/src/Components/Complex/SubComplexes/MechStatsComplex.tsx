import { useState } from "react";
import { mechanicStats } from "../../../Interfaces/QuickHero";
import { mechStatGenerator } from "../../../functions/mechStatGenerator";
import dice from "../../../../public/441965163_472462378601661_2030822002986090823_n.png"

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
            <img className="diceLogo" src={dice} alt=""  onClick={rollStats}/>
            <p> Крепкост: {mechStats.strength}</p>
            <p> Увереност: {mechStats.confidence}</p>
            <p> Способност: {mechStats.ability}</p>
            <p> Възприятие: {mechStats.perception}</p>
        </div>
    )
}