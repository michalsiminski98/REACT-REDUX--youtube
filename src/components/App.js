import Navigation from './Navigation' 
import Page from './Page' 
import { BrowserRouter } from 'react-router-dom';
import { lightLight } from '../theme/Theme';
import { ThemeContext } from '../theme/ThemeContext';
import { useState } from 'react';

function App() {

  // for dark mode content api
  const [isLightMode, SetIsLightMode] = useState(false);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value = {lightLight}>
        <Navigation/>
        <Page
        SetIsLightMode= {SetIsLightMode}
        isLightMode= {isLightMode}
        />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
