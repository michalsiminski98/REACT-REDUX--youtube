import { connect } from "react-redux";

const Movie = ({profile}) => {
  return (
    <>
      <section className="movie">
        <div className="movie__movie">
          <iframe className="movie__iframe" frameBorder="none" title="movie" src="https://www.youtube.com/watch?v=m28klmKlk0U"></iframe>
          <span className="movie__hashtags">#Movie</span>
          <h2 className="movie__title">Movie Movie Movie Movie</h2>
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
        <div className="comments__comment">
        <img className="comments__profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" alt="profilePicture"/>
        <p className="comments_text">Super sprawa!</p>
        </div>
        <div className="comments__comment">
        <img className="comments__profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" alt="profilePicture"/>
        <p className="comments_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?</p>
        </div>
        <div className="comments__comment">
        <img className="comments__profile comments__profile-comment" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" alt="profilePicture"/>
        <p className="comments_text">Cool</p>
        </div>
      </section>
    </>
   );
}

const mapStateToProps = state => ({
  profile : state.profile.profile,
})
 
export default connect(mapStateToProps)(Movie);