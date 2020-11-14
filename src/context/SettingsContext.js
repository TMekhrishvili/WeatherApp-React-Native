import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = props => {
    const [score, setScore] = useState(0);
    const [unit, setUnit] = useState("celsius");
    const [difficulty, setDifficulty] = useState(2);
    const [showTemp, setShowTemp] = useState(false);

    return <SettingsContext.Provider
        value={{
            score,
            setScore,
            unit,
            setUnit,
            difficulty,
            setDifficulty,
            showTemp,
            setShowTemp
        }}>
        {props.children}
    </SettingsContext.Provider>
}