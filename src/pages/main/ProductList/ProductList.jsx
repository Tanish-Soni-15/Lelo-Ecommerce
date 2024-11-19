import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import data from '../../../data/data.json'
const ProductList = () => {
    console.log("dfljslfkdslf")
    const listref = useRef(null);
    const products = data.products2.filter((product) => product.id >= 62 && product.id < 78);

    const scroollist = (direction) => {
        const currentpo = direction * 1000;

        listref.current.scrollBy({

            left: currentpo,
            behavior: 'smooth',

        })
        console.log(listref.current);
    }
    return (
        <div className="bg-white h-[300px] w-[100%]  p-4" >
            <h2 className='text-xl font-semibold'>Best Sellers in Clothing, Shoes & Jewelry</h2>
            <div className="flex  relative h-full">
                <button onClick={() => scroollist(-1)} className=' h-[82px] top-[33%] w-[40px] bg-white hover:border-cyan-600 hover:border-2 text-white absolute ' style={{ boxShadow: "0 1px 3px #888" }}><svg className='h-7  mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                <ul ref={listref} className='gap-6 flex bg-white   items-center overflow-x-scroll scroll-smooth p-1'>

                    {products.map((product) => (
                        <NavLink className='h-full' to={'/product/' + (product.id)}>
                            <li className='h-full w-[200px]' style={{ flex: "0 0 auto" }}>
                                <img className='h-full mx-auto object-contain'
                                    src={product.image}
                                    height="200px"
                                />
                            </li>
                        </NavLink>
                    ))}

                </ul>
                <button onClick={() => scroollist(1)} className=' h-[82px] top-[33%] right-0 w-[40px] bg-white hover:border-cyan-600 hover:border-2 text-white absolute ' style={{ boxShadow: "0 1px 3px #888" }}>
                    <svg className='h-7 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
            </div>

        </div>
    );
};

export default ProductList;
