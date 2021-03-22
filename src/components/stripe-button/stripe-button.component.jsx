import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IXdyJB9u9z1Asmvtwom6AcmdGxVYk6ZEJI2pDD3ZrO5sNGBYow6LOXd170i3U4abpPSqIDj54hqBP7mDa9TChpe00xwkCztgc'
    const onToken = token => {
        console.log(token);
        alert('Payment successful')

    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown-ltd'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >

        </StripeCheckout>
    )

}

export default StripeCheckoutButton;