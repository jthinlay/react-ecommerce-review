import React from 'react';
import {SignInContainer, SignInTitle, ButtonBarContainer} from './sign-in-styles'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           email: '', 
           password: '',
       } 
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password:''
            })
        }catch(error){
            console.log(error)
        }
    }
    handleChange=(e)=>{
        const {value, name} = e.target;
        this.setState({[name]: value});
    }
    render(){
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
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                     </ButtonBarContainer>
                 </form> 
            </SignInContainer>)
    }
}

export default SignIn;
