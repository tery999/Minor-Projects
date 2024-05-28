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