import { origin } from "../Interfaces/QuickHero";

export function genderGenerator(): "мъж" | "жена" {
    ;
    const diceRoll = Math.floor(Math.random() * 101);
    if (diceRoll <= 50) {
        const gender = "мъж"
        return gender;
    } else {
        const gender = "жена"
        return gender;
    }
}

export function originGenerator(): origin {
    ;
    const diceRoll = Math.floor(Math.random() * 101);
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

    }
    return randomChoice;
}