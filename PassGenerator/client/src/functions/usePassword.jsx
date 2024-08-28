import { useEffect, useState } from "react";
import { letterGenerator } from "./letterGenerator";
import { randomNumber } from "./randomNumber";

export function usePassword(upperCase, numbers, symbols, passLength, generateClicked) {
    const [password, setPassword] = useState("");

    useEffect(() => {
        generatePasswordClickFunc();
    }, [generateClicked])

    const generatePasswordClickFunc = () => {
        // debugger;
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
                    generatedPassword = generatedPassword.slice(0, randomIndex) + randomNumbToAdd + generatedPassword.slice(randomIndex+1);
                } else {
                    generatedPassword = randomNumbToAdd + generatedPassword.slice(1);
                }

                addedCount++;
            }
            console.log( "PASSWORD AFTER NUMBERS");
            console.log(generatedPassword);
        }

        if (upperCase) {
            let count = Math.floor(generatedPassword.length / 6);
            let addedCount = 0;

            while (addedCount < count) {
                let randomIndex = randomNumber(generatedPassword.length);
                if (generatedPassword.charCodeAt(randomIndex) >= 97 && generatedPassword.charCodeAt(randomIndex) <= 122) {
                    if (randomIndex !== 0) {
                        generatedPassword = generatedPassword.slice(0, randomIndex) + generatedPassword.charAt(randomIndex).toUpperCase() + generatedPassword.slice(randomIndex+1);
                    } else {
                        generatedPassword = generatedPassword.charAt(randomIndex).toUpperCase() + generatedPassword.slice(1);
                    }
                    addedCount++;
                }
            }
        }

        if ( symbols === true ) {
            debugger;
            let allowedSpecials = ["@","#","$","%","^","&","*","(",")","!","?","+","-","_","/"];
            let pickedSymbol = allowedSpecials[randomNumber(allowedSpecials.length)];
            let halfPoint = Math.ceil( generatedPassword.length / 2 );
            generatedPassword = generatedPassword.slice(0, halfPoint) + pickedSymbol + generatedPassword.slice(halfPoint);
        } else if (symbols === "simple") {
            let halfPoint = Math.ceil( generatedPassword.length / 2 );
            generatedPassword = generatedPassword.slice(0, halfPoint) + "@" + generatedPassword.slice(halfPoint);
        }

        setPassword(generatedPassword);
    }

    return [password];
}