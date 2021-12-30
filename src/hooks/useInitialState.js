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

    return {
        addToCart,
        removeFromCart,
        state
    }
};

export { useInitialState }