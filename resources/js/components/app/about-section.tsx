export const AppAboutSection = () => {
    return (
        <section id="about" className="about section">
            <div className="section-title container" data-aos="fade-up">
                <h2>About Us </h2>
                <p>
                    <span>Learn More</span> <span className="description-title">About Us</span>
                </p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                        <img src="/assets/img/about.jpg" className="img-fluid mb-4" alt="" />
                        <div className="book-a-table">
                            <h3>Book a Table</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
                        <div className="content ps-lg-5 ps-0">
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </li>
                                <li>
                                    <i className="bi bi-check-circle-fill"></i>{' '}
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                                </li>
                                <li>
                                    <i className="bi bi-check-circle-fill"></i>{' '}
                                    <span>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                    </span>
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                            </p>

                            <div className="position-relative mt-4">
                                <img src="assets/img/about-2.jpg" className="img-fluid" alt="" />
                                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
