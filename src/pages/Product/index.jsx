import React from 'react'
import Size from './size/index'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { TextContext } from '../TextContext'
import data from '../../data/data.json'
const index = (props) => {
    useEffect(()=>{
        props.setshowHeaderFooter(true);
      },[])
    const { id } = useParams();
    const {setcount}=useContext(TextContext);

    const product = parseInt(id) <= 40 ?
        data.products.find((p) => p.id === parseInt(id)) : data.products2.find((p) => p.id === parseInt(id));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [cartItems, setcartItems] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        return savedCart;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(()=>{
        setcount( Object.keys(cartItems).length);
    });


    // Add product to cart function
    const addToCart = (product) => {
        const itemincart = cartItems.find((i) => i.id === product.id);
        setcount( Object.keys(cartItems).length);
        
        if (itemincart) {
            const updatedCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setcartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
        } else {
            const updatedCart = [...cartItems, { ...product, quantity: 1, price: itemprice }];
            setcartItems(updatedCart);
           
            localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
        }
    };


    const sizes = [
        {
            size: "S",
            price: product.price * 20
        },
        {
            size: "M",
            price: product.price * 21
        },
        {
            size: "L",
            price: product.price * 21
        },
        {
            size: "XL",
            price: product.price * 21
        }

    ]
    const [itemprice, setitemprice] = useState(product.price * 20);
    console.log(itemprice)
    return (
        <div className='w-screen'>
            <div className="w-[90%] mx-auto flex justify-center ">

                <div className="w-[40%] p-5  ">
                    <div className="w-full">
                        <div className="">
                            <div className="w-full h-[410px] border-2 border-gray-300 flex justify-center rounded-sm">
                                <img className='object-contain' src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="w-full flex gap-4 justify-center mt-6">
                            <button onClick={() => addToCart(product)} className='border-2 w-[45%] border-black bg-white text-black py-3 px-4 rounded-sm text-center '>

                                Add to Cart
                            </button>
                            <button className='border-2 w-[45%] bg-black border-black text-white py-3 px-4 rounded-sm'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-[55%] p-5 flex flex-col gap-3">
                    <div className="w-full border-2 rounded-md hover:cursor-pointer  "  >

                        <div className="flex flex-col gap-[10px] px-3 pb-3 mt-3">
                            <p className='text-gray-600 font-semibold'>{product.title}</p>
                            <h2 className='text-2xl font-semibold ' style={{ fontFamily: "unset" }}>{"₹" + Math.ceil(itemprice)}</h2>
                            <span className='text-[12px] font-semibold text-center text-gray-600  bg-slate-100 rounded-md w-20 '>Free Delivery</span>
                            <div className="flex gap-1 items-center">
                                <div className="bg-[#038d63] text-white w-[38px] gap-1 rounded-2xl px-6 flex justify-center items-center ">
                                    <span >{product.rating.rate}</span>
                                    <span className='text-white'>
                                        <svg className='w-[10px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='white'> <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                    </span>
                                </div>
                                <p className='text-sm text-gray-500 font-semibold '>{(product.rating.count ? (product.rating.count * 34) : '2353') + ' Reviews'}</p>
                            </div>
                        </div>
                    </div>
                    {(product.category == "footwear" || product.category == "outdoor & sports" || product.category == "womenfashion" || product.category == "menfashion") ?
                        <Size sizes={sizes} setprice={setitemprice} />
                        : <div className="w-full border-2 rounded-md hover:cursor-pointer p-3 ">
                            <h3 className='font-semibold text-lg  '>Select Size</h3>
                            <div style={{ lineHeight: "15px" }} className="text-black  w-[82px] border-[1px] border-black rounded-3xl p-2  my-3  cursor-pointer hover:bg-[#f8f8ff]  ">

                                <span className='font-semibold'>Free size</span>


                            </div>
                        </div>
                    }
                    <div className="h-[70%] w-full border-2 rounded-md hover:cursor-pointer p-3">
                         <h2 className='font-semibold text-lg'>Product Details</h2>
                         <div className="py-3">
                         <p className='text-gray-600  text-[15px]'>Name : {product.title}</p>
                         <p className='text-gray-600  text-[15px]'>{product.description}</p>
                         <p className='text-gray-600  text-[15px]'>Country of Origin : India</p>
                         </div>
                    </div>
                    <div className="">
                        <img src="/price.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index