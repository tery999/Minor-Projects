export function diceRollFunction (topNumber:number):number {
    const diceRoll = Math.floor(Math.random() * topNumber) + 1;
    return diceRoll;
}

export function diceRollFunctionZero (topNumber:number):number {
    const diceRoll = Math.floor(Math.random() * (topNumber+1));
    return diceRoll;
}

