import React from 'react';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,  // Enables auto-slide
        autoplaySpeed: 5000,  // 3 seconds per slide
        lazyLoad: 'ondemand'  // Optional: Improves performance for large images
    };

    return (
        <div>
            <Slider {...settings} className='slider-1'>
                <NavLink to="/shop">
                    <div key={1}>
                        <img src="banner-1.webp" alt="Slider 1" />
                    </div>
                </NavLink>
                <NavLink to="/shop">
                    <div key={2}>
                        <img src="banner-2.webp" alt="Slider 2" />
                    </div>
                </NavLink>
                <NavLink to="/shop">
                    <div key={3}>
                        <img src="banner-3.webp" alt="Slider 3" />
                    </div>
                </NavLink>

            </Slider>
        </div>
    );
}

export default HomeSlider;
