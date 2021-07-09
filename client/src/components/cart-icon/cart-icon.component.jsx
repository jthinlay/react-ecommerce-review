import React from 'react';
import {CartIconContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {createStructuredSelector} from 'reselect';
import {selectorCartItemCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => ( 
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer> )


const mapStateToProps = createStructuredSelector({
    itemCount: selectorCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

