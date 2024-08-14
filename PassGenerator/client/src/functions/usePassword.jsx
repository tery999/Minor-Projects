import { useEffect, useState } from "react";
import { letterGenerator } from "./letterGenerator";

export function usePassword(upperCase, numbers, passLength,generateClicked) {
    const [password, setPassword] = useState("");
    console.log("RENDERING");

    useEffect( ()=> {
        generatePasswordClickFunc();
    },[generateClicked])

    const generatePasswordClickFunc = () => {
        console.log("RENDERING FUNC");
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

        setPassword(generatedPassword);
    }

    return [password];
}