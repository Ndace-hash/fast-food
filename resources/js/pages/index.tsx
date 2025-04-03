import { AppAboutSection } from '@/components/app/about-section';
import { AppContactSection } from '@/components/app/contact-section';
import { AppFooterSection } from '@/components/app/footer-section';
import { AppHeader } from '@/components/app/header-section';
import { AppHeroSection } from '@/components/app/hero-section';
import { AppMenuSection } from '@/components/app/menu-section';
import { AppTestimonialSection } from '@/components/app/testimonial-section';
import { AppWhyUsSection } from '@/components/app/why-us-section';
import { type SharedData } from '@/types';
import { IMeal } from '@/types/meal';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Welcome({ meals }: { meals: IMeal[] }) {
    const { auth } = usePage<SharedData>().props;

    console.log(meals);
    useEffect(() => {
        /**
         * Correct scrolling position upon page load for URLs containing hash links.
         */
        window.addEventListener('load', function (e) {
            if (window.location.hash) {
                if (document.querySelector(window.location.hash)) {
                    setTimeout(() => {
                        const section = document.querySelector<HTMLDivElement>(window.location.hash)!;
                        const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                        window.scrollTo({
                            top: section.offsetTop - parseInt(scrollMarginTop),
                            behavior: 'smooth',
                        });
                    }, 100);
                }
            }
        });
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <AppHeader />

            <main className="main">
                <AppHeroSection />
                <AppAboutSection />
                <AppWhyUsSection />
                {/* <AppStatsSection /> */}
                <AppMenuSection meals={meals} />
                <AppTestimonialSection />
                {/* <AppEventSection /> */}
                {/* <AppChefsSection /> */}
                {/* <AppBookTableSection /> */}
                {/* <AppGallerySection /> */}
                <AppContactSection />
            </main>

            <AppFooterSection />
        </>
    );
}
