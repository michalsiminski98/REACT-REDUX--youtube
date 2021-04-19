import { connect } from "react-redux";
import Comments from "./MovieComponents/comments";
import { addComment } from "../actions/movieActions";

const Movie = (props) => {

  // getting data of profile that we logged in
  const {profile} = props;
  // getting data of current item from shop.js
  const {name, movie, comments} = props.location.state.movieData.element;
  
  return (
    <>
      <section className="movie">
        <div className="movie__movie">
          <iframe className="movie__iframe" src={movie} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          <span className="movie__hashtags">#{name}</span>
          <h2 className="movie__title">{name}</h2>
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
          <hr className="movie__hr"/>
        </div>
      </section>
      <section className="comments">
        <h3 className="comments__titlecomments">Komentarze</h3>
        <hr className="comments__hr"/>
        <form className="comments__form">
          <img className="comments__profile" src={profile.picture} alt="profilePicture"/>
          <input className="comments__input" type="text"/>
          <input className="comments__submit" type="submit"/>
        </form>
        <Comments
        comments= {comments}
        />
      </section>
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