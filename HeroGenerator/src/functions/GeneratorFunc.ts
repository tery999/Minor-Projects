
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
    if (option === "complex") {
        diceRoll = Math.floor(Math.random() * 100) + 1;
    } else if (option ==="quick") {
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



