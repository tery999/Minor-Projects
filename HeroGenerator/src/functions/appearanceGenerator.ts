import { features } from "../InformationObjects/features";
import { age, appearance, body, origin } from "../Interfaces/QuickHero";

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
// single - for returning only height or shape in the complex component
export function bodyTypesGenerator(gender: "мъж" | "жена" | "", age: age, origin: origin, 
    single:"height"|"shape"|"" = ""): body|string {
        debugger;
    let height: number = 0;
    let shape: number = 0;

    let genderRollHeight = Math.floor(Math.random() * 100) + 1;
    let genderRollShape = Math.floor(Math.random() * 100) + 1;

    if (gender === "мъж") {
        switch (true) {
            case genderRollHeight <= 20:
                height += 4;
                break

            case genderRollHeight >= 21 && genderRollHeight <= 70:
                height += 6;
                break

            case genderRollHeight >= 71:
                height += 7;
                break
        }
        switch (true) {
            case genderRollShape <= 20:
                shape += 4;
                break

            case genderRollShape >= 21 && genderRollShape <= 70:
                shape += 6;
                break

            case genderRollShape >= 71:
                shape += 7;
                break
        }
    } else if (gender === "жена") {
        switch (true) {
            case genderRollHeight <= 20:
                height += 7;
                break

            case genderRollHeight >= 21 && genderRollHeight <= 70:
                height += 4;
                break

            case genderRollHeight >= 71:
                height += 5;
                break
        }
        switch (true) {
            case genderRollShape <= 20:
                shape += 7;
                break

            case genderRollShape >= 21 && genderRollShape <= 70:
                shape += 4;
                break

            case genderRollShape >= 71:
                shape += 5;
                break
        }
    }
    let ageRollHeight = Math.floor(Math.random() * 100) + 1;
    let ageRollShape = Math.floor(Math.random() * 100) + 1;

    if (age === "детство" || "старост") {
        switch (true) {
            case ageRollHeight <= 20:
                height -= 2;
                break

            case ageRollHeight >= 21 && ageRollHeight <= 70:
                height -= 1;
                break

            case ageRollHeight >= 71:
                height += 0;
                break
        }
        switch (true) {
            case ageRollShape <= 20:
                shape -= 2;
                break

            case ageRollShape >= 21 && ageRollShape <= 70:
                shape -= 1;
                break

            case ageRollShape >= 71:
                shape += 0;
                break
        }
    } else if (age === "юношество" || "младост") {
        switch (true) {
            case ageRollHeight <= 20:
                height -= 1;
                break

            case ageRollHeight >= 21 && ageRollHeight <= 70:
                height += 1;
                break

            case ageRollHeight >= 71:
                height += 0;
                break
        }
        switch (true) {
            case ageRollShape <= 20:
                shape -= 1;
                break

            case ageRollShape >= 21 && ageRollShape <= 70:
                shape += 1;
                break

            case ageRollShape >= 71:
                shape += 0;
                break
        }
    } else if (age === "зрялост") {
        switch (true) {
            case ageRollHeight <= 20:
                height += 0;
                break

            case ageRollHeight >= 21 && ageRollHeight <= 70:
                height -= 1;
                break

            case ageRollHeight >= 71:
                height -= 2;
                break
        }
        switch (true) {
            case ageRollShape <= 20:
                shape += 0;
                break

            case ageRollShape >= 21 && ageRollShape <= 70:
                shape -= 1;
                break

            case ageRollShape >= 71:
                shape -= 2;
                break
        }
    }

    let originRollHeight = Math.floor(Math.random() * 100) + 1;
    let originRollShape = Math.floor(Math.random() * 100) + 1;

    if (origin === "Футарк" || "Хабилеа") {
        switch (true) {
            case originRollHeight <= 20:
                height += 2;
                break;

            case originRollHeight >= 21 && originRollHeight <= 50:
                height += 1;
                break;

            case originRollHeight >= 51 && originRollHeight <= 80:
                height -= 1;
                break;

            case originRollHeight >= 81:
                height -= 2;
                break;
        }
        switch (true) {
            case originRollShape <= 20:
                shape += 2;
                break;

            case originRollShape >= 21 && originRollShape <= 50:
                shape += 1;
                break;

            case originRollShape >= 51 && originRollShape <= 80:
                shape -= 1;
                break;

            case originRollShape >= 81:
                shape -= 2;
                break;
        }
    } else if (origin === "Огам") {
        switch (true) {
            case originRollHeight <= 20:
                height -= 1;
                break;

            case originRollHeight >= 21 && originRollHeight <= 70:
                height += 2;
                break;

            case originRollHeight >= 71:
                height += 0;
                break;
        }
        switch (true) {
            case originRollShape <= 20:
                shape += 0;
                break;

            case originRollShape >= 21 && originRollShape <= 70:
                shape += 1;
                break;

            case originRollShape >= 71:
                shape -= 1;
                break;
        }
    } else if (origin === "Сирильско краище") {
        switch (true) {
            case originRollHeight <= 20:
                height -= 2;
                break;

            case originRollHeight >= 21 && originRollHeight <= 70:
                height += 0;
                break;

            case originRollHeight >= 71:
                height += 1;
                break;
        }
        switch (true) {
            case originRollShape <= 20:
                shape += 2;
                break;

            case originRollShape >= 21 && originRollShape <= 70:
                shape += 0;
                break;

            case originRollShape >= 71:
                shape -= 2;
                break;
        }
    } else if (origin === "Латинае") {
        switch (true) {
            case originRollHeight <= 20:
                height -= 2;
                break;

            case originRollHeight >= 21 && originRollHeight <= 70:
                height -= 1;
                break;

            case originRollHeight >= 71:
                height += 1;
                break;
        }
        switch (true) {
            case originRollShape <= 20:
                shape -= 1;
                break;

            case originRollShape >= 21 && originRollShape <= 70:
                shape += 0;
                break;

            case originRollShape >= 71:
                shape += 1;
                break;
        }
    } else if (origin === "Орхонг") {
        switch (true) {
            case originRollHeight <= 20:
                height += 1;
                break;

            case originRollHeight >= 21 && originRollHeight <= 70:
                height -= 1;
                break;

            case originRollHeight >= 71:
                height += 0;
                break;
        }
        switch (true) {
            case originRollShape <= 20:
                shape -= 1;
                break;

            case originRollShape >= 21 && originRollShape <= 70:
                shape += 1;
                break;

            case originRollShape >= 71:
                shape += 0;
                break;
        }
    }

    let heightInfo = "";
    let shapeInfo = "";

    switch (true) {
        case height <= 1:
            heightInfo = "много нисък";
            break;

        case height <= 3:
            heightInfo = "нисък";
            break;

        case height <= 6:
            heightInfo = "среден";
            break;

        case height <= 8:
            heightInfo = "висок";
            break;

        case height <= 10:
            heightInfo = "много висок";
            break;
    }
    switch (true) {
        case shape <= 1:
            shapeInfo = "отпусната";
            break;

        case shape <= 3:
            shapeInfo = "закръглена";
            break;

        case shape <= 6:
            shapeInfo = "нормална";
            break;

        case shape <= 8:
            shapeInfo = "стройна";
            break;

        case shape <= 10:
            shapeInfo = "отлична";
            break;
    }

    if( single === "height") {
        return heightInfo;
    }

    if( single === "shape") {
        return shapeInfo;
    }

    const body: body = {
        height: heightInfo,
        shape: shapeInfo
    }
    return body;
}

