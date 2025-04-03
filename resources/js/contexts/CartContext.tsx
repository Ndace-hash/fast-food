import { LOCAL_CART } from '@/lib/constants';
import { IMeal } from '@/types/meal';
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface ICartContext {
    cart: IMeal[];
    setCart: React.Dispatch<React.SetStateAction<IMeal[]>>;
}

const cartContext = createContext<ICartContext>({ cart: [], setCart: () => {} });

export const useCartContext = () => useContext(cartContext);
export const CartProvider: FC<{} & PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<IMeal[]>([]);
    useEffect(() => {
        if (!localStorage.getItem(LOCAL_CART)) {
            localStorage.removeItem(LOCAL_CART);
            localStorage.setItem(LOCAL_CART, JSON.stringify(cart));
            return;
        }
        const localCart = JSON.parse(localStorage.getItem(LOCAL_CART) as string);
        setCart(localCart);
    }, []);
    return <cartContext.Provider value={{ cart, setCart }}>{children}</cartContext.Provider>;
};
