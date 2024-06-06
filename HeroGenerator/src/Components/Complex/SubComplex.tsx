import React from "react";

interface prop {
    name: string,
    stat: any,
    changeStatsFunction: (changedData: any) => void,
    nameOriginConflictRemoval?:()=>void,
    reRollFunc: any
}

export function SubComplexFunc(props: prop) {
    const name = props.name;
    const stat = props.stat
    const [keyValue]: [string, string][] = Object.entries(stat);
    const key = keyValue[0];
    const value = keyValue[1]
    const changeStatsFunction = props.changeStatsFunction;
    const reRollResult = props.reRollFunc();

    console.log("CHECK FOR RERENDERS");
    console.log("COMPONENT IS ABOUT" , key);

    return (
        <div>
            <p>{name}: {value} </p>
            { key==="origin" &&
             <button onClick={() => changeStatsFunction({ [key]: reRollResult , name:""})}>but</button>
            }
            <button onClick={() => changeStatsFunction({ [key]: reRollResult })}>but</button>
        </div>
    )
}

export const SubComplex = React.memo(SubComplexFunc);