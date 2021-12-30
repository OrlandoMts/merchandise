import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Header.css';
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {

    const { state: {cart} } = useContext(AppContext);

    const quantityCart = useMemo(() => {
        return cart.length;
    }, [cart])

    return (
        <div className='Header'>
            <h1 className='Header-title'>
                <Link to='/'>
                Platzi Conf Merch
                </Link>
            </h1>
            <div className='Header-checkout'>
                <Link to='/checkout'>
                    <FaShoppingBasket title="checkout" size="1.5rem" />
                </Link>
                {quantityCart > 0 && <div className='Header-alert'>{quantityCart}</div>}
            </div>        
        </div>
    )
}

export { Header }
