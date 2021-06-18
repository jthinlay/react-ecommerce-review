import UserActionTypyes from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypyes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypyes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypyes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = (user) => ({
    type: UserActionTypyes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypyes.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypyes.CHECK_USER_SESSION 
})

export const signOutStart = () => ({
    type: UserActionTypyes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypyes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: UserActionTypyes.SIGN_OUT_FAILURE,
    payload: error 
})

export const signUpStart = (userCredentials) => ({
    type: UserActionTypyes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypyes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (error) => ({
    type: UserActionTypyes.SIGN_UP_FAILURE,
    payload: error
})