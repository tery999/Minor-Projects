import { calling, character } from "../InformationObjects/worldView";
import { aims, concerns } from "../Interfaces/QuickHero";
import { diceRollFunction } from "./utils";

export function characterGenerator(): string {
    const roll = diceRollFunction(50);
    const characterPick = character[roll];
    return characterPick;
}

export function callingGenerator(): string {
    const roll = diceRollFunction(50);
    const callingPick = calling[roll];
    return callingPick;
}

export function aimsGenerator(): aims {
    let aims:aims = "";
    const roll = diceRollFunction(100);

    switch (true) {
        case roll <= 10:
            aims = "сладко отмъщение";
            break;

        case roll <= 20:
            aims = "преодоляване на страх";
            break;

        case roll <= 30:
            aims = "вечна слава";
            break;

        case roll <= 40:
            aims = "дълбоко просветление";
            break;

        case roll <= 50:
            aims = "велико откритие";
            break;

        case roll <= 60:
            aims = "благородническа титла";
            break;

        case roll <= 70:
            aims = "вярно обкръжение";
            break;

        case roll <= 80:
            aims = "достоен наследник";
            break;

        case roll <= 90:
            aims = "истинска любов";
            break;

        case roll <= 100:
            aims = "несметни богатства";
            break;
    }

    return aims;
}

export function concernsGenerator(): concerns {
    let concerns:concerns = "";
    const roll = diceRollFunction(100);

    switch (true) {
        case roll <= 10:
            concerns = "горчива несправедливост";
            break;

        case roll <= 20:
            concerns = "изправяне пред страх";
            break;

        case roll <= 30:
            concerns = "безславно забвение";
            break;

        case roll <= 40:
            concerns = "дълбока заблуда";
            break;

        case roll <= 50:
            concerns = "провал в значимо начинание";
            break;

        case roll <= 60:
            concerns = "опетнено име";
            break;

        case roll <= 70:
            concerns = "неочаквано предателство";
            break;

        case roll <= 80:
            concerns = "недостоен наследник";
            break;

        case roll <= 90:
            concerns = "измамна любов";
            break;

        case roll <= 100:
            concerns = "крайна немотия";
            break;
    }

    return concerns;
}