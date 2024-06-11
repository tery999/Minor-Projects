import { Krepkost, Sposobnost, Uverenost, Vazpriyatie } from "../InformationObjects/DifficultiesAchievenemntTypes";
import { age, familyAndRelationships, mechanicStats, relationshipStatus, surrounding } from "../Interfaces/QuickHero";
import { DuhovenstvoComb, DvoryanstvoComb, IntelektComb, PodzemenComb, ProstolubComb, friendsFoesAllComb } from "../Interfaces/friendSurroundings";
import { gossipers, rumors, truthfullnes } from "../Interfaces/rumors";
import { MechStatNames, mechStatLowHigh } from "./mechStatGenerator";
import { diceRollFunction, diceRollFunctionZero } from "./utils";

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
    } else if (roll >= 76) {
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

export function familyGenerator(): string {
    debugger;
    let family = "";
    const roll = diceRollFunction(100);

    if (roll <= 80) {
        const familyRoll = diceRollFunction(100);
        switch (true) {
            case familyRoll <= 30:
                family = "баща и майка.";
                break;

            case familyRoll <= 60:
                family = "само баща.";
                break;

            case familyRoll <= 80:
                family = "само майка.";
                break;

            case familyRoll <= 90:
                family = "баща и мащеха.";
                break;

            case familyRoll <= 100:
                family = "майка и доведен баща.";
                break;
        }

        if (roll >= 51 && roll <= 70) {
            const guardianRoll = diceRollFunction(100);
            switch (true) {
                case guardianRoll <= 20:
                    family += "Настойници - чичо и леля";
                    break;

                case guardianRoll <= 30:
                    family += "Настойник - само чичо";
                    break;

                case guardianRoll <= 40:
                    family += "Настойник - само леля.";
                    break;

                case guardianRoll <= 60:
                    family += "Настойници - дядо и баба.";
                    break;

                case guardianRoll <= 70:
                    family += "Настойник - само дядо";
                    break;

                case guardianRoll <= 80:
                    family += "Настойник - само баба";
                    break;

                case guardianRoll <= 90:
                    family += "наставници без родствена връзка";
                    break;

                case guardianRoll <= 95:
                    family += "наставник без родствена връзка";
                    break;

                case guardianRoll <= 100:
                    family += "наставница без родствена връзка";
                    break;
            }
        } else if (roll >= 71 && roll <= 80) {
            family += "припознато извънбрачно дете."
        }
    } else if (roll >= 81 && roll <= 90) {
        family = "Извънбрачно дете."
        const guardianRoll = diceRollFunction(100);
        switch (true) {
            case guardianRoll <= 20:
                family += "Настойници - чичо и леля";
                break;

            case guardianRoll <= 30:
                family += "Настойник - само чичо";
                break;

            case guardianRoll <= 40:
                family += "Настойник - само леля.";
                break;

            case guardianRoll <= 60:
                family += "Настойници - дядо и баба.";
                break;

            case guardianRoll <= 70:
                family += "Настойник - само дядо";
                break;

            case guardianRoll <= 80:
                family += "Настойник - само баба";
                break;

            case guardianRoll <= 90:
                family += "наставници без родствена връзка";
                break;

            case guardianRoll <= 95:
                family += "наставник без родствена връзка";
                break;

            case guardianRoll <= 100:
                family += "наставница без родствена връзка";
                break;
        }

    } else if (roll >= 91 && roll <= 100) {
        family = "безпризорно дете"
    }

    return family
}

export function friendshipGenerator(surrounding: surrounding): string {
    // debugger;
    let friends = "";
    const roll = diceRollFunction(100);
    const surroundingsInitial: surrounding[] = ["дворянство", "духовенство", "интелигенция", "простолюдие", "подземен свят"];

    if (roll >= 1 && roll <= 10) {
        friends = "имаш множество верни другари в различни среди. ";
        let rolledSurroundings: surrounding[] = [];
        let numberOfSurroundingsRoll = diceRollFunction(10);
        let numberOfSurroundings = Math.ceil(numberOfSurroundingsRoll / 2);
        for (let i = 0; i < numberOfSurroundings; i++) {
            let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
            let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
            rolledSurroundings.push(removedSurrounding[0]);
        }

        const numberOfFriendsRoll = diceRollFunction(10);
        const numberOfFriends = Math.ceil((numberOfFriendsRoll / 2) + 3);

        for (let i = numberOfFriends; i > 0; i--) {
            let surroundingFrRoll = diceRollFunctionZero(rolledSurroundings.length - 1)
            let returnedFriend = friendsFoesCombFunc(rolledSurroundings[surroundingFrRoll]);
            friends += `${returnedFriend},`;
        }

    } else if (roll >= 11 && roll <= 40) {
        friends = "имаш малко, но добри другари, винаги готови охотно да ти се притекат на помощ. ";

        for (let i = 0; i < 3; i++) {
            let returnedFriend = friendsFoesCombFunc(surrounding);
            friends += `${returnedFriend},`;
        }
    } else if (roll >= 41 && roll <= 80) {
        friends = "имаш малцина истински приятели. "
        let rolledSurroundings: surrounding[] = [];
        for (let i = 0; i < 3; i++) {
            let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
            let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
            rolledSurroundings.push(removedSurrounding[0]);
        }

        for (let i = 0; i < 3; i++) {
            let returnedFriend = friendsFoesCombFunc(rolledSurroundings[i]);
            friends += `${returnedFriend},`;
        }
    } else if (roll >= 81) {
        friends = "имаш един-единствен другар на света. "
        let returnedFriend = friendsFoesCombFunc(surrounding);
        friends += `${returnedFriend}`;
    }


    return friends;
}

export function foesGenerator(): string {
    let foes = "";
    const roll = diceRollFunction(100);
    const surroundingsInitial: surrounding[] = ["дворянство", "духовенство", "интелигенция", "простолюдие", "подземен свят"];

    if (roll >= 1 && roll <= 5) {
        foes = "имаш множество люти врагове в различни среди. "
        let rolledSurroundings: surrounding[] = [];
        for (let i = 0; i < 3; i++) {
            let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
            let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
            rolledSurroundings.push(removedSurrounding[0]);
        }

        const numberOfFoesRoll = diceRollFunction(10);
        const numberOfFoes = Math.ceil((numberOfFoesRoll / 2) + 3);

        for (let i = numberOfFoes; i > 0; i--) {
            let surroundingFoesRoll = diceRollFunctionZero(rolledSurroundings.length - 1)
            let returnedFoe = friendsFoesCombFunc(rolledSurroundings[surroundingFoesRoll]);
            foes += `${returnedFoe},`;
        }
    } else if (roll >= 6 && roll <= 20) {
        foes = "имаш малко, но опасни врагове. "
        let rolledSurroundings: surrounding[] = [];
        let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
        let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
        rolledSurroundings.push(removedSurrounding[0]);

        const numberOfFoesRoll = diceRollFunction(10);
        const numberOfFoes = Math.ceil((numberOfFoesRoll / 2));

        for (let i = 0; i < numberOfFoes; i++) {
            let returnedFoe = friendsFoesCombFunc(rolledSurroundings[0]);
            foes += `${returnedFoe},`
        }

    } else if (roll >= 21 && roll <= 60) {
        foes = "имаш един-единствен противник, който обаче не е за подценяване. ";
        const surrounding = diceRollFunctionZero(4);

        let rolledSurroundings: surrounding[] = [];
        let removedSurrounding = surroundingsInitial.splice(surrounding, 1);
        rolledSurroundings.push(removedSurrounding[0]);

        let returnedFoe = friendsFoesCombFunc(rolledSurroundings[0]);
        foes += `${returnedFoe}.`
    } else if (roll >= 61 && roll <= 100) {
        foes = "като по чудо, всъщност нямаш никакви врагове."
    }

    return foes;
}

export function rumorGenerator(): string {
    let rumorsAll = "";
    let gossipers: gossipers = "";
    let rumors: rumors = "";
    let truthfullnes: truthfullnes = "";

    const diceRoll = diceRollFunction(100);

    if (diceRoll <= 60) {
        rumorsAll = "за теб като по чудо не се носят никакви слухове."
        return rumorsAll;
    } else if (diceRoll >= 61 && diceRoll <= 100) {
        let gossipersRoll = diceRollFunction(100);
        let rumorsRoll = diceRollFunction(100);
        let truthfullnesRoll = diceRollFunction(100);
        rumorsAll = "Носи се любопитна мълва по твой адрес. ";
        let numberOfRumors = 1;

        if (diceRoll >= 91 && diceRoll <= 100) {
            rumorsAll = "Зад гърба ти се говорят какви ли не невероятни и небивали истории по твой адрес. "
            numberOfRumors = Math.ceil(diceRollFunction(10) / 2);
        }
        for (let i = 0; i < numberOfRumors; i++) {
            gossipersRoll = diceRollFunction(100);
            rumorsRoll = diceRollFunction(100);
            truthfullnesRoll = diceRollFunction(100);
            switch (true) {
                case gossipersRoll <= 10:
                    gossipers = "Прислужниците на неизвестен дребен благородник дочули мълви, според които";
                    break;

                case gossipersRoll <= 20:
                    gossipers = "Местна кръчмарка научила от пияните си посетители, че";
                    break;

                case gossipersRoll <= 30:
                    gossipers = "Няколко улични хлапета били чути да пеят детински рими, според които";
                    break;

                case gossipersRoll <= 40:
                    gossipers = "По думите на стар местен рибар те е чул да казваш, че";
                    break;

                case gossipersRoll <= 50:
                    gossipers = "Неколцина местни стражи били твърдо убедени, че";
                    break;

                case gossipersRoll <= 60:
                    gossipers = "Някакъв странстващ рицар се представял с твоето име и разправял, че";
                    break;

                case gossipersRoll <= 70:
                    gossipers = "Според родствениците ти";
                    break;

                case gossipersRoll <= 80:
                    gossipers = "Един от чираците в някаква работилница разказал на останалите, че";
                    break;

                case gossipersRoll <= 90:
                    gossipers = "Две пътуващи ясновидки били чути да обсъждат, че";
                    break;

                case gossipersRoll <= 100:
                    gossipers = "Група местни поети и музиканти написали песен, според която";
                    break;

            }

            switch (true) {
                case rumorsRoll <= 10:
                    rumors = "не понасяш сирильци и се присмиваш над смешните им суеверия";
                    break;

                case rumorsRoll <= 20:
                    rumors = "ненавиждаш езичници, независимо откъде са";
                    break;

                case rumorsRoll <= 30:
                    rumors = "понякога разговаряш с привидения";
                    break;

                case rumorsRoll <= 40:
                    rumors = "страниш от латинейци заради прекомерната им набожност";
                    break;

                case rumorsRoll <= 50:
                    rumors = "не харесваш надменните огамци и ги отбягваш при всяка възможност";
                    break;

                case rumorsRoll <= 60:
                    rumors = "нямаш доверие на хабилеанци и не искаш и да имаш за нищо на света";
                    break;

                case rumorsRoll <= 65:
                    rumors = "смяташ всички орхонгци за диваци";
                    break;

                case rumorsRoll <= 70:
                    rumors = "смяташ всички футарки за диваци";
                    break;

                case rumorsRoll <= 80:
                    rumors = "мразиш префърцунените благородници и самодоволните им физиономии";
                    break;

                case rumorsRoll <= 85:
                    rumors = "имаш предразсъдъци към духовници";
                    break;

                case rumorsRoll <= 90:
                    rumors = "ненавиждаш артисти";
                    break;

                case rumorsRoll <= 100:
                    rumors = "познаваш отблизо съмнителни лица и дори бегълци от закона";
                    break;

            }

            switch (true) {
                case truthfullnesRoll <= 25:
                    truthfullnes = "но уви, това са само сплетни и измислици, в които няма и капчица истина."
                    break;

                case truthfullnesRoll <= 75:
                    truthfullnes = "ала това е само отчасти вярно и си има обяснение. Явно има недоразумение."
                    break;

                case truthfullnesRoll <= 100:
                    truthfullnes = "и това е самата истина. Как ли се е разчуло?"
                    break;
            }
            rumorsAll += `${gossipers} ${rumors} ${truthfullnes}`;
        }

    }

    return rumorsAll;

}

export function DiffAndAch(low: MechStatNames, high: MechStatNames): string {
    debugger;
    const lowHighArr: MechStatNames[] = [low, high];
    let DiffAchString = "";

    for (let i = 0; i < 2; i++) {
        let firstRow = diceRollFunction(100);

        if (lowHighArr[i] === "strength" ) {
            let krepkost: Krepkost = "";
            switch (true) {
                case firstRow <= 5:
                    krepkost = "Решаваща победа"
                    break;

                case firstRow <= 20:
                    krepkost = "Надвиване на опасен противник"
                    break;

                case firstRow <= 60:
                    krepkost = "Укрепване на крехко здраве"
                    break;

                case firstRow <= 80:
                    krepkost = "Преживяване на мор"
                    break;

                case firstRow <= 95:
                    krepkost = "Оцеляване след нашествие"
                    break;

                case firstRow <= 100:
                    krepkost = "Дълго пътешествие"
                    break;
            }
            DiffAchString += ` ${krepkost} .`
        } else if (lowHighArr[i] === "confidence") {
            let uverenost: Uverenost = "";
            switch (true) {
                case firstRow <= 5:
                    uverenost = "Надхитряване на противник"
                    break;

                case firstRow <= 20:
                    uverenost = "Отхвърляне на неизгодна спогодба"
                    break;

                case firstRow <= 60:
                    uverenost = "Спечелване на нечие доверие"
                    break;

                case firstRow <= 80:
                    uverenost = "Запазване на вяра въпреки изпитания"
                    break;

                case firstRow <= 95:
                    uverenost = "Приятелството на могъщ владетел"
                    break;

                case firstRow <= 100:
                    uverenost = "Превъзмогване на предателство"
                    break;
            }
            DiffAchString += ` ${uverenost} .`
        } else if (lowHighArr[i] === "ability") {
            let sposobnost: Sposobnost = "";
            switch (true) {
                case firstRow <= 5:
                    sposobnost = "Усвояване на занаят"
                    break;

                case firstRow <= 20:
                    sposobnost = "Придобиване на лечителски опит"
                    break;

                case firstRow <= 60:
                    sposobnost = "Завършване на изтощително обучение"
                    break;

                case firstRow <= 80:
                    sposobnost = "Развиване на талант за произволно изкуство"
                    break;

                case firstRow <= 95:
                    sposobnost = "Спасение от зла беда"
                    break;

                case firstRow <= 100:
                    sposobnost = "Плодороден труд"
                    break;
            }
            DiffAchString += ` ${sposobnost} .`
        } else if (lowHighArr[i] === "perception") {
            let vazpriyatie: Vazpriyatie = "";
            switch (true) {
                case firstRow <= 5:
                    vazpriyatie = "Разтълкуване на поличба"
                    break;

                case firstRow <= 20:
                    vazpriyatie = "Събиране на колекция от ценни писания"
                    break;

                case firstRow <= 60:
                    vazpriyatie = "Постигане на житейска мъдрост"
                    break;

                case firstRow <= 80:
                    vazpriyatie = "Подробно опознаване на природата"
                    break;

                case firstRow <= 95:
                    vazpriyatie = "Наставления от просветен философ"
                    break;

                case firstRow <= 100:
                    vazpriyatie = "Усвояване на тайно учение"
                    break;
            }
            DiffAchString += ` ${vazpriyatie} .`
        }
    }

    return DiffAchString;

}

export function familyAndRelationshipsCombined(age: age, mechStat: mechanicStats): familyAndRelationships {
    const surrounding: surrounding = surroundingGenerator();
    const wealth = wealthGenerator();
    const familyReputation = familyReputationGenerator();
    const siblings = siblingsGenerator();
    const relationshipStatus = relationshipStatusFunc(age)
    const ownReputation = reputationGenerator(surrounding);
    const family = familyGenerator();
    const friendship = friendshipGenerator(surrounding);
    const foes = foesGenerator();
    const rumors = rumorGenerator();
    const [low, high] = mechStatLowHigh(mechStat);
    const difficultiesAndAchievements = DiffAndAch(low, high);



    const familyAndRelationships: familyAndRelationships = {
        surrounding: surrounding,
        wealth: wealth,
        familyReputation: familyReputation,
        family: family,
        siblings: siblings,
        relationshipStatus: relationshipStatus,
        ownReputation: ownReputation,
        friendship: friendship,
        enemies: foes,
        rumors: rumors,
        difficultiesAndAchievements: difficultiesAndAchievements
    }

    return familyAndRelationships;
}


function friendsFoesCombFunc(optionalSurrounding: surrounding = ""): string {
    let personCharacter: friendsFoesAllComb = "";
    const roll = diceRollFunction(100);

    if (optionalSurrounding === "дворянство") {
        let dvorCharacter: DvoryanstvoComb = "";
        switch (true) {
            case roll <= 5:
                dvorCharacter = "могъщ владетел";
                break;

            case roll <= 10:
                dvorCharacter = "високопоставен царедворец";
                break;

            case roll <= 20:
                dvorCharacter = "изтъкнат сановник";
                break;

            case roll <= 30:
                dvorCharacter = "дребен дворянин";
                break;

            case roll <= 50:
                dvorCharacter = "сервилен прислужник";
                break;

            case roll <= 70:
                dvorCharacter = "родолюбив воин";
                break;

            case roll <= 80:
                dvorCharacter = "заслужил военачалник";
                break;

            case roll <= 90:
                dvorCharacter = "безимотен аристократ";
                break;

            case roll <= 95:
                dvorCharacter = "изпаднал земевладелец";
                break;

            case roll <= 100:
                dvorCharacter = "обезнаследен изгнаник";
                break;
        }
        personCharacter = dvorCharacter;
    } else if (optionalSurrounding === "духовенство") {
        let duhCharacter: DuhovenstvoComb = "";
        switch (true) {
            case roll <= 5:
                duhCharacter = "прословут пророк";
                break;

            case roll <= 10:
                duhCharacter = "духовен водач";
                break;

            case roll <= 20:
                duhCharacter = "посветен духовник";
                break;

            case roll <= 30:
                duhCharacter = "фанатичен проповедник";
                break;

            case roll <= 50:
                duhCharacter = "новопостъпил послушник";
                break;

            case roll <= 70:
                duhCharacter = "смирен монах";
                break;

            case roll <= 80:
                duhCharacter = "набожен поклонник";
                break;

            case roll <= 90:
                duhCharacter = "отлъчен еретик";
                break;

            case roll <= 95:
                duhCharacter = "разгулен култист";
                break;

            case roll <= 100:
                duhCharacter = "предан последовател";
                break;
        }
        personCharacter = duhCharacter;
    } else if (optionalSurrounding === "интелигенция") {
        let intCharacter: IntelektComb = "";
        switch (true) {
            case roll <= 5:
                intCharacter = "гениален философ";
                break;

            case roll <= 10:
                intCharacter = "възхваляван трубадур";
                break;

            case roll <= 20:
                intCharacter = "начетен изследовател";
                break;

            case roll <= 30:
                intCharacter = "прочут писател";
                break;

            case roll <= 50:
                intCharacter = "любознателен ученик";
                break;

            case roll <= 70:
                intCharacter = "безизвестен артист";
                break;

            case roll <= 80:
                intCharacter = "смахнат изобретател";
                break;

            case roll <= 90:
                intCharacter = "отегчен писар";
                break;

            case roll <= 95:
                intCharacter = "некадърен поет";
                break;

            case roll <= 100:
                intCharacter = "самоук алхимик";
                break;
        }
        personCharacter = intCharacter;
    } else if (optionalSurrounding === "простолюдие") {
        let prostolubCharacter: ProstolubComb = "";
        switch (true) {
            case roll <= 5:
                prostolubCharacter = "заможен търговец";
                break;

            case roll <= 10:
                prostolubCharacter = "умел занаятчия";
                break;

            case roll <= 20:
                prostolubCharacter = "гостоприемен ханджия";
                break;

            case roll <= 30:
                prostolubCharacter = "скромен рибар";
                break;

            case roll <= 50:
                prostolubCharacter = "отруден земеделец";
                break;

            case roll <= 70:
                prostolubCharacter = "прост пастир";
                break;

            case roll <= 80:
                prostolubCharacter = "хрисим ловец";
                break;

            case roll <= 90:
                prostolubCharacter = "непохватен чирак";
                break;

            case roll <= 95:
                prostolubCharacter = "изстрадал мореплавател";
                break;

            case roll <= 100:
                prostolubCharacter = "несретен скитник";
                break;
        }
        personCharacter = prostolubCharacter;
    } else if (optionalSurrounding === "подземен свят") {
        let podzemenCharacter: PodzemenComb = "";
        switch (true) {
            case roll <= 5:
                podzemenCharacter = "опасен разколник";
                break;

            case roll <= 10:
                podzemenCharacter = "безскрупулен мошеник";
                break;

            case roll <= 20:
                podzemenCharacter = "коварен шарлатанин";
                break;

            case roll <= 30:
                podzemenCharacter = "изпечен контрабандист";
                break;

            case roll <= 50:
                podzemenCharacter = "хитър измамник";
                break;

            case roll <= 70:
                podzemenCharacter = "злонрав главорез";
                break;

            case roll <= 80:
                podzemenCharacter = "опитен обирджия";
                break;

            case roll <= 90:
                podzemenCharacter = "безмилостен пират";
                break;

            case roll <= 95:
                podzemenCharacter = "неуловим крадец";
                break;

            case roll <= 100:
                podzemenCharacter = "махленски скандалджия";
                break;
        }
        personCharacter = podzemenCharacter;
    }

    return personCharacter;
}