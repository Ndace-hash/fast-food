import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { useEffect, useRef, type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const preloader = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (preloader.current) {
            window.addEventListener('load', () => {
                preloader.current!.remove();
            });
        }
    }, []);
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
            <div id="preloader" ref={preloader}></div>
        </AppLayoutTemplate>
    );
};
