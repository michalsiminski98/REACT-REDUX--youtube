import '../styles/movie.scss'

const Movie = () => {
  return (
    <section className="movie">
      <div className="movie__movie">
      <iframe className="movie__iframe" title="movie" src="https://www.youtube.com/watch?v=m28klmKlk0U" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <span className="movie__hashtags">#GreatestShowman</span>
      <h2 className="movie__title">Nadszedł czas the greatest showman</h2>
      <div className="movie__stats">
        
      </div>
      </div>
    </section>
   );
}
 
export default Movie;