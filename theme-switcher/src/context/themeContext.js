import { createContext, useContext } from "react";

// creating context as themeContext for changing the theme mode
export const themContext = createContext({
    themeMode : "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{},
});

// themeprovider
export const ThemeProvider = themContext.Provider

// custom hook to call instead of calling themeprovider and theme context seperately 
export default function useTheme(){
    return useContext(themContext);
}