export const AppContactSection = () => {
    return (
        <section id="contact" className="contact section">
            <div className="section-title container" data-aos="fade-up">
                <h2>Contact</h2>
                <p>
                    <span>Need Help?</span> <span className="description-title">Contact Us</span>
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                            <i className="icon bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                            <i className="icon bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                            <i className="icon bi bi-clock flex-shrink-0"></i>
                            <div>
                                <h3>Opening Hours </h3>
                                <p>
                                    <strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="600">
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                        </div>

                        <div className="col-md-6">
                            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="col-md-12">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                        </div>

                        <div className="col-md-12">
                            <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
                        </div>

                        <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>

                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
