import React, { createContext, useContext, useState } from 'react'



const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((current) => {
            if (current == 'light') {
                return 'dark';
            } else {
                return 'light';
            }
        })
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);