//forSubComplex - Individual values

export function colorGenerator(origin: origin) {
    debugger;
    const diceRollColor = Math.floor(Math.random() * 100) + 1;
    let color = "";
    if (origin === "Футарк") {
        switch (true) {
            case diceRollColor <= 25:
                color = "блед"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                color = "румен"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                color = "червендалест"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                color = "златист"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                color = "бронзов"
                break;
        }
    } else if (origin === "Огам") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                color = "блед"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                color = "румен"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                color = "червендалест"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                color = "златист"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                color = "бронзов"
                break;
        }
    } else if (origin === "Сирильско краище") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                color = "блед"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                color = "румен"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                color = "червендалест"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                color = "златист"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                color = "бронзов"
                break;
        }
    } else if (origin === "Латинае") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                color = "маслинен"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                color = "бронзов"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                color = "златист"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                color = "бежов"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                color = "мургав"
                break;
        }
    } else if (origin === "Орхонг") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                color = "бежов"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                color = "златист"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                color = "златист"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                color = "бронзов"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                color = "мургав"
                break;
        }
    } else if (origin === "Хабилеа") {
        // ==== COLOR ========================
        switch (true) {
            case diceRollColor <= 25:
                color = "тъмен"
                break;

            case diceRollColor >= 26 && diceRollColor <= 50:
                color = "мургав"
                break;

            case diceRollColor >= 51 && diceRollColor <= 70:
                color = "бронзов"
                break;

            case diceRollColor >= 71 && diceRollColor <= 90:
                color = "мургав"
                break;

            case diceRollColor >= 91 && diceRollColor <= 100:
                color = "тъмен"
                break;
        }
    }

    return color;
}

