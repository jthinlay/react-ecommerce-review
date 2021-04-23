import {UserActionTypyes} from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypyes.SET_CURRENT_USER,
    payload: user
});