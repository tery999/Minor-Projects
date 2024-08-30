export function passwordStrengthFunc(givenPass) {
    let totalPoints = 0;
    let passLength = givenPass.length;

    //length
    if ( passLength <= 7 ) {
        totalPoints += 1;
    } else if ( passLength <= 13 ) {
        totalPoints += 2;
    } else if ( passLength > 14 ) {
        totalPoints += 4;
    }

    //symbol matching
    const regex = new RegExp(/\W/gm);
    const resultRgx = regex.test(givenPass);
    if ( resultRgx) {
        totalPoints += 2;
    }

    return totalPoints;

}

console.log( passwordStrengthFunc ("ecO-dsdsa1fsdss6") );