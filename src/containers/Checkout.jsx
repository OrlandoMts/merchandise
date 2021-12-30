import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';
import { TiTimesOutline } from 'react-icons/ti';

const Checkout = () => {

    const { state: {cart}, removeFromCart } = useContext(AppContext);

    const handleRemove = (payload, index) => {
        removeFromCart(payload, index);
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const quantityCart = useMemo(()=>{
        return cart.length;
    }, [cart])

    return (
        <div className='Checkout'>
            <div className='Checkout-content'>
                {quantityCart > 0 ? <h3>Lista de pedidos</h3> : <h3>No hay productos en el carrito</h3>}
                {cart.map((item, index) => (
                    <div className='Checkout-item' key={index}>
                        <div className='Checkout-element'>
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        
                        <button type='button' onClick={()=>handleRemove(item, index)}><TiTimesOutline title='Eliminar' size='1.5rem'/></button>
                    </div>
                ))}
            </div>
            {quantityCart > 0 && (
                <div className='Checkout-sidebar'>
                    <h3>Precio Total: ${handleSumTotal()}</h3>
                    <Link to='/checkout/information'>
                        <button type='button'>Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export { Checkout }
