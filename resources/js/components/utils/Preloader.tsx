import { PropsWithChildren, useEffect, useRef } from 'react';

export const Preloader = ({ children }: {} & PropsWithChildren) => {
    const preloader = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (preloader.current) {
            window.addEventListener('load', () => {
                preloader.current!.remove();
            });
        }
    }, []);
    return (
        <>
            {children}
            <div id="preloader" ref={preloader}></div>
        </>
    );
};
