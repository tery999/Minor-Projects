import { age, origin, society } from "./QuickHero"

export interface narativeStats {
    gender: ""|"мъж"|"жена",
    origin:origin,
    society:society,
    name:string
}

export interface appearanceStats {
    age?:age,
    color: string,
    hair:string,
    eyes:string,
    features:string,
    height:string,
    shape:string
}


// appearance: {
//     color: "",
//     hair: "",
//     eyes: ""
// },
// features: "",
// body: {
//     height: "",
//     shape: ""
// },