import React from 'react';
import {connect} from 'react-redux';
import {SignInContainer, SignInTitle, ButtonBarContainer} from './sign-in-styles'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action';


class SignIn extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           email: '', 
           password: '',
       } 
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password)
       
    }
    handleChange=(e)=>{
        const {value, name} = e.target;
        this.setState({[name]: value});
    }
    render(){
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                 <SignInTitle>I already have an account</SignInTitle>
                 <span>Sign in with your email and password</span>
                 <form onSubmit = {this.handleSubmit}>
                     <div className="email">
                         <FormInput 
                            type="email" 
                            name="email" 
                            label="Email"
                            value={this.state.email}
                            handleChange = {this.handleChange}
                            required/>
                         
                     </div>
                     <div className="password">
                         <FormInput 
                            type="password" 
                            name="password" 
                            label='Password'
                            value={this.state.password} 
                            handleChange = {this.handleChange }
                            required/>
                     </div>
                     <ButtonBarContainer>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick = {googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
                     </ButtonBarContainer>
                 </form> 
            </SignInContainer>)
    }
}

const MapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, MapDispatchToProps)(SignIn);
