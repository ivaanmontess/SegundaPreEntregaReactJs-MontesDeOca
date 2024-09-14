import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
//LOGICA DE PROVIDER
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleTheme = () =>{
    setIsDarkMode(!isDarkMode);
};

return(
    <ThemeContext.Provider value= {{ isDarkMode, toggleTheme}}>
        { children }
    </ThemeContext.Provider>
)

};

export default ThemeProvider;