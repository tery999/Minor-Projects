import { age, appearance, origin } from "../Interfaces/QuickHero";

export function ageGenerator(): age {
    let age: age = "";
    const diceRoll = Math.floor(Math.random() * 100) + 1;

    switch (true) {
        case diceRoll <= 10:
            age = "детство";
            break;

        case diceRoll >= 11 && diceRoll <= 20:
            age = "юношество";
            break;

        case diceRoll >= 21 && diceRoll <= 40:
            age = "младост";
            break;

        case diceRoll >= 41 && diceRoll <= 70:
            age = "зрялост";
            break;

        case diceRoll >= 71 && diceRoll <= 100:
            age = "старост";
            break;
    }

    return age;
}

export function appearanceGeneratorFunc(origin:origin):appearance {
    const appearance:appearance = {
        color: "",
        hair: "",
        eyes: ""
    }
    const diceRollColor = Math.floor(Math.random() * 100) + 1;
    const diceRollHair = Math.floor(Math.random() * 100) + 1;
    const diceRollEyes = Math.floor(Math.random() * 100) + 1;
    if ( origin === "Футарк") {
         // ==== COLOR ========================
        switch(true) {
            case diceRollColor <= 25:
                appearance.color = "блед"
                break;

                case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "румен"
                break;
                
                case diceRollColor  >= 51 && diceRollColor <= 70:
                appearance.color = "червендалест"
                break;

                case diceRollColor >= 71 && diceRollColor <= 90:
                appearance.color = "златист"
                break;

                case diceRollColor >= 91 && diceRollColor <= 100:
                appearance.color = "бронзов"
                break;
        }
         // ==== HAIR ========================
        switch(true) {
            case diceRollHair <= 25:
                appearance.hair = "права, светлоруса"
                break;

                case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "вълниста, тъмноруса"
                break;
                
                case diceRollHair  >= 51 && diceRollHair <= 70:
                appearance.hair = "права, рижава"
                break;

                case diceRollHair >= 71 && diceRollHair <= 90:
                appearance.hair = "вълниста, рижава"
                break;

                case diceRollHair >= 91 && diceRollHair <= 100:
                appearance.hair = "права, кестенява"
                break;
        }
        // ==== EYES ========================
        switch(true) {
            case diceRollEyes <= 25:
                appearance.eyes = "кръгли, сиви"
                break;

                case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "кръгли, светлосини"
                break;
                
                case diceRollEyes  >= 51 && diceRollEyes <= 70:
                appearance.eyes = "кръгли, тъмносини"
                break;

                case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "дръпнати, сиви"
                break;

                case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "дръпнати, черни"
                break;
        }
    }

    return appearance;
}