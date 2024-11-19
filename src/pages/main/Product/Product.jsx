import React from 'react'
import './Product.css'
const Product = (props) => {
  const {product}=props;
  // {
  //   "id": 20,
  //   "title": "DANVOUY Womens T Shirt Casual Cotton Short",
  //   "price": 12.99,
  //   "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print, V-Neck, Fashion Tees, The fabric is soft and has some stretch. Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring, Summer, Autumn, Winter.",
  //   "category": "women's clothing",
  //   "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  //   "rating": {
  //     "rate": 3.6,
  //     "count": 145
  //   }
  // }
  if (!product || !product.rating ) {
    return <div>Loading...</div>; // or some placeholder
  }
  return (

              <div className="w-[200px] border-2 rounded-md hover:cursor-pointer product "  >
                <div className="w-full h-[200px] flex justify-center">
                  <img className='object-contain ' src={product.image} alt="" />
                </div>
                <div className="flex flex-col gap-[10px] px-3 pb-3 mt-3">
                  <p className='text-gray-600'>{product.title? product.title.slice(0,18)+"...":""}</p>
                  <h2 className='text-2xl font-semibold ' style={{ fontFamily: "unset" }}>{"₹"+Math.ceil(product.price*20)}</h2>
                  <span className='text-[12px] font-semibold text-center text-gray-600  bg-slate-100 rounded-md w-20 '>Free Delivery</span>
                  <div className="flex gap-1 items-center">
                    <div className="bg-[#038d63] text-white w-[38px] gap-1 rounded-2xl px-6 flex justify-center items-center ">
                      <span >{product.rating.rate}</span>
                      <span className='text-white'>
                        <svg className='w-[10px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='white'> <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                      </span>
                    </div>
                    <p className='text-sm text-gray-500 font-semibold '>{(product.rating.count?product.rating.count:'2353')+' Reviews' }  </p>
                  </div>
                </div>
              </div>
            
  )
}

export default Product