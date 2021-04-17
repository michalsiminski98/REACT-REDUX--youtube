import { Link } from "react-router-dom";

const Movies = ({movies}) => {
  return ( 
    movies.map(element => (
      <Link
      key={element.id}
      className="menu__movieWrapper"
      to={{pathname:`/watch/${element.name}/${element.author}`,
      state: {movieData:{element}}}}
      >
        <img className="menu__image" src={element.img} alt="movie"/>
        <h3 className="menu__title">{element.name}</h3>
        <p className="menu__author">{element.author}</p>
        <span className="menu__stats">{element.views} views</span>
      </Link>
    ))
   );
}
 
export default Movies;