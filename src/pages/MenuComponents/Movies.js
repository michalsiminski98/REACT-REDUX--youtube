import { Link } from "react-router-dom";

const Movies = ({movies}) => {
  return ( 
    movies.map(element => (
      <div key={element.id} className="menu__movieWrapper">
        <Link to={`/watch/${element.name}/${element.author}&output=embed`}>
          <img className="menu__image" src={element.img} alt="movie"/>
          <h3 className="menu__title">{element.name}</h3>
          <p className="menu__author">{element.author}</p>
          <span className="menu__stats">{element.views} views</span>
        </Link>
      </div>
    ))
   );
}
 
export default Movies;