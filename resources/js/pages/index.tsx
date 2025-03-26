import { AppAboutSection } from '@/components/app/about-section';
import { AppBookTableSection } from '@/components/app/book-table-section';
import { AppChefsSection } from '@/components/app/chefs-section';
import { AppContactSection } from '@/components/app/contact-section';
import { AppEventSection } from '@/components/app/event-section';
import { AppFooterSection } from '@/components/app/footer-section';
import { AppGallerySection } from '@/components/app/gallery-section';
import { AppHeader } from '@/components/app/header-section';
import { AppHeroSection } from '@/components/app/hero-section';
import { AppMenuSection } from '@/components/app/menu-section';
import { AppStatsSection } from '@/components/app/stats-section';
import { AppTestimonialSection } from '@/components/app/testimonial-section';
import { AppWhyUsSection } from '@/components/app/why-us-section';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

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
            <Head title="Welcome" />
            <AppHeader />

            <main className="main">
                <AppHeroSection />
                <AppAboutSection />
                <AppWhyUsSection />

                <AppStatsSection />
                <AppMenuSection />
                <AppTestimonialSection />
                <AppEventSection />
                <AppChefsSection />
                <AppBookTableSection />
                <AppGallerySection />
                <AppContactSection />
            </main>

            <AppFooterSection />
            <div id="preloader" ref={preloader}></div>
        </>
    );
}
