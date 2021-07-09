import React, {useState} from 'react';
import {connect} from 'react-redux';
import {SignInContainer, SignInTitle, ButtonBarContainer} from './sign-in-styles'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action';
 
const SignIn = ({googleSignInStart, emailSignInStart }) => {

  const [userCredentials, setCredential] = useState({
      email: '', 
      password: ''
    });

  const {email, password} = userCredentials;
  
  const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)
    }
  const handleChange=(e)=>{
        const {value, name} = e.target;
        setCredential({...userCredentials, [name]: value});
    }
       
return (
    <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit = {handleSubmit}>
                <div className="email">
                    <FormInput 
                    type="email" 
                    name="email" 
                    label="Email"
                    value={email}
                    handleChange = {handleChange}
                    required/>
                    
                </div>
                <div className="password">
                    <FormInput 
                    type="password" 
                    name="password" 
                    label='Password'
                    value={password} 
                    handleChange = {handleChange }
                    required/>
                </div>
                <ButtonBarContainer>
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton type="button" onClick = {googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
                </ButtonBarContainer>
            </form> 
    </SignInContainer>)
}


const MapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, MapDispatchToProps)(SignIn);
