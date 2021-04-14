const Profile = () => {
  return ( 
    <section className="profile">
      <form className="profile__form">
        <label for="email" className="profile__label">Email:</label><br/>
        <input type="text" id="email" name="email" className="profile__input" /><br/>
        <label for="password" className="profile__label">Password:</label><br/>
        <input type="password" name="password" className="profile__input" /><br/>
        <input type="submit" value="Submit" className="profile__submit"/>
      </form>
    </section>
   );
}
 
export default Profile;