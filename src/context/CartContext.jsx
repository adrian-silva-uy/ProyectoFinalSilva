import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
})

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addToCart = (item, quantity) => {
        const isInCart = cart.find(prod => prod.item.id === item.id);

        if(!isInCart){
            setCart(prev => [...prev, {item, quantity}]);
            
            setTotalQuantity(prev => prev + quantity);
            setTotalPrice(prev => prev + (item.precio * quantity));
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity};
                } else {
                    return prod;
                }
            });
            setCart(cartUpdated);
            setTotalQuantity(prev => prev + quantity);
            setTotalPrice(prev => prev + (item.precio * quantity));
        }
    }

    const removeFromCart = (id) => {
        const removedItem = cart.find(prod => prod.item.id === id);
        const cartUpdated = cart.filter(prod => prod.item.id !== id);
        setCart(cartUpdated);
        setTotalQuantity(prev => prev - removedItem.quantity);
        setTotalPrice(prev => prev - (removedItem.item.precio * removedItem.quantity));
    } 

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotalPrice(0);
    }

    return (
        <CartContext.Provider value={{cart, totalPrice, totalQuantity, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}