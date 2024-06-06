
import { prop } from "./SubComplex";


export function SubComplexAppearance(props: prop) {
    debugger;
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
            <button onClick={() => changeStatsFunction( reRollResult )}>but</button>
        </div>
    )
}