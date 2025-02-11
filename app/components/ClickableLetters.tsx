"use client";
import { useState } from "react";

interface ClickableLetterProps {
    letter: string;
    onClick: () => void;
}

export default function ClickableLetter({ letter, onClick }: ClickableLetterProps) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            className={`unclickedButton ${
                clicked ? "clickedButton" : "unclickedButton"
            } hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
        >
            {letter}
        </button>
    );
}
