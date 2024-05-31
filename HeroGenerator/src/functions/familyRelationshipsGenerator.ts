import { age, familyAndRelationships, relationshipStatus, surrounding } from "../Interfaces/QuickHero";
import { DuhovenstvoComb, DvoryanstvoComb, IntelektComb, PodzemenComb, ProstolubComb, friendsFoesAllComb } from "../Interfaces/friendSurroundings";
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
        let numberOfSurroundings = Math.ceil(numberOfSurroundingsRoll/2);
        for (let i = 0; i < numberOfSurroundings; i++) {
            let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
            let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
            rolledSurroundings.push(removedSurrounding[0]);
        }

        const numberOfFriendsRoll = diceRollFunction(10);
        const numberOfFriends = Math.ceil((numberOfFriendsRoll/ 2) + 3);

        for (let i = numberOfFriends; i > 0; i--) {
            let surroundingFrRoll = diceRollFunctionZero(rolledSurroundings.length - 1)
            let returnedFriend = friendsFoesCombFunc(rolledSurroundings[surroundingFrRoll]);
            friends += `${returnedFriend},`;
        }

    } else if ( roll >=11 && roll <= 40) {
        friends = "имаш малко, но добри другари, винаги готови охотно да ти се притекат на помощ. ";

        for (let i = 0; i < 3 ; i++) {
            let returnedFriend = friendsFoesCombFunc(surrounding);
            friends += `${returnedFriend},`;
        }
    } else if ( roll >= 41 && roll <=80) {
        friends ="имаш малцина истински приятели. "
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
        friends ="имаш един-единствен другар на света. "
        let returnedFriend = friendsFoesCombFunc(surrounding);
        friends += `${returnedFriend}`;
    }


    return friends;
}

export function foesGenerator(surrounding: surrounding):string {
    let foes = "";
    const roll = diceRollFunction(100);
    const surroundingsInitial: surrounding[] = ["дворянство", "духовенство", "интелигенция", "простолюдие", "подземен свят"];

    if (roll >=1 && roll <= 5) {
        foes = "имаш множество люти врагове в различни среди. "
        let rolledSurroundings: surrounding[] = [];
        for (let i = 0; i < 3; i++) {
            let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
            let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
            rolledSurroundings.push(removedSurrounding[0]);
        }

        const numberOfFoesRoll = diceRollFunction(10);
        const numberOfFoes = Math.ceil((numberOfFoesRoll/ 2) + 3);

        for (let i = numberOfFoes; i > 0; i--) {
            let surroundingFoesRoll = diceRollFunctionZero(rolledSurroundings.length - 1)
            let returnedFoe= friendsFoesCombFunc(rolledSurroundings[surroundingFoesRoll]);
            foes += `${returnedFoe},`;
        }
    } else if ( roll >= 6 && roll <= 20) {
        foes = "имаш малко, но опасни врагове. "

        let rolledSurroundings: surrounding[] = [];
        let numberOfSurroundingsRoll = diceRollFunction(10);
        let numberOfSurroundings = Math.ceil(numberOfSurroundingsRoll/2);
        for (let i = 0; i < numberOfSurroundings; i++) {
            let randomSurroundingIndex = diceRollFunctionZero(surroundingsInitial.length - 1);
            let removedSurrounding = surroundingsInitial.splice(randomSurroundingIndex, 1);
            rolledSurroundings.push(removedSurrounding[0]);
        }

        for (let i = 0; i<numberOfSurroundings; i++) {
            let returnedFoe= friendsFoesCombFunc(rolledSurroundings[i]);
            foes += `${returnedFoe},`
        }

    } else if ( roll >= 21 && roll <= 60) {
        debugger;
        foes = "имаш един-единствен противник, който обаче не е за подценяване. ";
        const surrounding = diceRollFunctionZero(4);

        let rolledSurroundings: surrounding[] = [];
        let removedSurrounding = surroundingsInitial.splice(surrounding, 1);
            rolledSurroundings.push(removedSurrounding[0]);

            let returnedFoe = friendsFoesCombFunc(rolledSurroundings[0]);
            foes += `${returnedFoe}.`
    } else if ( roll >= 61 && roll <= 100) {
        foes = "като по чудо, всъщност нямаш никакви врагове."
    }

    return foes;
}

export function familyAndRelationshipsCombined(age: age,): familyAndRelationships {
    const surrounding: surrounding = surroundingGenerator();
    const wealth = wealthGenerator();
    const familyReputation = familyReputationGenerator();
    const siblings = siblingsGenerator();
    const relationshipStatus = relationshipStatusFunc(age)
    const ownReputation = reputationGenerator(surrounding);
    const family = familyGenerator();
    const friendship = friendshipGenerator(surrounding);
    const foes = foesGenerator(surrounding);


    const familyAndRelationships: familyAndRelationships = {
        surrounding: surrounding,
        wealth: wealth,
        familyReputation: familyReputation,
        family: family,
        siblings: siblings,
        relationshipStatus: relationshipStatus,
        ownReputation: ownReputation,
        friendship: friendship,
        enemies: foes
    }

    return familyAndRelationships;
}


function friendsFoesCombFunc(optionalSurrounding: surrounding = ""): string {
    let personCharacter: friendsFoesAllComb = "";
    const roll = diceRollFunction(100);

    if (optionalSurrounding === "дворянство") {
        let dvorCharacter:DvoryanstvoComb = "";
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
        let duhCharacter:DuhovenstvoComb = "";
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
        let intCharacter:IntelektComb = "";
        switch (true) {
            case roll <= 5:
                intCharacter = "гениален философ" ;
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
        let prostolubCharacter:ProstolubComb = "";
        switch (true) {
            case roll <= 5:
                prostolubCharacter = "заможен търговец" ;
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
        let podzemenCharacter:PodzemenComb = "";
        switch (true) {
            case roll <= 5:
                podzemenCharacter = "опасен разколник" ;
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