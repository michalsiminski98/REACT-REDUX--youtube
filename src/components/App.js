import Navigation from './Navigation' 
import Page from './Page' 
import Footer from './Footer' 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Page/>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
