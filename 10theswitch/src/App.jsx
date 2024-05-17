
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    //har theme remove kr do Beccause we dont knoe which theme is currently here so remove all thme then after add our theme .add is below
    document.querySelector('html').classList.add(themeMode)
    //Now we add here thememode because it is a method and our all predefined method like light theme and darktheme is using usestaate update thememode
  }, [themeMode]) //thememode hi dependecies h so jaise hi ye change hum apna method fi render krnege
  // we see that in html we add dark/light for theme so we add thememode in html class 

  

  return (
    //Now hume values bhi deni padti h in ContextProvider so we know that kise kya kya acess milega AUR unka acees lene k liye pehle unhe lana padega wah value se aayega .so we take acess of values first .
    //we got diretct acess of all here

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>  
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         {/* THEME BTN */}
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                 {/* CARD */}
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
    //now for aceessing the our context file we need to wrap our components in ThemeProvider(prev:- UserContextProvider (in 09) in App.jsx or where we render our component 
  )
}

export default App