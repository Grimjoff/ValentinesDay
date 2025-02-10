"use client";

import ClickableLetter from "./components/ClickableLetters";
import "./globals.css"

export default function Home() {
    const letters = ["J", "o", "l","i", "n", "a", "<3"];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex space-x-4">
                {letters.map((letter, index) => (
                    <ClickableLetter key={index} letter={letter} />
                ))}
            </div>
        </div>
    );
}
