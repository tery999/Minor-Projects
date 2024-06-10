import React, { useEffect } from "react";

export interface prop {
    name: any,
    stat: any,
    changeStatsFunction: (changedData: any) => void,
    resetStatsOrigin?: () => void,
    reRollFunc: any
}

export function SubComplexFunc(props: prop) {
    // debugger;
    
    const name = props.name;
    const stat = props.stat
    const [keyValue]: [string, string][] = Object.entries(stat);
    const key = keyValue[0];
    const value = keyValue[1]
    const changeStatsFunction = props.changeStatsFunction;
    const resetStatsOrigin = props.resetStatsOrigin
    const combinedFunctions = () => {
        changeStatsFunction({ [key]: props.reRollFunc(), name: "" });
        if (resetStatsOrigin) {
            resetStatsOrigin( )
        }
    }

    // console.log("CHECK RERENDERING");
    // console.log("RE-RENDERING IN", key);

    return (
        <div>
            <p>{name}: {value} </p>
            {(key === "origin" || key === "gender") &&
                <button onClick={() => combinedFunctions()}>BUT</button>
            }

            {(key !== "origin" && key !== "gender") &&
                <button onClick={() => changeStatsFunction({ [key]: props.reRollFunc()})}>but</button>
            }
        </div>
    )
}


export const SubComplex = React.memo(SubComplexFunc);