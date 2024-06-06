interface prop {
    name:string,
    stat:any,
    changeStatsFunction:(changedData:any)=>void,
    reRollFunc:any
}

export function SubComplex(props:prop) {
    debugger;
    const name = props.name;
    const stat = props.stat
    const [keyValue]:[string,string][] = Object.entries(stat);
    const key = keyValue[0];
    const value = keyValue[1]
    const changeStatsFunction = props.changeStatsFunction;
    const reRollResult = props.reRollFunc();

    return (
        <>
         <p>{name}: {value} </p>
         <button onClick={()=>changeStatsFunction({[key]: reRollResult})}>but</button>
        </>
    )
}