export function hairGenerator(origin: origin) {
    const diceRollHair = Math.floor(Math.random() * 100) + 1;
    let hair = "";

    if (origin === "Футарк") {
        switch (true) {
            case diceRollHair <= 25:
                hair = "права, светлоруса"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                hair = "вълниста, тъмноруса"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                hair = "права, рижава"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                hair = "вълниста, рижава"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                hair = "права, кестенява"
                break;
        }
    } else if (origin === "Огам") {
        switch (true) {
            case diceRollHair <= 25:
                hair = "права, светлоруса"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                hair = "права, рижава"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                hair = "вълниста, рижава"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                hair = "права, тъмноруса"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                hair = "права, кестенява"
                break;
        }
    } else if (origin === "Сирильско краище") {
        switch (true) {
            case diceRollHair <= 25:
                hair = "права, тъмноруса"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                hair = "права, кестенява"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                hair = "вълниста, кестенява"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                hair = "вълниста, черна"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                hair = "вълниста, рижава"
                break;
        }
    } else if (origin === "Латинае") {
        switch (true) {
            case diceRollHair <= 25:
                hair = "къдрава, черна"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                hair = "вълниста, черна"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                hair = "вълниста, кестенява"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                hair = "вълниста, тъмноруса"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                hair = "вълниста, рижава"
                break;
        }
    } else if (origin === "Орхонг") {
        switch (true) {
            case diceRollHair <= 25:
                hair = "вълниста, кестенява"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                hair = "права, черна"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                hair = "вълниста, черна"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                hair = "права, кестенява"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                hair = "къдрава, черна"
                break;
        }
    } else if (origin === "Хабилеа") {
        switch (true) {
            case diceRollHair <= 25:
                hair = "къдрава, черна"
                break;

            case diceRollHair >= 26 && diceRollHair <= 50:
                hair = "къдрава, тъмнокестенява"
                break;

            case diceRollHair >= 51 && diceRollHair <= 70:
                hair = "права, черна"
                break;

            case diceRollHair >= 71 && diceRollHair <= 90:
                hair = "права, тъмнокестенява"
                break;

            case diceRollHair >= 91 && diceRollHair <= 100:
                hair = "къдрава, рижава"
                break;
        }
    }

    return hair;
}

export function eyesGenerator(origin: origin) {
    const diceRollEyes = Math.floor(Math.random() * 100) + 1;
    let eyes = "";

    if (origin === "Футарк") {
        switch (true) {
            case diceRollEyes <= 25:
                eyes = "кръгли, сиви"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                eyes = "кръгли, светлосини"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                eyes = "кръгли, тъмносини"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                eyes = "дръпнати, сиви"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                eyes = "дръпнати, черни"
                break;
        }
    } else if (origin === "Огам") {
        switch (true) {
            case diceRollEyes <= 25:
                eyes = "кръгли, сиви"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                eyes = "кръгли, светлосини"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                eyes = "кръгли, зелени"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                eyes = "кръгли, пъстри"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                eyes = "кръгли, кафяви"
                break;
        }
    } else if (origin === "Сирильско краище") {
        switch (true) {
            case diceRollEyes <= 25:
                eyes = "кръгли, тъмносини"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                eyes = "кръгли, пъстри"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                eyes = "кръгли, светлокафяви"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                eyes = "кръгли, тъмнокафяви"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                eyes = "кръгли, черни"
                break;
        }
    } else if (origin === "Латинае") {
        switch (true) {
            case diceRollEyes <= 25:
                eyes = "кръгли, черни"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                eyes = "кръгли, тъмнокафяви"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                eyes = "черни, с бадемова форма"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                eyes = "пъстри, с бадемова форма"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                eyes = "зелени, с бадемова форма"
                break;
        }
    } else if (origin === "Орхонг") {
        switch (true) {
            case diceRollEyes <= 25:
                eyes = "дръпнати, тъмнокафяви"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                eyes = "дръпнати, черни"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                eyes = "черни, с бадемова форма"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                eyes = "дръпнати, пъстри"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                eyes = "пъстри, с бадемова форма"
                break;
        }
    } else if (origin === "Хабилеа") {
        switch (true) {
            case diceRollEyes <= 25:
                eyes = "кръгли, черни"
                break;

            case diceRollEyes >= 26 && diceRollEyes <= 50:
                eyes = "кръгли, тъмнокафяви"
                break;

            case diceRollEyes >= 51 && diceRollEyes <= 70:
                eyes = "кръгли, светлокафяви"
                break;

            case diceRollEyes >= 71 && diceRollEyes <= 90:
                eyes = "тъмнокафяви, с бадемова форма"
                break;

            case diceRollEyes >= 91 && diceRollEyes <= 100:
                eyes = "светлокафяви, с бадемова форма"
                break;
        }
    }

    return eyes;
}