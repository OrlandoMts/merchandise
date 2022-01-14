import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { AppContext } from '../context/AppContext';
import { sumTotal } from '../utils/sumTotal';
import '@componentStyles/Payment.css';
import { pass } from '../pass';

const Payment = () => {

    const { state: {cart, buyer}, addNewOrder } = useContext(AppContext);
    const navigate = useNavigate();

    const paypalOptions = {
        clientId: pass.paypalPaymentCliendId, // Your PayPal REST client ID. While you're testing in sandbox, you can use client-id=sb as a shortcut.
        currency: "USD"
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'react'
    }

    const handlePaymentSuccess = data => {
        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }

            addNewOrder(newOrder);
            navigate('/checkout/success');
        }
    }

    return (
        <div className='Payment'>
            <div className='Payment-content'>
                <h3>Resumen del pedido:</h3>
                {cart.map((item, index) => (
                    <div className="Payment-item" key={index}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className='Payment-button'>
                    <PayPalButton 
                        createOrder={(data, actions) =>{
                            return actions.order.create({
                                intent: 'capture',
                                purchase_units: [{
                                  amount: {
                                    value: sumTotal(cart)
                                  }
                                }]
                              });
                        }}
                        options={paypalOptions}
                        buttonStyles={buttonStyles}
                        onStart={() => console.log('start payment')}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export { Payment }
