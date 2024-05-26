export type origin = "Футарк" | "Огам" | "Сирильско краище" | "Латинае" 
| "Орхонг" | "Хабилеа" | "";

export type society = "племенно" | "феодално" | "индустриално" | ""

export interface QuickHero {
    gender: "мъж" | "жена" | "",
    origin: origin,
    society: society,
    name: string,
}
