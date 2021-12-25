import React from 'react';
import initialState from '../initialState';
import { Products } from '../components/Products';

const Home = () => {
    return (
        <div className='Home'>
            <Products products={initialState.products}/>
        </div>
    )
}

export { Home }
