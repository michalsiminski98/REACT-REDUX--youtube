import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { addProfile } from "../actions/profileActions";
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.background};
`;
const Form = styled.form`
  color: ${props => props.theme.color};
`;

const Profile = ({addProfile}) => {
  
  // redux add profile - taking picture and name from google
  const handleResponseGoogle = e => {
    addProfile(e.profileObj.name, e.profileObj.imageUrl);
  }
  const handleFailureResponseGoogle = e => {
    console.log(e);
  }

  // form shouldnt work here
  const handleOnChange = () => {}

  return ( 
    <Section className="profile">
      <Form className="profile__form">
        <label htmlFor="email" className="profile__label">Email:</label><br/>
        <input type="text" onChange={handleOnChange} value="only google log in" id="email" name="email" className="profile__input" /><br/>
        <label htmlFor="password" className="profile__label">Password:</label><br/>
        <input type="password" onChange={handleOnChange} value="only google log in" name="password" className="profile__input" /><br/>
        <input type="submit" onChange={handleOnChange} value="Submit" className="profile__submit"/>
      </Form>
      <GoogleLogin
      className="profile__google"
      clientId="1095933028691-4bj15f1gmnm5jtu2b52tokhno0g66qup.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={handleResponseGoogle}
      onFailure={handleFailureResponseGoogle}
      cookiePolicy={'single_host_origin'}
      />
    </Section>
   );
};

const mapDispatchToProps = dispatch => ({
  addProfile : (name, picture) => dispatch(addProfile(name, picture))
});

export default connect(null, mapDispatchToProps)(Profile);