import { createContext, useEffect, useState } from 'react';
import localStorage from 'local-storage';


export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [progress, setProgress] = useState(20);
    

    useEffect(()=>{
        let a = localStorage.get('dark-mode');
        if (a === null || a === true) {
            setDarkMode(true);
        }
        else {
            setDarkMode(false);
        }
    },[])
   
    return (
        <Context.Provider
            value={{
                darkMode,
                progress,
                setDarkMode,
                setProgress
            }}
        >{children}</Context.Provider>
    )
}

