"use client";

import ClickableLetter from "./components/ClickableLetters";
import RoseAnimation from "./components/RoseAnimation";  // Import the RoseAnimation component
import "./Design/globals.css";
import "./Design/roses.css";
import "./components/roses";
import {useState} from "react";
import letterMessages from "./components/letterMessages";

export default function Home() {
    const letters = ["J", "o", "l", "i", "n", "a"];
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
    };
    const roses = [
        { left: "68%", top: "35%" },
        { left: "30%", top: "35%" },
        { left: "33%", top: "45%" },
        { left: "65%", top: "45%"},
    ];
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inputPassword, setInputPassword] = useState("");

    const correctPassword = "123"; // Change this

    const handleLogin = () => {
        if (inputPassword === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert("Wrong password!");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="login-screen">
                <h2>Mach Vollbild an und sag wie du heißt:</h2>
                <input
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Submit</button>
            </div>
        );
    }
    return (
        <div className="main">
            {/* Button Row */}
            <div className="buttonRow">
                {letters.map((letter, index) => (
                    <ClickableLetter
                        key={index}
                        letter={letter}
                        onClick={() => handleLetterClick(letter)} />
                ))}
            </div>

            {/* Text Below Buttons */}
            <div className="Text">
                {letterMessages[selectedLetter]}
            </div>

            {/* Roses Animation */}
            {roses.map((rose, index) => (
                <RoseAnimation key={index} left={rose.left} top={rose.top} />
            ))}

        </div>
    );
}