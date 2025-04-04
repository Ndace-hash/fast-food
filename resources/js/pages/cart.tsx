import { AppHeader } from '@/components/app/header-section';
import { CartItem } from '@/components/cart-item';
import { useCartContext } from '@/contexts/CartContext';
import { Head } from '@inertiajs/react';

const Cart = () => {
    const { cart } = useCartContext();
    return (
        <>
            <Head title="Cart" />
            <AppHeader />
            <section className="mx-4 my-2">
                {cart.map((item) => (
                    <CartItem meal={item} />
                ))}
            </section>
            <section className="px-4">
                <a href="/checkout" className="rounded-sm bg-red-600 px-6 py-2 font-bold text-white uppercase duration-200 ease-in hover:shadow-lg">
                    CHECKOUT
                </a>
            </section>
        </>
    );
};

export default Cart;
