import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Movies from './MenuComponents/Movies';

const Menu = ({movies, SetTheme, theme}) => {
  
  // dark mode handler for left navbar
  const handleDarkMode = () => {
    if(theme === "light"){
    SetTheme("dark");
    }
    if(theme === "dark"){
      SetTheme("light");
      }
  }

  // menu for bigger width
  const LeftMenu = () => (
    <div className="menu__leftMenu">
      <Link to='/'>
        <div className="menu__leftMenu-option">
        <h3 className="menu__leftMenu-option-h3"><i className="fas fa-home"></i> <br/> <br/> Główna</h3>
        </div>
      </Link>
      <div className="menu__leftMenu-option" onClick={handleDarkMode}>
      <h3 className="menu__leftMenu-option-h3"><i className="far fa-moon"></i> <br/> <br/> Dark Mode</h3>
      </div>
    </div>
  );

  return ( 
    <main className="menu">
      {window.innerWidth > 800 && LeftMenu()}
      <Movies
      movies = {movies}
      />
    </main>
   );
};

  const mapStateTopProps = state => ({
    movies: state.movies.movies,
  })
  
  export default connect(mapStateTopProps)(Menu);