import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
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
            </div>        
        </div>
    )
}

export { Header }
