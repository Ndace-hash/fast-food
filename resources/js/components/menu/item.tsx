import { useCartContext } from '@/contexts/CartContext';
import { IMeal } from '@/types/meal';
import { FC } from 'react';
import { Naira } from '../utils/Naira';
// interface MenuItemProps {
//     name: string;
//     price: number;
//     image_url: string;
// }

export const MenuItem: FC<{ item: IMeal }> = (props) => {
    const { item } = props;
    const { cart, setCart } = useCartContext();
    return (
        <div className="col-lg-4 menu-item">
            <a href={item.image_url} className="glightbox">
                <img src={item.image_url} className="menu-img img-fluid" alt={`Photo of ${item.name}`} />
            </a>
            <h4 className="capitalize">{item.name}</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">
                <Naira />
                {item.price}
            </p>

            <button
                className="rounded-2xl bg-red-600 px-2 py-1 font-semibold text-white uppercase"
                onClick={() => {
                    const updatedCart = [...cart, item];
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    setCart(updatedCart);
                }}
            >
                <i className="bi bi-cart-plus me-2"></i>
                Add To cart
            </button>
        </div>
    );
};
