import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            //Conserva todos los elementos que su indice no sea igual al indice del item en el map de Checkout
            //La "comparacion" es entre el indice del cart y el indice que esta generando el map
            cart: state.cart.filter((_payload, indexCurrent) => indexCurrent !== indexToRemove)
        });
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    }
};

export { useInitialState }