import { IMeal } from '@/types/meal';
import { FC } from 'react';
import { MenuItem } from '../menu/item';

export const AppMenuSection: FC<{ meals: IMeal[] }> = ({ meals }) => {
    return (
        <section id="menu" className="menu section">
            <div className="section-title container" data-aos="fade-up">
                <h2>Our Menu</h2>
                <p>
                    <span>Check Our</span> <span className="description-title">Yummy Menu</span>
                </p>
            </div>

            <div className="container">
                {/* <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                            <h4>Starters</h4>
                        </a>
                    </li>


                </ul> */}

                <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                    <div className="tab-pane fade active show" id="menu-starters">
                        {/* <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                        </div> */}

                        <div className="row gy-5">
                            {meals.map((meal) => (
                                <MenuItem key={meal.id} item={meal} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
