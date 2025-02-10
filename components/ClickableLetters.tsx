
import { useState, useEffect } from "react";

interface ClickableLetterProps {
    letter: string;
}

export default function ClickableLetter({ letter }: ClickableLetterProps) {
    const [clicked, setClicked] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return <button className="w-16 h-16 bg-gray-200 text-3xl font-bold rounded-lg">{letter}</button>;
    }

    return (
        <button
            onClick={() => setClicked(!clicked)}
            className={`w-24 h-24 text-4xl font-bold rounded-lg transition-colors duration-300 ${
                clicked ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
        >
            {letter}
        </button>

    );
}
