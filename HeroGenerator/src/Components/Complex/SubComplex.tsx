interface prop {
    name:string,
    stat:string,
    changeStatsFunction:(changedData:any)=>void
}

export function SubComplex(props:prop) {
    const name = props.name
    const stat = props.stat;
    return (
        <p>{name}: {stat} </p>
    )
}