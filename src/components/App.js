import Navigation from './Navigation' 
import Page from './Page' 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Page/>
    </BrowserRouter>
  );
}

export default App;
