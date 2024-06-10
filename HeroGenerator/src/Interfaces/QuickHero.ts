import { character } from "../InformationObjects/worldView";

export type origin = "Футарк" | "Огам" | "Сирильско краище" | "Латинае" 
| "Орхонг" | "Хабилеа" | "";

export type society = "племенно" | "феодално" | "индустриално" | ""

export type age = ""| "детство" | "юношество" | "младост" | "зрялост" | "старост"

export type appearance = {
    color: string,
    hair: string,
    eyes: string
}

export type body = {
    height:string,
    shape:string
}

export type aims = "" | "сладко отмъщение"|"преодоляване на страх"|"вечна слава"|"дълбоко просветление"|"велико откритие"|
"благородническа титла"|"вярно обкръжение"|"достоен наследник"|"истинска любов"|"несметни богатства"

export type concerns = "" | "горчива несправедливост"|"изправяне пред страх"|"безславно забвение"|"дълбока заблуда"|"провал в значимо начинание"|
"опетнено име"|"неочаквано предателство"|"недостоен наследник"|"измамна любов"|"крайна немотия"

export type worldView = {
    character: string,
    calling: string,
    aims: aims,
    concerns:concerns
}

export type relationshipStatus = "" |"брак"|"годеж"|"необвързаност"|"развод"|"вдовство"   

export type surrounding = "" | "дворянство" | "духовенство" | "интелигенция" | "простолюдие" | "подземен свят"

export type familyAndRelationships = {
    surrounding: surrounding,
    wealth: string,
    familyReputation: string,
    family: string,
    siblings: string,
    relationshipStatus: relationshipStatus
    ownReputation: string,
    friendship: string,
    enemies: string,
    rumors: string
    difficultiesAndAchievements: string

}

export type mechanicStats = {
    strength: number,
    confidence: number,
    ability: number,
    perception: number
}

export interface QuickHero {
    gender: "мъж" | "жена" | "",
    origin: origin,
    society: society,
    name: string,
    age: age,
    appearance: appearance,
    features: string,
    body: body,
    worldView:worldView,
    familyAndRelationships: familyAndRelationships,
    mechanicalStats:mechanicStats
}

