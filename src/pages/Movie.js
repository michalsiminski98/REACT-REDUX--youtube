import { connect } from "react-redux";
import Comments from "./MovieComponents/comments";
import { addComment } from "../actions/movieActions";
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.navBackground};
`;
const MovieTitle = styled.h2`
  color: ${props => props.theme.color};
`;
const Hr = styled.hr`
  border-top: 1px solid grey;
`;

const Movie = (props) => {

  // getting data of profile that we logged in
  const {profile} = props;
  // getting data of current item from shop.js
  const {name, movie, comments} = props.location.state.movieData.element;
  
  return (
    <>
      <Section className="movie">
        <div className="movie__movie">
          <iframe className="movie__iframe" src={movie} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          <span className="movie__hashtags">#{name}</span>
          <MovieTitle className="movie__title">{name}</MovieTitle>
          <div className="movie__stats">
            <div className="movie__likes">
            <i className="fas fa-thumbs-up movie__like"></i>
            4,3tys.
            </div>
            <div className="movie__likes">
            <i className="fas fa-thumbs-down movie__like"></i>
            4,3tys.
            </div>
            <div className="movie__restStats">
              <span className="movie__restStatsSpecific">Udostępnij</span>
              <span className="movie__restStatsSpecific">Zapisz</span>
            </div>
          </div>
          <Hr className="movie__hr"/>
        </div>
      </Section>
      <Section className="comments">
        <h3 className="comments__titlecomments">Komentarze</h3>
        <Hr className="comments__hr"/>
        <form className="comments__form">
          <img className="comments__profile" src={profile.picture} alt="profilePicture"/>
          <input className="comments__input" type="text"/>
          <input className="comments__submit" type="submit"/>
        </form>
        <Comments
        comments= {comments}
        />
      </Section>
    </>
   );
}

// movie reducer has movies data
const mapStateToProps = state => ({
  profile : state.profile.profile,
})

const mapDispatchToProps = dispatch => ({
  addComment: id => dispatch(addComment(id)),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Movie);