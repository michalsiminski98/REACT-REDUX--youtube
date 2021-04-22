import { Link } from "react-router-dom";
import styled from 'styled-components';

const ElementH3 = styled.h3`
  color: ${props => props.theme.color};
`;

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
        <ElementH3 className="menu__title">{element.name}</ElementH3>
        <p className="menu__author">{element.author}</p>
        <span className="menu__stats">{element.views} views</span>
      </Link>
    ))
   );
}
 
export default Movies;