import { Link } from 'react-router-dom';

const Menu = () => {

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
      <div className="menu__movieWrapper">
        <Link to={`/watch/${'name'}/${'author'}`}>
          <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
          <h3 className="menu__title">Avengers- full movie</h3>
          <p className="menu__author">Joss Whedon</p>
          <span className="menu__stats">66333 wyświetleń</span>
        </Link>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>
      <div className="menu__movieWrapper">
      <img className="menu__image" src="https://i.pinimg.com/originals/45/9d/3c/459d3c561170ec10ea04fd009af42638.jpg" alt="movie"/>
      <h3 className="menu__title">Avengers- full movie</h3>
      <p className="menu__author">Joss Whedon</p>
      <span className="menu__stats">66333 wyświetleń</span>
      </div>

    </main>
   );
};

    // redux for showing products from itemReducer.js
  //   const mapStateToProps = state => {
  //     return {
  //         movies: state.movies.movies,
  //     }
  // }
 
export default Menu;