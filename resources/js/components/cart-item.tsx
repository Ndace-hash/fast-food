import { IMeal } from '@/types/meal';
import { FC } from 'react';
import { Naira } from './utils/Naira';

export const CartItem: FC<{ meal: IMeal & { quantity?: number } }> = ({ meal }) => {
    return (
        <div className="mb-6 flex items-center justify-between rounded-md border-2 pe-4 shadow-sm">
            <div className="flex gap-4">
                <div className="h-[200px] w-[200px] overflow-hidden rounded-md border">
                    <img src={meal.image_url} alt={`Photo of ${meal.name}`} className="h-full w-full" />
                </div>
                <div className="py-2">
                    <h3>{meal.name}</h3>
                    <span>
                        Price: <Naira />
                        {meal.price}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <div role="button" className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full bg-green-100 shadow-sm">
                    <div className="scale-150">
                        <i className="bi bi-plus"></i>
                    </div>
                </div>
                <span className="text-2xl font-black">1</span>
                <div role="button" className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full bg-green-100 shadow-sm">
                    <div className="scale-150">
                        <i className="bi bi-dash"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
