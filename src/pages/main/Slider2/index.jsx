import React from 'react';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ItemsSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        
    };

    return (
        <div className='bg-white h-[370px]'>
            <h2 className='text-xl font-semibold'>Best Sellers in Clothing, Shoes & Jewelry</h2>
            <ul>
            <Slider {...settings} className='slider-2'>
                <li key={1}>
                    <img src="https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY400_.jpg" alt="" />
                </li>
                <li key={2}>
                    <img src="https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY400_.jpg" alt="" />
                </li>
                <li key={3}>
                    <img src="https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY400_.jpg" alt="" />
                </li>
                <li key={4}>
                    <img src="https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY400_.jpg" alt="" />
                </li>
                <li key={5}>
                    <img src="https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY400_.jpg" alt="" />
                </li>
            </Slider>
            </ul>
        </div>
    );
}

export default ItemsSlider;
