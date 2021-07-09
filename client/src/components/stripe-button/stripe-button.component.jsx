import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'; 

const StripeCheckoutButton = ({price}) => {
    // Stripe ulitize currency calculate in cent, you have to multiply by 100 for US one dollar
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nNrMg7PV4OMRAtEzUgu6gQpS';
    
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful!")
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(' There was an issue with your payment. Please make sure use provided credit card')
        });
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