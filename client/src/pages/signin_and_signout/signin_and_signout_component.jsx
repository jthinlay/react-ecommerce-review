import React from 'react';
import './signin_and_signout_styles.scss';
import SignIn from '../../components/sign-in/sign-in-component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignOutPage = () => (
    <div>
        <div className="sign-in-and-sign-out">
             <SignIn />
             <SignUp />
        </div>
       
    </div>
    
)
export default SignInAndSignOutPage