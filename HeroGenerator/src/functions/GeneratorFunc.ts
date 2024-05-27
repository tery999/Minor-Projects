import { FutarkFemale, HabileaFemale, LatinaeFemale, OgamFemale, OrkhongFemale, SirilskoFemale } from "../InformationObjects/namesFemale";
import { FutarkMale, HabileaMale, LatinaeMale, OgamMale, OrkhongMale, SirilskoMale } from "../InformationObjects/namesMale";
import { origin, society } from "../Interfaces/QuickHero";

export function genderGenerator(): "мъж" | "жена" {
    const diceRoll = Math.floor(Math.random() * 101) + 1;
    if (diceRoll <= 50) {
        const gender = "мъж"
        return gender;
    } else {
        const gender = "жена"
        return gender;
    }
}
// options act as pointers, whether or not there is option for the person to 
//pick their own stat , if they are lucky and roll higher than 90
export function originGenerator(option:"quick"|"complex"): origin {
    let diceRoll:number = 0;
    if (option === "quick") {
        diceRoll = Math.floor(Math.random() * 100) + 1;
    } else if (option ==="complex") {
        diceRoll = Math.floor(Math.random() * 90) + 1;
    }
   
    let randomChoice: origin = ""
    switch (true) {
        case (diceRoll <= 15):
            randomChoice = "Футарк";
            break;
        case (diceRoll >= 16 && diceRoll <= 30):
            randomChoice = "Огам";
            break;
        case (diceRoll >= 31 && diceRoll <= 45):
            randomChoice = "Сирильско краище";
            break;
        case (diceRoll >= 46 && diceRoll <= 60):
            randomChoice = "Латинае";
            break;
        case (diceRoll >= 61 && diceRoll <= 75):
            randomChoice = "Орхонг";
            break;
        case (diceRoll >= 76 && diceRoll <= 90):
            randomChoice = "Хабилеа";
            break;
        case (diceRoll >= 91):
            randomChoice = "";
            break;

    }
    return randomChoice;
}

export function societyGenerator(): society {
    const diceRoll = Math.floor(Math.random() * 100) + 1;
    let society: society = "";
    if (diceRoll <= 25) {
        society = "племенно"
    } else if (diceRoll >= 26 && diceRoll <= 75) {
        society = "феодално"
    } else {
        society = "индустриално"
    }
    return society;
}

export function nameGenerator(gender: "мъж" | "жена", origin: origin) {
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
            if (VonChance >= 51) {
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
                fullName = `${name} О${secName.toLowerCase()}`;
            } else {
                fullName = `${name} ъв ${secName}`;
            }
        } else if (origin === "Сирильско краище") {
            name = SirilskoMale[diceRoll];
            secName = SirilskoMale[diceRollSecond]
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
            //LATER NEED FEMALE NAMES TO CREATE FULL NAME
            name = LatinaeMale[diceRoll];
        } else if (origin === "Орхонг") {
            name = OrkhongMale[diceRoll];
        } else {
            name = HabileaMale[diceRoll];
        }
    }
    else if (gender === "жена") {
        if (origin === "Футарк") {
            name = FutarkFemale[diceRoll];
        } else if (origin === "Огам") {
            name = OgamFemale[diceRoll];
        } else if (origin === "Сирильско краище") {
            name = SirilskoFemale[diceRoll];
        } else if (origin === "Латинае") {
            name = LatinaeFemale[diceRoll];
        } else if (origin === "Орхонг") {
            name = OrkhongFemale[diceRoll];
        } else {
            name = HabileaFemale[diceRoll];
        }
    }
    return fullName;
}


