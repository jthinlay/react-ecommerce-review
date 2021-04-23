import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    // Stripe ulitize currency calculate in cent, you have to multiply by 100 for US one dollar
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nNrMg7PV4OMRAtEzUgu6gQpS';
    
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successfully ')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name = 'JT React Online-Shopping'
            billingaddress
            shippingaddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton