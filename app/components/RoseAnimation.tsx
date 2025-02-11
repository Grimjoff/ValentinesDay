import React from 'react';
import './roses.css';

const RoseAnimation = ({ left, top }: { left: string; top: string }) => {
    return (
        <div className="rose" style={{ left, top }}>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="leaf">
                <div className="stem"></div>
                <div className="leafs"></div>
                <div className="leafs"></div>
            </div>
        </div>
    );
};


export default RoseAnimation;
