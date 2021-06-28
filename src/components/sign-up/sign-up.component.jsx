import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.action'
import {SignUpContainer, SignUpTitle} from './sign-up-styles';
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button.component'
// import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

const SignUp = ({singUpStart}) => {
   const [ userCredentails, setCredentials] = useState({
       diplayName: '',
       email: '',
       password: '',
       confirmPassword: ''
   })
   const {displayName, email, password, confirmPassword} = userCredentails;
   const handleSubmit = async event => {
        event.preventDefault();
    
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
    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({...userCredentails, [name]:value})
    } 
    //const { displayName, email, password, confirmPassword} = this.state
return(
    <SignUpContainer>
        <SignUpTitle> I do not have an account</SignUpTitle>
        <span>Sign up with your email and password </span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                /> 
            <FormInput 
                type='text'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                /> 
            <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                /> 
            
            <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                    /> 
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
    </SignUpContainer>
)
}

const mapDispatchToProps = dispatch => ({
    singUpStart: (userCrendentials) => dispatch(signUpStart(userCrendentials))
})
export default connect(null, mapDispatchToProps)(SignUp)