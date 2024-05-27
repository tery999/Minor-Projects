import { features } from "../InformationObjects/features";
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

export function appearanceGeneratorFunc(origin: origin): appearance {
    const appearance: appearance = {
        color: "",
        hair: "",
        eyes: ""
    }
    const diceRollColor = Math.floor(Math.random() * 100) + 1;
    const diceRollHair = Math.floor(Math.random() * 100) + 1;
    const diceRollEyes = Math.floor(Math.random() * 100) + 1;
    if (origin === "Футарк") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                appearance.color = "блед"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "румен"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
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
        switch (true) {
            case diceRollHair <= 25:
                appearance.hair = "права, светлоруса"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "вълниста, тъмноруса"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
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
        switch (true) {
            case diceRollEyes <= 25:
                appearance.eyes = "кръгли, сиви"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "кръгли, светлосини"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                appearance.eyes = "кръгли, тъмносини"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "дръпнати, сиви"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "дръпнати, черни"
                break;
        }
    } else if (origin === "Огам") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                appearance.color = "блед"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "румен"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
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
        switch (true) {
            case diceRollHair <= 25:
                appearance.hair = "права, светлоруса"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "права, рижава"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                appearance.hair = "вълниста, рижава"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                appearance.hair = "права, тъмноруса"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                appearance.hair = "права, кестенява"
                break;
        }
        // ==== EYES ========================
        switch (true) {
            case diceRollEyes <= 25:
                appearance.eyes = "кръгли, сиви"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "кръгли, светлосини"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                appearance.eyes = "кръгли, зелени"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "кръгли, пъстри"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "кръгли, кафяви"
                break;
        }
    } else if (origin === "Сирильско краище") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                appearance.color = "блед"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "румен"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
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
        switch (true) {
            case diceRollHair <= 25:
                appearance.hair = "права, тъмноруса"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "права, кестенява"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                appearance.hair = "вълниста, кестенява"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                appearance.hair = "вълниста, черна"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                appearance.hair = "вълниста, рижава"
                break;
        }
        // ==== EYES ========================
        switch (true) {
            case diceRollEyes <= 25:
                appearance.eyes = "кръгли, тъмносини"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "кръгли, пъстри"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                appearance.eyes = "кръгли, светлокафяви"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "кръгли, тъмнокафяви"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "кръгли, черни"
                break;
        }
    } else if (origin === "Латинае") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                appearance.color = "маслинен"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "бронзов"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                appearance.color = "златист"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                appearance.color = "бежов"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                appearance.color = "мургав"
                break;
        }
        // ==== HAIR ========================
        switch (true) {
            case diceRollHair <= 25:
                appearance.hair = "къдрава, черна"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "вълниста, черна"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                appearance.hair = "вълниста, кестенява"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                appearance.hair = "вълниста, тъмноруса"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                appearance.hair = "вълниста, рижава"
                break;
        }
        // ==== EYES ========================
        switch (true) {
            case diceRollEyes <= 25:
                appearance.eyes = "кръгли, черни"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "кръгли, тъмнокафяви"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                appearance.eyes = "черни, с бадемова форма"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "пъстри, с бадемова форма"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "зелени, с бадемова форма"
                break;
        }
    } else if (origin === "Орхонг") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                appearance.color = "бежов"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "златист"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                appearance.color = "златист"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                appearance.color = "бронзов"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                appearance.color = "мургав"
                break;
        }
        // ==== HAIR ========================
        switch (true) {
            case diceRollHair <= 25:
                appearance.hair = "вълниста, кестенява"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "права, черна"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                appearance.hair = "вълниста, черна"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                appearance.hair = "права, кестенява"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                appearance.hair = "къдрава, черна"
                break;
        }
        // ==== EYES ========================
        switch (true) {
            case diceRollEyes <= 25:
                appearance.eyes = "дръпнати, тъмнокафяви"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "дръпнати, черни"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                appearance.eyes = "черни, с бадемова форма"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "дръпнати, пъстри"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "пъстри, с бадемова форма"
                break;
        }
    } else if (origin === "Хабилеа") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                appearance.color = "тъмен"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                appearance.color = "мургав"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                appearance.color = "бронзов"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                appearance.color = "мургав"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                appearance.color = "тъмен"
                break;
        }
        // ==== HAIR ========================
        switch (true) {
            case diceRollHair <= 25:
                appearance.hair = "къдрава, черна"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                appearance.hair = "къдрава, тъмнокестенява"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                appearance.hair = "права, черна"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                appearance.hair = "права, тъмнокестенява"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                appearance.hair = "къдрава, рижава"
                break;
        }
        // ==== EYES ========================
        switch (true) {
            case diceRollEyes <= 25:
                appearance.eyes = "кръгли, черни"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                appearance.eyes = "кръгли, тъмнокафяви"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                appearance.eyes = "кръгли, светлокафяви"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                appearance.eyes = "тъмнокафяви, с бадемова форма"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                appearance.eyes = "светлокафяви, с бадемова форма"
                break;
        }
    }

    return appearance;
}

export function featuresGenerator(): string {
    debugger;
    let diceRoll = Math.floor(Math.random() * 100) + 1;
    let featuresArr: string[] = features;
    let featuresPresentArr: string[] = [];
    let featuresPresentString: string = '';

    if (diceRoll >= 91) {
        let sureRoll = Math.floor(Math.random() * 54) + 1;
        featuresPresentArr.push(featuresArr[sureRoll]);
        while (diceRoll >= 91) {
            let infiniteRoll = Math.floor(Math.random() * 54) + 1;
            featuresPresentArr.push(featuresArr[infiniteRoll]);
            diceRoll = Math.floor(Math.random() * 100) + 1;
        }
        featuresPresentString = featuresPresentArr.join(", ");
        return featuresPresentString;
    }

    if (diceRoll <= 90) {
        if (diceRoll <= 54) {
            featuresPresentString = featuresArr[diceRoll];
        } else {
            featuresPresentString = "без отличителни белези"
        }
    }

    return featuresPresentString;
}