import React, { useEffect } from "react";

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
    const changeAppFunction = props.changeAgeFunction;

    const combined = () => {
        debugger;
        changeStatsFunction(({ [key]: props.reRollFunc() }))
        if (changeAppFunction) {
            changeAppFunction({[key]: props.reRollFunc()});
        }
    }

    console.log("CHECK RERENDERING");
    // console.log("RE-RENDERING IN", key);

    return (
        <>
        <div>
            <p>{name}: {value} </p>
            <button onClick={() => combined()}>but</button>

        </div>
        </>
    )
}


export const SubComplex = React.memo(SubComplexFunc);