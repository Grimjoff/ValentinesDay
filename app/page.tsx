"use client";
import ClickableLetter from "../components/ClickableLetters"

export default function Home() {
    const letters = ["J", "O", "L", "I", "N", "A", "<3"]

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div className="flex space-x-4">
                {letters.map((letter, index) => (
                    <ClickableLetter key={index} letter={letter} />
                ))}
            </div>
        </main>
    )
}

