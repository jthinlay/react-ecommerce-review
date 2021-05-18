import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles';
import {createStructuredSelector} from 'reselect';
import { selectorCartItems} from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer >
            {
                cartItems.length ? (
                    cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item = { cartItem } /> )
                    ) : (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden())}}> GO TO CHECKOUT </CartDropdownButton>
    </CartDropdownContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems : selectorCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
