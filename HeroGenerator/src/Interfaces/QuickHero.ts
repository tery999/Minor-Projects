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

export type worldView = {
    character: string,
    calling: string,
    aims: string,
    concerns:string
}

export type relationshipStatus = "" |"брак"|"годеж"|"необвързаност"|"развод"|"вдовство"   

export type familyAndRelationships = {
    surrounding: string,
    wealth: string,
    familyReputation: string,
    // family: string,
    siblings: string,
    relationshipStatus: relationshipStatus
    // ownReputation: string,
    // friendship: string,
    // enemies: string

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
    familyAndRelationships: familyAndRelationships
}
