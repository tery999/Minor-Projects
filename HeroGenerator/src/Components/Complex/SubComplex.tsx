import React from "react";
import dice from "../../../public/441965163_472462378601661_2030822002986090823_n.png"


export interface prop {
    name: any,
    stat: any,
    changeStatsFunction: (changedData: any) => void,
    changeAgeFunction?:(changedAge:any)=>void,
    reRollFunc: any
}

export function SubComplexFunc(props: prop) {
    debugger;

    const name = props.name;
    const stat = props.stat
    const [keyValue]: [string, string][] = Object.entries(stat);
    const key = keyValue[0];
    const value = keyValue[1]
    const changeStatsFunction = props.changeStatsFunction;
    const changeAgeFunction = props.changeAgeFunction;

    const combined = () => {
        // change stats in appearance complex if it isnt about age
        if (key !=="age") {
            changeStatsFunction(({ [key]: props.reRollFunc() }))
        }
        // change ONLY age state in Complex comp, as it is used as parameter in other Generator functions
        if (changeAgeFunction) {
            changeAgeFunction({[key]: props.reRollFunc()});
        }
    }

    // console.log("CHECK RERENDERING");
    // console.log("IN", key)

    return (
        <>
        <div className="DivHolderStat">
        <img className="diceLogo" src={dice} alt="" onClick={combined}/>
            <p>{name}: {value} </p>

        </div>
        </>
    )
}


export const SubComplex = React.memo(SubComplexFunc);