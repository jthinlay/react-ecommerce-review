export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

    if(exitingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? 
            { ...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem    
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
} ;

export const clearItemFromCart = (cartItems, cartItemToRemove) => { 
    const exitingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
   
    if(exitingItem.quantity === 1){
       return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
   
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}
