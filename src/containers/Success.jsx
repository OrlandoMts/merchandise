import React from 'react';
import '@componentStyles/Success.css';

const Success = () => {
    return (
        <div className='Success'>
            <div className='Success-content'>
                <h2>NOMBRE, Gracias por tu compra</h2>
                <span>Tu pedido llegará en 3 días a tu dirección</span>
                <div className='Success-map'>
                    Google MAPS
                </div>
            </div>
        </div>
    )
}

export { Success }
