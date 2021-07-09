import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectorCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectorCartItemCount = createSelector(
    [selectorCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity,cartItem) => 
    accumalatedQuantity + cartItem.quantity, 0)
)

export const selectorCartItemTotal = createSelector(
    [selectorCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity,cartItem) => 
    accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
)