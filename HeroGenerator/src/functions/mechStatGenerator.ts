import { mechanicStats } from "../Interfaces/QuickHero";
import { rollFiveByTen } from "./utils";

export function mechStatGenerator ():mechanicStats {
    const mechStats:mechanicStats = {
        strength:0,
        confidence:0,
        ability:0,
        perception:0
    }

    mechStats.strength = rollFiveByTen();
    mechStats.confidence = rollFiveByTen();
    mechStats.ability = rollFiveByTen();
    mechStats.perception = rollFiveByTen();

    return mechStats;
}

// need it for value in familyNRelationship
export function mechStatLowHigh (mechStats:mechanicStats) {
    debugger;
    const curStats:mechanicStats = mechStats
    const low = Object.keys(mechStats).reduce((low , v) => curStats[v as keyof mechanicStats] < curStats[low as keyof mechanicStats] ? v : low);
    const high = Object.keys(mechStats).reduce((high, v) => curStats[v as keyof mechanicStats] > curStats[high as keyof mechanicStats] ? v : high);

    return [low as MechStatNames,high as MechStatNames];
}

export type MechStatNames = ""|"strength"|"confidence"|"ability"|"perception";
