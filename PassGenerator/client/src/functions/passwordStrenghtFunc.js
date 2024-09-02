export function passwordStrengthFunc(givenPass) {
    // debugger;
    if ( !givenPass) {
        return 0;
    }
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

    //number matching
    const numberN = givenPass.match(/\d/mg);
    if ( numberN ) {
            if ( numberN.length === 1) {
                totalPoints += 1;
            } else if ( numberN.length > 1) {
                totalPoints += 2;
            }
    }

    //upperCase matching
    const regexUpp = new RegExp(/[A-Z]/gm);
    const resultRgxUpp = regexUpp.test(givenPass);
    if ( resultRgxUpp) {
        totalPoints += 1;
    }

    return totalPoints;

}

// console.log( passwordStrengthFunc ("ecO-dsdsa1fsdss6") );