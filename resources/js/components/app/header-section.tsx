import { useEffect, useRef } from 'react';

export const AppHeader = () => {
    const mobileNavToggleBtn = useRef<HTMLElement>(null);
    const selectHeader = useRef<HTMLDivElement>(null);

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        if (
            !selectHeader.current!.classList.contains('scroll-up-sticky') &&
            !selectHeader.current!.classList.contains('sticky-top') &&
            !selectHeader.current!.classList.contains('fixed-top')
        )
            return;

        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    function mobileNavToogle() {
        document.querySelector('body')!.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.current!.classList.toggle('bi-list');
        mobileNavToggleBtn.current!.classList.toggle('bi-x');
    }
    useEffect(() => {
        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);
    }, []);
    useEffect(() => {
        mobileNavToggleBtn.current!.addEventListener('click', mobileNavToogle);

        /**
         * Hide mobile nav on same-page/hash links
         */
        document.querySelectorAll('#navmenu a').forEach((navmenu) => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToogle();
                }
            });
        });

        /**
         * Toggle mobile nav dropdowns
         */
        document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
            navmenu.addEventListener('click', function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle('active');
                this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
                e.stopImmediatePropagation();
            });
        });
    }, []);
    useEffect(() => {
        /**
         * Navmenu Scrollspy
         */
        const navmenulinks = [...document.querySelectorAll('.navmenu a')] as HTMLAnchorElement[];

        function navmenuScrollspy() {
            navmenulinks.forEach((navmenulink) => {
                if (!navmenulink.hash) return;
                const section = document.querySelector<HTMLDivElement>(navmenulink.hash);
                if (!section) return;
                const position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                    document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'));
                    navmenulink.classList.add('active');
                } else {
                    navmenulink.classList.remove('active');
                }
            });
        }
        window.addEventListener('load', navmenuScrollspy);
        document.addEventListener('scroll', navmenuScrollspy);
    }, []);

    return (
        <header id="header" ref={selectHeader} className="header d-flex align-items-center sticky-top">
            <div className="position-relative d-flex align-items-center justify-content-between container">
                <a href="/" className="logo d-flex align-items-center me-xl-0 me-auto">
                    <h1 className="sitename">Fast Food</h1>
                    <span>.</span>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <a href="#hero" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#events">Events</a>
                        </li>
                        <li>
                            <a href="#chefs">Chefs</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Dropdown 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Dropdown 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Dropdown 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Dropdown 2</a>
                                </li>
                                <li>
                                    <a href="#">Dropdown 3</a>
                                </li>
                                <li>
                                    <a href="#">Dropdown 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" ref={mobileNavToggleBtn}></i>
                </nav>

                <a className="btn-getstarted" href="/#book-a-table">
                    Book a Table
                </a>
            </div>
        </header>
    );
};
