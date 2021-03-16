import { useState } from 'react';

import '../styles/navigation.scss'

const Navigation = () => {

  const [leftBarActive, setLeftBarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);
  const [boardActive, setBoardActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);


  const handleLeftBar = () => {
    let x, animation;
    let barMenu = document.querySelector('.barMenu');
    if(leftBarActive ===false){
      // bgc
      document.querySelector('.barBackground').style.display='block';
      // leftMenu
      x=-100;
      const showCloseMenu = () => {
        x+=10;
        barMenu.style.transform=`translateX(${x}%)`;
        animation = requestAnimationFrame(showCloseMenu);
        x===0 && cancelAnimationFrame(animation);
      }
      showCloseMenu();
      setLeftBarActive(!leftBarActive);
    }else{
      // bgc
      document.querySelector('.barBackground').style.display='none';
      // leftMenu
      x=0;
      const showCloseMenu = () => {
        x-=10;
        barMenu.style.transform=`translateX(${x}%)`;
        animation = requestAnimationFrame(showCloseMenu);
        x===-100 && cancelAnimationFrame(animation);
      }
      showCloseMenu();
      setLeftBarActive(!leftBarActive);
    }
  }

  const handleSearchActivityClick = () => {
    if(searchActive === false){ 
    document.querySelector('.navigation__leftSide').style.display='none';
    document.querySelector('.navigation__rightSide').style.display='none';
    document.querySelector('.navigation__mobileSearch').style.display='flex';
    }else{
      document.querySelector('.navigation__leftSide').style.display='flex';
      document.querySelector('.navigation__rightSide').style.display='flex';
      document.querySelector('.navigation__mobileSearch').style.display='none';
    }
    setSearchActive(!searchActive);
  }

  const handleSubmitClick = () => {
    submitActive === false ? 
    document.querySelector('.navigation__submit-messsage').style.display='block' :
    document.querySelector('.navigation__submit-messsage').style.display='none';
    setSubmitActive(!submitActive);
  }
  
  const handleBoardClick = () => {
    boardActive === false ? 
    document.querySelector('.navigation__board-messsage').style.display='block' :
    document.querySelector('.navigation__board-messsage').style.display='none';
    setBoardActive(!boardActive);
  }

  const handleBellClick = () => {
    notificationActive === false ? 
    document.querySelector('.navigation__bell-messsage').style.display='block' :
    document.querySelector('.navigation__bell-messsage').style.display='none';
    setNotificationActive(!notificationActive);
  }

  return ( 
  <>
    <div className="barMenu">
        <div className="barMenu__main">
          <div className="navigation__bar">
          <i className="fas fa-bars navigation__barIcon" onClick={handleLeftBar}></i>
          </div>
          <img className="navigation__logo" src="https://logofirmy.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube logo"/>
      </div>
      <hr/>
      <div className="barMenu__firstSection">
        <h3 className="barMenu__item"><i className="fas fa-home"></i> Strona główna</h3>
      </div>
    </div>
    <div className="barBackground">
    </div>
    <nav className='navigation'>
      <div className="navigation__leftSide">
        <div className="navigation__bar" onClick={handleLeftBar}>
        <i className="fas fa-bars navigation__barIcon"></i>
        </div>
        <img className="navigation__logo" src="https://logofirmy.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube logo"/>
      </div>
      <div className="navigation__rightSide">
        <i className="fas fa-search navigation__searchIconMobile" onClick={handleSearchActivityClick}></i>
        <input type="text" placeholder="Szukaj" className="navigation__searchInput"/>
        <button className="navigation__searchButton">
          <i className="fas fa-search navigation__searchIcon"></i>
        </button>
        <i className="fas fa-share navigation__submit" onClick={handleSubmitClick}>
          <div className="navigation__submit-messsage">
            <h2 className= "navigation__h2"><i className="fab fa-youtube"></i> Prześlij film</h2>
          </div>
        </i>
        <i className="fas fa-chess-board navigation__board" onClick={handleBoardClick}>
          <div className="navigation__board-messsage">
            <h2 className= "navigation__h2"><i className="fab fa-youtube"></i> YouTube TV</h2>
          </div>
        </i>
        <i className="fas fa-bell navigation__bell" onClick={handleBellClick}>
          <div className="navigation__bell-messsage">
            <h2 className= "navigation__h2">Powiadomienia</h2>
            <hr/>
          </div>
        </i>
        <img className="fas fa-bell navigation__profile" src="https://johannesippen.com/img/blog/humans-not-users/header.jpg" alt="profilePicture"/>
      </div>
      <div className="navigation__mobileSearch">
        <i className="fas fa-arrow-circle-left navigation__back" onClick={handleSearchActivityClick}></i>
        <input type="text" placeholder="Szukaj" className="navigation__searchInputMobile"/>
        <button className="navigation__searchButtonMobile">
          <i className="fas fa-search navigation__searchIconMobile"></i>
        </button>
      </div>
    </nav>
  </>
   );
}
 
export default Navigation;