import { age, familyAndRelationships, relationshipStatus } from "../Interfaces/QuickHero";
import { diceRollFunction } from "./utils";

export function surroundingGenerator(): string {
    let surrounding = "";
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

export function familyAndRelationshipsCombined(age:age):familyAndRelationships {
    const surrounding = surroundingGenerator();
    const wealth = wealthGenerator();
    const familyReputation = familyReputationGenerator();
    const siblings = siblingsGenerator();
    const relationshipStatus = relationshipStatusFunc(age)


    const familyAndRelationships: familyAndRelationships = {
        surrounding: surrounding,
        wealth: wealth,
        familyReputation: familyReputation,
        // family: string,
        siblings: siblings,
        relationshipStatus: relationshipStatus
        // ownReputation: string,
        // friendship: string,
        // enemies: string
    }

    return familyAndRelationships;
}