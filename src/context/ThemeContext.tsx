import React, { createContext, FC, ReactNode } from "react";

interface ThemeContextType {

}

export const ThemeContext = createContext({});



export const ThemeContextProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
        <ThemeContext.Provider value="">
            {children}
        </ThemeContext.Provider>
    )
}