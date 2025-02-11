import React, { useEffect } from 'react';

const RoseAnimation = () => {
    useEffect(() => {
        const container = document.querySelector('.container');

        const createPetal = (index: number) => {
            const petal = document.createElement('div');
            petal.classList.add('rose-petal');
            petal.style.position = 'absolute';
            petal.style.width = '45px';
            petal.style.height = '80px';
            petal.style.backgroundColor = index % 2 === 0 ? '#d52d58' : '#b81b43'; // Alternating colors
            petal.style.transformOrigin = 'bottom center';
            petal.style.borderRadius = '15px';
            petal.style.left = `${Math.random() * 100}px`;
            petal.style.top = `${Math.random() * 100}px`;
            container?.appendChild(petal);

            petal.animate([
                { transform: 'scale(0)' },
                { transform: 'scale(1)' },
            ], {
                duration: 3000,
                easing: 'ease-in-out',
                delay: Math.random() * 1000, // Random delay for variety
                iterations: Infinity,
            });
        };

        // Create a set number of petals
        for (let i = 0; i < 7; i++) {
            createPetal(i);
        }
    }, []);

    return (
        <div className="container">
        <div className="glass"></div>
            <div className="glow"></div>
        </div>
);
};

export default RoseAnimation;