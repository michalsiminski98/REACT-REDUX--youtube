import '../styles/navigation.scss'

const Navigation = () => {
  return ( 
    <nav className='navigation'>
      <div className="navigation__leftSide">
        <div className="navigation__bar">
        <i className="fas fa-bars navigation__barIcon"></i>
        </div>
        <img className="navigation__logo" src="https://logofirmy.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube logo"/>
      </div>
      <div className="navigation__rightSide">
      <input type="text" placeholder="Szukaj" className="navigation__searchInput"/>
      <button className="navigation__searchButton">
        <i className="fas fa-search navigation__searchIcon"></i>
      </button>
      <i className="fas fa-share navigation__submit"></i>
      <i className="fas fa-chess-board navigation__board"></i>
      <i className="fas fa-bell navigation__bell"></i>
      <img className="fas fa-bell navigation__profile" src="https://johannesippen.com/img/blog/humans-not-users/header.jpg" alt="profilePicture"/>
      </div>
    </nav>
   );
}
 
export default Navigation;