import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'
import '../styles/components/Information.css';

const Information = () => {

    const { state:{cart}, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current); //Esto lo puedo enviar a un servidor.
        //Lo destructuro porque lo estoy manejando desde el front y estoy en local
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'city': formData.get('city'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        };
        addToBuyer(buyer);
        navigate('/checkout/payment');
    }

    return (
        <div className='Information'>
            <div className='Information-content'>
                <div className='Information-head'>
                    <h2>Información de contacto</h2>
                </div>
                <div className='Information-form'>
                    <form ref={form}>
                        <label htmlFor="name">
                            Nombre Completo
                            <input type="text" required placeholder='Nombre completo' name='name' id='name' />
                        </label>
                        <label htmlFor="email">
                            Correo electronico
                            <input type="email" required placeholder='Correo electronico' name='email' id='email' />
                        </label>
                        <label htmlFor="address">
                            Dirección
                            <input type="text" required placeholder="Dirección" name="address" id="address" />
                        </label>
                        <label htmlFor="apto">
                            APT
                            <input type="text" required placeholder="APT" name="apto" id="apto" />
                        </label>
                        <label htmlFor="country">
                            Pais
                            <input type="text" required placeholder="Pais" name="country" id="country" />
                        </label>
                        <label htmlFor="state">
                            Estado
                            <input type="text" required placeholder="Estado" name="state" id="state" />
                        </label>
                        <label htmlFor="city">
                            Ciudad
                            <input type="text" required placeholder="Ciudad" name="city" id="city" />
                        </label>
                        <label htmlFor="cp">
                            Codigo Postal
                            <input type="text" required placeholder="codigo Postal" name="cp" id="cp" />
                        </label>
                        <label htmlFor="phone">
                            Número telefonico
                            <input type="tel" required placeholder="Número telefonico" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </label>
                    </form>
                </div>
                <div className='Information-buttons'>
                    <div className='Information-back'>
                        <Link to='/checkout' replace>
                            Regresar
                        </Link>
                    </div>
                    <div className='Information-next'>
                        <button type='button' onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((item, index)=>(
                    <div className="Information-item" key={index}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Information }
