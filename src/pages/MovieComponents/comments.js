const Comments = ({comments}) => {
  return ( 
    comments.map(element => (
      <div
      className="comments__comment"
      key={element.id}
      >
        <img className="comments__profile" src={element.picture} alt="profilePicture"/>
        <p className="comments_text">{element.comment}</p>
      </div>
    ))
   );
}
 
export default Comments;