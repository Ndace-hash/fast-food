import { useEffect, useRef } from 'react';

export const AppFooterSection = () => {
    /**
     * Scroll top button
     */
    const scrollTop = useRef<HTMLAnchorElement>(null);

    function toggleScrollTop() {
        if (scrollTop.current) {
            window.scrollY > 100 ? scrollTop.current!.classList.add('active') : scrollTop.current!.classList.remove('active');
        }
    }

    useEffect(() => {
        scrollTop.current!.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });

        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
    }, []);

    return (
        <>
            <footer id="footer" className="footer dark-background">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon"></i>
                            <div className="address">
                                <h4>Address</h4>
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>Contact</h4>
                                <p>
                                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                                    <br />
                                    <strong>Email:</strong> <span>info@example.com</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-clock icon"></i>
                            <div>
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Sat:</strong> <span>11AM - 23PM</span>
                                    <br />
                                    <strong>Sunday</strong>: <span>Closed</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4>Follow Us</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright container mt-4 text-center">
                    <p>
                        © <span>Copyright</span> <strong className="sitename px-1">Fast Food</strong> <span>All Rights Reserved</span>
                    </p>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by{' '}
                        <a href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </footer>

            <a href="#" id="scroll-top" ref={scrollTop} className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
};
