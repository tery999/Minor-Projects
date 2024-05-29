import "./Quick.css"
import { useEffect, useState } from "react"
import { QuickHero } from "../Interfaces/QuickHero"
import { Link } from "react-router-dom"
import { genderGenerator, originGenerator, societyGenerator } from "../functions/GeneratorFunc"
import { nameGenerator } from "../functions/nameGeneratorFunc"
import { ageGenerator, appearanceGeneratorFunc, bodyTypesGenerator, featuresGenerator } from "../functions/appearanceGenerator"
import { aimsGenerator, callingGenerator, characterGenerator, concernsGenerator } from "../functions/worldViewGenerator"
import { familyAndRelationshipsCombined } from "../functions/familyRelationshipsGenerator"

export default function Quick() {
    const [heroStats, setHeroStats] = useState<QuickHero>({
        gender: "",
        origin: "",
        society: "",
        name: "",
        age: "",
        appearance: {
            color: "",
            hair: "",
            eyes: ""
        },
        features: "",
        body: {
            height: "",
            shape: ""
        },
        worldView: {
            character: "",
            calling: "",
            aims: "",
            concerns: ""
        },
        familyAndRelationships: {
            surrounding: "",
            wealth: "",
            familyReputation: "",
            // family: string,
            siblings: "",
            relationshipStatus: "",
            ownReputation: "",
            // friendship: string,
            // enemies: string
        }
    })

    useEffect(() => {
        const genderGen = genderGenerator();
        const origin = originGenerator("quick");
        // const genderGen = "мъж";
        // const origin = "Футарк";
        const society = societyGenerator();
        const age = ageGenerator();
        const name = nameGenerator(genderGen, origin, age);
        const appearance = appearanceGeneratorFunc(origin);
        const features = featuresGenerator();
        const body = bodyTypesGenerator(genderGen, age, origin);
        const character = characterGenerator();
        const calling = callingGenerator();
        const aims = aimsGenerator();
        const concerns = concernsGenerator();
        const familyAndRelationships = familyAndRelationshipsCombined(age)
        setHeroStats((prev) => ({
            ...prev, gender: genderGen, origin: origin,
            society: society, name: name, age: age, appearance: appearance,
            features: features, body: body,
            worldView: {
                character, calling, aims, concerns
            }, familyAndRelationships
        }))
    }, [])

    return (
        <div className="container">
            <Link to="/">Назад</Link>
            <div className="containerInfo">
                <div>
                    <h2>Наративни характеристики</h2>
                    <p> Пол: {heroStats.gender}</p>
                    <p> Произход: {heroStats.origin}</p>
                    <p> Общество: {heroStats.society}</p>
                    <p> Име: {heroStats.name}</p>
                </div>
                <div>
                    <h2>Външност</h2>
                    <p> Възраст: {heroStats.age}</p>
                    <p> Тен: {heroStats.appearance.color}</p>
                    <p> Коса: {heroStats.appearance.hair}</p>
                    <p> Очи: {heroStats.appearance.eyes}</p>
                    <p> Отличителни белези: {heroStats.features}</p>
                    <p>Ръст: {heroStats.body.height}</p>
                    <p>Форма: {heroStats.body.shape}</p>
                </div>
                <div>
                    <h2>Мироглед</h2>
                    <p> Нрав: {heroStats.worldView.character}</p>
                    <p> Призвание: {heroStats.worldView.calling}</p>
                    <p> Цели: {heroStats.worldView.aims}</p>
                    <p> Опасения: {heroStats.worldView.concerns}</p>
                </div>
                <div>
                    <h2>Среда и положение</h2>
                    <p> Среда: {heroStats.familyAndRelationships.surrounding}</p>
                    <p> Положение: {heroStats.familyAndRelationships.wealth}</p>
                    <p> Род: {heroStats.familyAndRelationships.familyReputation}</p>
                    <p> Семейство: НЕ Е ГОТОВО</p>
                    <p> Братя и сестри: {heroStats.familyAndRelationships.siblings}</p>
                    <p> Семейно положение: {heroStats.familyAndRelationships.relationshipStatus}</p>
                    <p> Очаквания и репутация: {heroStats.familyAndRelationships.ownReputation}</p>
                    <p> Приятелства: НЕ Е ГОТОВО</p>
                    <p> Вражди: НЕ Е ГОТОВО</p>
                </div>
            </div>
            {/* surrounding: string,
    wealth: string,
    familyReputation: string,
    // family: string,
    siblings: string,
    relationshipStatus: relationshipStatus
    // ownReputation: string,
    // friendship: string,
    // enemies: string */}
        </div>
    )
}