export const AppGallerySection = () => {
    return (
        <section id="gallery" className="gallery section light-background">
            <div className="section-title container" data-aos="fade-up">
                <h2>Gallery</h2>
                <p>
                    <span>Check</span> <span className="description-title">Our Gallery</span>
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.jpg">
                                <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.jpg">
                                <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.jpg">
                                <img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.jpg">
                                <img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.jpg">
                                <img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.jpg">
                                <img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.jpg">
                                <img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.jpg">
                                <img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};
{
    /* <script type="application/json"  className="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "centeredSlides": true,
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 0
                },
                "768": {
                  "slidesPerView": 3,
                  "spaceBetween": 20
                },
                "1200": {
                  "slidesPerView": 5,
                  "spaceBetween": 20
                }
              }
            }
          </script>*/
}
