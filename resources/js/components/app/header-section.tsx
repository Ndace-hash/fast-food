import { useEffect, useRef } from 'react';

export const AppHeader = () => {
    const mobileNavToggleBtn = useRef<HTMLElement>(null);

    function mobileNavToogle() {
        document.querySelector('body')!.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.current!.classList.toggle('bi-list');
        mobileNavToggleBtn.current!.classList.toggle('bi-x');
    }
    useEffect(() => {
        mobileNavToggleBtn.current!.addEventListener('click', mobileNavToogle);
    }, []);
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
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
