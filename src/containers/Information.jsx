import React from 'react';
import '../styles/components/Information.css'

const Information = () => {
    return (
        <div className='Information'>
            <div className='Information-content'>
                <div className='Information-head'>
                    <h2>Información de contacto</h2>
                </div>
                <div className='Information-form'>
                    <form action="">
                        <label htmlFor="name">
                            Nombre Completo
                            <input type="text" placeholder='Nombre completo' name='name' id='name' />
                        </label>
                        <label htmlFor="email">
                            Correo electronico
                            <input type="email" placeholder='Correo electronico' name='email' id='email' />
                        </label>
                        <label htmlFor="address">
                            Dirección
                            <input type="text" placeholder="Dirección" name="address" id="address" />
                        </label>
                        <label htmlFor="apto">
                            APT
                            <input type="text" placeholder="APT" name="apto" id="apto" />
                        </label>
                        <label htmlFor="country">
                            Pais
                            <input type="text" placeholder="Pais" name="country" id="country" />
                        </label>
                        <label htmlFor="state">
                            Estado
                            <input type="text" placeholder="Estado" name="state" id="state" />
                        </label>
                        <label htmlFor="city">
                            Ciudad
                            <input type="text" placeholder="Ciudad" name="city" id="city" />
                        </label>
                        <label htmlFor="cp">
                            Codigo Postal
                            <input type="text" placeholder="codigo Postal" name="cp" id="cp" />
                        </label>
                        <label htmlFor="phone">
                            Número telefonico
                            <input type="tel" placeholder="Número telefonico" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </label>
                    </form>
                </div>
                <div className='Information-buttons'>
                    <div className='Information-back'>
                        Regresar
                    </div>
                    <div className='Information-next'>
                        Pagar
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Information }
