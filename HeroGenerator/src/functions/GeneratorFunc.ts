import { FutarkFemale, HabileaFemale, LatinaeFemale, OgamFemale, OrkhongFemale, SirilskoFemale } from "../InformationObjects/namesFemale";
import { FutarkMale, HabileaMale, LatinaeMale, OgamMale, OrkhongMale, SirilskoMale } from "../InformationObjects/namesMale";
import { origin, society } from "../Interfaces/QuickHero";

export function genderGenerator(): "мъж" | "жена" {
    const diceRoll = Math.floor(Math.random() * 101)+1;
    if (diceRoll <= 50) {
        const gender = "мъж"
        return gender;
    } else {
        const gender = "жена"
        return gender;
    }
}

export function originGenerator(): origin {
    const diceRoll = Math.floor(Math.random() * 101)+1;
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

export function societyGenerator():society {
    const diceRoll = Math.floor(Math.random() * 101)+1;
    let society:society = "";
    if (diceRoll <= 25) {
        society = "племенно"
    } else if (diceRoll >= 26 && diceRoll <=75 ){
        society = "феодално"
    } else {
        society = "индустриално"
    }
    return society;
}

export function nameGenerator(gender:"мъж"|"жена" , origin:origin) {
    const diceRoll = Math.floor(Math.random() * 51)+1;
    let name:string = "";
    if ( gender === "мъж") {
        if (origin === "Футарк") {
            name = FutarkMale[diceRoll];
        } else  if (origin==="Огам") {
            name = OgamMale[diceRoll];
        } else if ( origin==="Сирильско краище") {
            name = SirilskoMale[diceRoll];
        } else if ( origin==="Латинае") {
            name = LatinaeMale[diceRoll];
        } else if (origin==="Орхонг") {
            name = OrkhongMale[diceRoll];
        } else {
            name = HabileaMale[diceRoll];
        }
    }
    else if (gender ==="жена") {
        if (origin === "Футарк") {
            name = FutarkFemale[diceRoll];
        } else  if (origin==="Огам") {
            name = OgamFemale[diceRoll];
        } else if ( origin==="Сирильско краище") {
            name = SirilskoFemale[diceRoll];
        } else if ( origin==="Латинае") {
            name = LatinaeFemale[diceRoll];
        } else if (origin==="Орхонг") {
            name = OrkhongFemale[diceRoll];
        } else {
            name = HabileaFemale[diceRoll];
        }
    }
    return name;
}


