import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { useGetAddress } from '../hooks/useGetAddress';
import '@componentStyles/Success.css';

const Success = () => {

    //Cambiar el estado de arrgelo a obj
    const {state: {buyer}} = useContext(AppContext);
    const location = useGetAddress(buyer.address);
    console.log("objeto buyer ", buyer);

    return (
        <div className='Success'>
            <div className='Success-content'>
                <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegará en 3 días a tu dirección</span>
                <div className='Success-map'>
                    <Map data={location}/>
                </div>
            </div>
        </div>
    )
}

export { Success }
