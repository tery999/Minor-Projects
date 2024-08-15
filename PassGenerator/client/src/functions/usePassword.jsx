import { useEffect, useState } from "react";
import { letterGenerator } from "./letterGenerator";
import { randomNumber } from "./randomNumber";

export function usePassword(upperCase, numbers, passLength, generateClicked) {
    const [password, setPassword] = useState("");

    useEffect(() => {
        generatePasswordClickFunc();
    }, [generateClicked])

    const generatePasswordClickFunc = () => {
        debugger;
        let generatedPassword = ""
        if (passLength === "Small") {
            for (let i = 0; i < 6; i++) {
                generatedPassword += letterGenerator();
            }
        } else if (passLength === "Medium") {
            for (let i = 0; i < 12; i++) {
                generatedPassword += letterGenerator();
            }
        } else if (passLength === "Big") {
            for (let i = 0; i < 20; i++) {
                generatedPassword += letterGenerator();
            }
        }

        if (numbers) {
            let count = Math.floor(generatedPassword.length / 6);
            let addedCount = 0;

            while (addedCount < count) {
                let randomIndex = randomNumber(generatedPassword.length);
                let randomNumbToAdd = randomNumber(10);
                if (randomIndex !== 0) {
                    generatedPassword = generatedPassword.slice(0, randomIndex-1) + randomNumbToAdd + generatedPassword.slice(randomIndex);
                } else {
                    generatedPassword = randomNumbToAdd + generatedPassword.slice(1);
                }

                addedCount++;
            }
        }

        if (upperCase) {
            let count = Math.floor(generatedPassword.length / 6);
            let addedCount = 0;

            while (addedCount < count) {
                let randomIndex = randomNumber(generatedPassword.length);
                if (generatedPassword.charCodeAt(randomIndex) >= 97 && generatedPassword.charCodeAt(randomIndex) <= 122) {
                    if (randomIndex !== 0) {
                        generatedPassword = generatedPassword.slice(0, randomIndex-1) + generatedPassword.charAt(randomIndex).toUpperCase() + generatedPassword.slice(randomIndex);
                    } else {
                        generatedPassword = generatedPassword.charAt(randomIndex).toUpperCase() + generatedPassword.slice(1);
                    }
                    addedCount++;
                }
            }
        }

        setPassword(generatedPassword);
    }

    return [password];
}