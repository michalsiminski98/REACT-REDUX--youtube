import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Menu = ({movies}) => {

  console.log(movies);

  const LeftMenu = () =>{
    return(
    <div className="menu__leftMenu">
      <Link to='/'>
        <div className="menu__leftMenu-option">
        <h3 className="menu__leftMenu-option-h3"><i className="fas fa-home"></i> <br/> <br/> Główna</h3>
        </div>
      </Link>
      <div className="menu__leftMenu-option">
      <h3 className="menu__leftMenu-option-h3"><i className="far fa-moon"></i> <br/> <br/> Dark Mode</h3>
      </div>
    </div>
  )};


  return ( 
    <main className="menu">
      {window.innerWidth > 800 && LeftMenu()}
      {movies.map(element => (
      <div className="menu__movieWrapper">
        <Link to={`/watch/${element.name}/${element.author}`}>
          <img className="menu__image" src={element.img} alt="movie"/>
          <h3 className="menu__title">{element.name}</h3>
          <p className="menu__author">{element.author}</p>
          <span className="menu__stats">{element.views} views</span>
        </Link>
      </div>
    ))}
    </main>
   );
};

  const mapStateTopProps = state => ({
    movies: state.movies.movies,
  })
  
  export default connect(mapStateTopProps)(Menu);