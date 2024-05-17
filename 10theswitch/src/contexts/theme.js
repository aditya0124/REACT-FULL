import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //DEFult value h jab context pehli bar bane to ye already prsent ho
    themeMode: "light",
    darkTheme: () => {},//method h
    lightTheme: () => {},//method h
   //when anyone call context use mrthod aur variable dono mil skte h 
})
//its use to say that we give method and variable both as default also not only variable

//@nd method for use provider in 09 React file we see we use another file for Provider . here in same file we do 
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){  // An custom hook
    return useContext(ThemeContext)  // with help of this hume har jagah useContext and ThemeContext(UserContext(our Context )) nhi import krna pdega 
    // we only import theme .js and we get all these context value  
}
//sara chij ek file m ho gya yha

// return useContext(ThemeContext)
// this mens we got oue context