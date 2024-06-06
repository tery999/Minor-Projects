import React from "react";

export interface prop {
    name: string,
    stat: any,
    changeStatsFunction: (changedData: any) => void,
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

    return (
        <div>
            <p>{name}: {value} </p>
            {(key === "origin" || key === "gender") &&
                <button onClick={() => changeStatsFunction({ [key]: reRollResult, name: "" })}>but</button>
            }

            {(key !== "origin" && key !== "gender") &&
                <button onClick={() => changeStatsFunction({ [key]: reRollResult})}>but</button>
            }
        </div>
    )
}

export const SubComplex = React.memo(SubComplexFunc);