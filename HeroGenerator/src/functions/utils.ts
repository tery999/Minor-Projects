export function diceRollFunction (topNumber:number):number {
    const diceRoll = Math.floor(Math.random() * topNumber) + 1;
    return diceRoll;
}

export function diceRollFunctionZero (topNumber:number):number {
    const diceRoll = Math.floor(Math.random() * (topNumber+1));
    return diceRoll;
}

export function rollFiveByTen():number {
    let diceRoll = 0;
    for (let i = 0; i < 5 ; i ++) {
        let curRow = diceRollFunction(10);
        diceRoll += curRow;
    }

    return diceRoll
}
