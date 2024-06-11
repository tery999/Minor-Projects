import { FutarkFemale, HabileaFemale, LatinaeFemale, OgamFemale, OrkhongFemale, SirilskoFemale } from "../InformationObjects/namesFemale";
import { FutarkMale, HabileaMale, LatinaeMale, OgamMale, OrkhongMale, SirilskoMale } from "../InformationObjects/namesMale";
import { age, origin } from "../Interfaces/QuickHero";

// making separate file as the function became too long

export function nameGenerator(gender: "мъж" | "жена", origin: origin, age:age) {
    debugger;
    //given name
    const diceRoll = Math.floor(Math.random() * 50) + 1;
    //second name
    const diceRollSecond = Math.floor(Math.random() * 50) + 1;
    //third name or clan
    const diceRollThird = Math.floor(Math.random() * 50) + 1;
    let name: string = "";
    let secName: string = "";
    let trdName:string = "";
    let fullName:string = "";
    if (gender === "мъж") {
        if (origin === "Футарк") {
            name = FutarkMale[diceRoll];
            secName = FutarkMale[diceRollSecond] + "сон";
            trdName = FutarkMale[diceRollThird];
            const VonChance = Math.floor(Math.random() * 100) + 1;
            if (VonChance >= 50) {
                fullName = `${name} ${secName} Вон ${trdName}`
                return fullName;
            } else {
                fullName = `${name} ${secName}`;
            }

        } else if (origin === "Огам") {
            name = OgamMale[diceRoll];
            secName = OgamMale[diceRollSecond]
            // Mac, Of, O
            const ogamNameChance = Math.floor(Math.random() * 99) + 1;
            if (ogamNameChance <= 33) {
                fullName = `${name} Мак${secName.toLowerCase()}`;
            } else if ( ogamNameChance >= 34 && ogamNameChance <= 66) {
                fullName = `${name} О'${secName.toLowerCase()}`;
            } else {
                fullName = `${name} ъв ${secName}`;
            }
        } else if (origin === "Сирильско краище") {
            name = SirilskoMale[diceRoll];
            secName = SirilskoMale[diceRollSecond];

            // Marko becomes Markoov, which isnt what we want, this fixes it
            let oChecker = secName.charAt(secName.length-1);
            if (oChecker ==="о") {
                secName = secName.slice(0, -1);
            }
            // -ов, -овски -ович
            const sirilNameChance = Math.floor(Math.random() * 99) + 1;
            if (sirilNameChance <= 33) {
                fullName = `${name} ${secName}ов`;
            } else if ( sirilNameChance >= 34 && sirilNameChance <= 66) {
                fullName = `${name} ${secName}овски`;
            } else {
                fullName = `${name} ${secName}ович`;
            }
        } else if (origin === "Латинае") {
            name = LatinaeMale[diceRoll];
            secName = LatinaeMale[diceRollSecond];
            trdName = LatinaeFemale[diceRollThird];
            let fatherForthRoll = Math.floor(Math.random() * 50) + 1;
            let fatherForthName = LatinaeMale[fatherForthRoll];

            fullName = `${name}-${secName} ${trdName} ${fatherForthName}`;
        } else if (origin === "Орхонг") {
            name = OrkhongMale[diceRoll];
            secName = OrkhongMale[diceRollSecond];

            if (age==="детство") {
                fullName = `${secName} ${name}`;
                return fullName;
            } else {
                trdName = OrkhongMale[diceRollThird];
                fullName = `${secName} ${name} ${trdName}`
            }
        } else {
            name = HabileaMale[diceRoll];
            secName = HabileaMale[diceRollSecond];
            trdName = HabileaMale[diceRollThird];
            let familyNameDiceRoll = Math.floor(Math.random() * 50) + 1;
            let familyName = HabileaMale[familyNameDiceRoll];
            let ibnOrBen = diceRoll <=25 ? "ибн" : "бен";
            fullName = `${name} ${ibnOrBen} ${secName} ${ibnOrBen} ${trdName} ел-${familyName}`;

        }
    }
    else if (gender === "жена") {
        if (origin === "Футарк") {
            name = FutarkFemale[diceRoll];
            secName = FutarkFemale[diceRollSecond] + "здотр";
            trdName = FutarkFemale[diceRollThird];
            const VonChance = Math.floor(Math.random() * 100) + 1;
            if (VonChance >= 50) {
                fullName = `${name} ${secName} Вон ${trdName}`
                return fullName;
            } else {
                fullName = `${name} ${secName}`;
            }
        } else if (origin === "Огам") {
            name = OgamFemale[diceRoll];
            secName = OgamMale[diceRollSecond]
            // Mac, Of, O
            const ogamNameChance = Math.floor(Math.random() * 99) + 1;
            if (ogamNameChance <= 33) {
                fullName = `${name} Мак${secName.toLowerCase()}`;
            } else if ( ogamNameChance >= 34 && ogamNameChance <= 66) {
                fullName = `${name} О'${secName.toLowerCase()}`;
            } else {
                fullName = `${name} ъв ${secName}`;
            }
        } else if (origin === "Сирильско краище") {
            name = SirilskoFemale[diceRoll];
            secName = SirilskoMale[diceRollSecond];

            // Marko becomes Markoov, which isnt what we want, this fixes it
            let oChecker = secName.charAt(secName.length-1);
            if (oChecker ==="о") {
                secName = secName.slice(0, -1);
            }
            // -овна, -овска -ович
            const sirilNameChance = Math.floor(Math.random() * 99) + 1;
            if (sirilNameChance <= 33) {
                fullName = `${name} ${secName}овна`;
            } else if ( sirilNameChance >= 34 && sirilNameChance <= 66) {
                fullName = `${name} ${secName}овска`;
            } else {
                fullName = `${name} ${secName}ович`;
            }
        } else if (origin === "Латинае") {
            name = LatinaeFemale[diceRoll];
            secName = LatinaeFemale[diceRollSecond];
            trdName = LatinaeFemale[diceRollThird];
            let fatherForthRoll = Math.floor(Math.random() * 50) + 1;
            let fatherForthName = LatinaeMale[fatherForthRoll];

            fullName = `${name}-${secName} ${trdName} ${fatherForthName}`;
        } else if (origin === "Орхонг") {
            name = OrkhongFemale[diceRoll];
            secName = OrkhongMale[diceRollSecond];

            if (age==="детство") {
                fullName = `${secName} ${name}`;
                return fullName;
            } else {
                trdName = OrkhongFemale[diceRollThird];
                fullName = `${secName} ${name} ${trdName}`
            }
        } else {
            name = HabileaFemale[diceRoll];
            secName = HabileaMale[diceRollSecond];
            trdName = HabileaMale[diceRollThird];
            let familyNameDiceRoll = Math.floor(Math.random() * 50) + 1;
            let familyName = HabileaMale[familyNameDiceRoll];
            let binOrBat = diceRoll <=25 ? "бин" : "бат";
            fullName = `${name} ${binOrBat} ${secName} ${binOrBat} ${trdName} ел-${familyName}`;
        }
    }
    return fullName;
}