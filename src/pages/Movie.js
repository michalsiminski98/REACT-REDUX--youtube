import '../styles/movie.scss'

const Movie = () => {
  return (
    <section className="movie">
      <div className="movie__movie">
      <iframe className="movie__iframe" src="https://www.youtube.com/embed/wgL4gKoQ6t4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <span className="movie__hashtags">#GreatestShowman</span>
      <h2 className="movie__title">Nadszedł czas the greatest showman</h2>
      <div className="movie__stats">
        
      </div>
      </div>
    </section>
   );
}
 
export default Movie;