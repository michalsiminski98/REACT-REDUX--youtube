import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Movies from './MenuComponents/Movies';
import styled from 'styled-components';

const LeftDiv = styled.div`
  background-color: ${props => props.theme.navBackground};
`;

const InsideLeftDiv = styled.div`
&:hover{
  background-color: ${props => props.theme.navBackground};
  opacity:0.8;
}
`;

const ElementH3 = styled.div`
  color: ${props => props.theme.color};
`;

const Main = styled.div`
  background-color: ${props => props.theme.navBackground};
`;



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
    <LeftDiv className="menu__leftMenu">
      <Link to='/'>
        <InsideLeftDiv className="menu__leftMenu-option">
        <ElementH3 className="menu__leftMenu-option-h3"><i className="fas fa-home"></i> <br/> <br/> Główna</ElementH3>
        </InsideLeftDiv>
      </Link>
      <InsideLeftDiv className="menu__leftMenu-option" onClick={handleDarkMode}>
      <ElementH3 className="menu__leftMenu-option-h3"><i className="far fa-moon"></i> <br/> <br/> Dark Mode</ElementH3>
      </InsideLeftDiv>
    </LeftDiv>
  );

  return ( 
    <Main className="menu">
      {window.innerWidth > 800 && LeftMenu()}
      <Movies
      movies = {movies}
      />
    </Main>
   );
};

  const mapStateTopProps = state => ({
    movies: state.movies.movies,
  })
  
  export default connect(mapStateTopProps)(Menu);