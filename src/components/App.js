import Navigation from './Navigation' 
import Page from './Page' 
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const LightTheme= {
  color: "#0a0a0a",
  background: "#F9F9F9",
  navBackground: "rgb(255, 255, 255)",
  searchColor: "#6E6E6E",
  searchBackround: "rgb(249, 249, 249)",
  buttonSearchBackground: "rgb(249, 249, 249)", 
};

const DarkTheme= {
  color: "#FFFFFF",
  background: "#181818",
  navBackground: "rgba(36, 36, 36, 0.97)",
  searchColor: "#6E6E6E",
  searchBackround: "#131313",
  buttonSearchBackground: "#2C2C2C",
};

const themes = {
  light: LightTheme,
  dark:DarkTheme,
}

function App() {

  // for dark mode content api
  const [theme, SetTheme] = useState("dark");

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>  
        <Navigation/>
        <Page
        SetTheme= {SetTheme}
        theme= {theme}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
