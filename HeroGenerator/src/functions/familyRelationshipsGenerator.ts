import { age, familyAndRelationships, relationshipStatus, surrounding } from "../Interfaces/QuickHero";
import { diceRollFunction } from "./utils";

export function surroundingGenerator(): surrounding {
    let surrounding: surrounding = "";
    const roll = diceRollFunction(100);
    switch (true) {
        case roll <= 10:
            surrounding = "дворянство"
            break;

        case roll <= 25:
            surrounding = "духовенство"
            break;

        case roll <= 40:
            surrounding = "интелигенция"
            break;

        case roll <= 80:
            surrounding = "простолюдие"
            break;

        case roll <= 100:
            surrounding = "подземен свят"
            break;
    }

    return surrounding;
}

export function wealthGenerator(): string {
    let wealth = "";
    const roll = diceRollFunction(100);
    switch (true) {
        case roll <= 10:
            wealth = "управляваш владение"
            break;

        case roll <= 50:
            const rollTwo = diceRollFunction(100);
            switch (true) {
                case rollTwo <= 10:
                    wealth = "пищен палат";
                    break;

                case rollTwo <= 30:
                    wealth = "голямо имение";
                    break;

                case rollTwo <= 70:
                    wealth = "скромна, но уютна къща";
                    break;

                case rollTwo <= 100:
                    wealth = "неугледна колиба";
                    break;
            }
            break;

        case roll <= 90:
            wealth = "Нямаш имоти или владения"
            break;

        case roll <= 100:
            wealth = "Тънеш в дългове"
            break;
    }

    return wealth;
}

export function familyReputationGenerator(): string {
    let familyReputation = "";
    const roll = diceRollFunction(100);
    switch (true) {
        case roll <= 10:
            familyReputation = "произхождаш от прочут надлъж и нашир, ревностно почитан род"
            break;

        case roll <= 25:
            familyReputation = "родът ти е уважаван от мнозина"
            break;

        case roll <= 50:
            familyReputation = "почти никой не разпознава името на рода ти"
            break;

        case roll <= 75:
            familyReputation = "произхождаш от незнаен и незабележителен род"
            break;

        case roll <= 90:
            familyReputation = "родът ти е презиран от мнозина"
            break;

        case roll <= 100:
            familyReputation = "родът ти е единодушно мразен почти навсякъде, където стъпиш"
            break;
    }

    return familyReputation;
}

export function siblingsGenerator(): string {
    let siblings: string = "";
    const diceRollPosition = diceRollFunction(100);
    const diceRollSiblingsCount = diceRollFunction(10);

    switch (true) {
        case diceRollPosition <= 25:
            siblings = `първо от ${Math.floor(diceRollSiblingsCount / 2) + 1} деца`;
            break;

        case diceRollPosition <= 50:
            siblings = `второ от ${Math.floor(diceRollSiblingsCount / 2) + 2} деца`;
            break;

        case diceRollPosition <= 70:
            siblings = `трето от ${Math.floor(diceRollSiblingsCount / 2) + 3} деца`;
            break;

        case diceRollPosition <= 90:
            siblings = `четвърто от ${Math.floor(diceRollSiblingsCount / 2) + 4} деца`;
            break;

        case diceRollPosition <= 95:
            siblings = `пето от ${Math.floor(diceRollSiblingsCount / 2) + 5} деца`;
            break;

        case diceRollPosition <= 100:
            siblings = `шесто от ${Math.floor(diceRollSiblingsCount / 2) + 6} деца`;
            break;
    }

    return siblings;
}

export function relationshipStatusFunc(age: age): relationshipStatus {
    let relationshipStatus: relationshipStatus = "";
    const diceRoll = diceRollFunction(100);

    if (age !== "детство" && age !== "юношество") {

        switch (true) {
            case diceRoll <= 20:
                relationshipStatus = "брак"
                break;

            case diceRoll <= 40:
                relationshipStatus = "годеж"
                break;

            case diceRoll <= 70:
                relationshipStatus = "необвързаност"
                break;

            case diceRoll <= 90:
                relationshipStatus = "развод"
                break;

            case diceRoll <= 100:
                relationshipStatus = "вдовство"
                break;
        }
    }

    return relationshipStatus;
}

export function reputationGenerator(surrounding: surrounding): string {
    const roll = diceRollFunction(100);
    let reputation = "";

    if (roll <= 25) {
        switch (true) {
            case surrounding === "дворянство":
                reputation = `дворянство: всички в рода ти очакват
                да браниш достойнството му на всяка цена и
                за теб това е въпрос на чест.`
                break;

            case surrounding === "духовенство":
                reputation = `духовенство: всеотдайната ти вяра
                напълно изключва всякакви отклонения от
                религиозните закони.`
                break;

            case surrounding === "интелигенция":
                reputation = `интелигенция: просветените ти
                съвременници очакват да блеснеш с
                изумително изобретение, откритие,
                произведение на изкуството или влиятелна
                поредица от писания`
                break;

            case surrounding === "простолюдие":
                reputation = `простолюдие: имаш непреодолим
                дълг да се грижиш за семейството си,
                приятелите и всичките си ближни.`
                break;

            case surrounding === "подземен свят":
                reputation = `подземен свят: съдружниците ти
                разчитат на теб винаги да мислиш с няколко
                хода напред от общите ви врагове.`
                break;
        }

    } else if (roll >= 26 && roll <= 75) {
        reputation = `малцина извън редовното ти
        обкръжение имат повод да те помнят с нещо
        особено, така че към теб няма необичайно
        високи или ниски очаквания`
    } else if ( roll>= 76) {
        switch (true) {
            case surrounding === "дворянство":
                reputation = `дворянство: които благородници не
                ти се присмиват открито в лицето,
                обикновено те сочат зад гърба със
                снизхождение.`
                break;

            case surrounding === "духовенство":
                reputation = `духовенство: нерядко те заплашва
                отлъчване заради подозрения в какви ли не
                мерзки грехове.`
                break;

            case surrounding === "интелигенция":
                reputation = `интелигенция: мнозина завистливи
                хора биха те обвинили в самозванство или
                дори чиста липса на талант.`
                break;

            case surrounding === "простолюдие":
                reputation = `простолюдие: който не страни от теб,
                е свикнал с нехайството и непохватността ти.`
                break;

            case surrounding === "подземен свят":
                reputation = `подземен свят: всичките ти
съратници с удивление се питат как главата
ти все още е на раменете.`
                break;
        }
    }

    return reputation;
}

export function familyAndRelationshipsCombined(age: age,): familyAndRelationships {
    const surrounding: surrounding = surroundingGenerator();
    const wealth = wealthGenerator();
    const familyReputation = familyReputationGenerator();
    const siblings = siblingsGenerator();
    const relationshipStatus = relationshipStatusFunc(age)
    const ownReputation = reputationGenerator(surrounding);


    const familyAndRelationships: familyAndRelationships = {
        surrounding: surrounding,
        wealth: wealth,
        familyReputation: familyReputation,
        // family: string,
        siblings: siblings,
        relationshipStatus: relationshipStatus,
        ownReputation: ownReputation,
        // friendship: string,
        // enemies: string
    }

    return familyAndRelationships;
}