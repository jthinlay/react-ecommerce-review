import UserActionTypyes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypyes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypyes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }; 
        case UserActionTypyes.SIGN_IN_FAILURE: 
        case UserActionTypyes.SIGN_OUT_FAILURE:
        case UserActionTypyes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }; 
        default: 
        return state;
    }
}
export default userReducer
