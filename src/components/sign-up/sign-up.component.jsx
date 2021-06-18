import React from 'react';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.action'
import {SignUpContainer, SignUpTitle} from './sign-up-styles';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {singUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert('Password does not matched');
            return;
        } 
        singUpStart({displayName, email, password});
        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password)
        //     await createUserProfileDocument(user, {displayName});
        //     this.setState({
        //         displayName: '',
        //         email:'',
        //         password: '',
        //         confirmPassword: ''
        //     })
        // } catch(error){
        //     console.log(error)
        // }
    };
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    
    render(){
        const { displayName, email, password, confirmPassword} = this.state
        return(
            <SignUpContainer>
                <SignUpTitle> I do not have an account</SignUpTitle>
                <span>Sign up with your email and password </span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                        /> 
                    <FormInput 
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                       /> 
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                       /> 
                   
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                         /> 
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    singUpStart: (userCrendentials) => dispatch(signUpStart(userCrendentials))
})
export default connect(null, mapDispatchToProps)(SignUp)