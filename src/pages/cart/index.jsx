import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TextContext } from '../TextContext';
const index = (props) => {
  useEffect(()=>{
    props.setshowHeaderFooter(true);
  },[])
  const {setcount}=useContext(TextContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cartItems, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [subtotal, setsubtotal] = useState(0);

  useEffect(()=>{
    const t=cartItems.reduce((total,item)=>{
      return total+(item.price*item.quantity)
    },0);
    setsubtotal(t);
  },[cartItems])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const a= Object.keys(cartItems).length;
    setcount(a);
  }, [cartItems]);


  const removecartItem = (id) => {
    setcartItems(cartItems.filter((item) => item.id !== id));
  }
  const updateQuantity = (id, quantity) => {
    quantity >= 1 &&
      setcartItems(cartItems.map((item) => (
        item.id === id ? { ...item, quantity: quantity } : item

      )))
  };
  const resetCartItems = () => {
    setcartItems([]);
  }


  return (
    <div className="max-w-container mx-auto px-4">
      {/* Cart Header */}
      <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
        <h1 className="text-5xl text-primeColor font-titleFont font-bold">Cart</h1>
        <p className="text-sm font-normal text-lightText capitalize flex items-center">
          <span> </span>
          <span className="px-1">
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
          <span className="capitalize font-semibold text-primeColor">cart</span>
        </p>
      </div>
      {cartItems.length === 0 &&
        <div className="flex flex-col md:flex-row  justify-center items-center gap-4 pb-20" style={{opacity:"1",transition:"none"}}>
          <div>
            <img className="w-80 rounded-lg p-4 mx-auto" src="https://orebishopping.reactbd.com/static/media/emptyCart.230e4848b62fb3cab325.png" alt="emptyCart" />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">Your Cart feels lonely.</h1>
            <p className="text-sm text-center px-10 -mt-2">Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.</p>
            <NavLink to="/shop"><button className="bg-gray-900 rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">Continue Shopping</button></NavLink>
          </div>
        </div>
      }

      {/* Cart Items */}
      {cartItems.length !== 0 &&
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>

          {/* Cart Item Example */}
          {cartItems.map(item => (
            <div className="mt-5" key={item.id}>
              <div className="w-full flex justify-between mb-4 border py-2">
                <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
                  <svg onClick={() => removecartItem(item.id)} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="text-primeColor hover:text-red-500 duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.854 12.854l-4.854-4.854 4.854-4.854c0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114l-4.854 4.854-4.854-4.854c-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178l4.854 4.854-4.854 4.854c-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114l4.854-4.854 4.854 4.854c0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                  </svg>
                  <div className="border-2 border-gray-300">
                    <img className="w-32 h-32 object-contain " src={item.image} alt="productImage" />
                  </div>

                  <h1 className="font-titleFont font-semibold">{item.title}</h1>
                </div>
                <div className="col-span-5 w-[61%] mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
                  <div className="flex w-1/3 items-center text-lg font-semibold">{"₹ " + Math.ceil(item.price )}</div>
                  <div className="w-1/3 flex items-center gap-6 text-lg">
                    <span className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</span>
                    <p>{item.quantity}</p>
                    <span className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</span>
                  </div>
                  <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                    <p>{"₹ " + Math.ceil(item.quantity * item.price )}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Reset Cart Button */}
          <button onClick={resetCartItems} className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300">
            Reset cart
          </button>

          {/* Coupon & Total Section */}
          <div className="flex flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-4">
              <input className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400" type="text" placeholder="Coupon Number" />
              <p className="text-sm mdl:text-base font-semibold">Apply Coupon</p>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>

          {/* Cart Totals */}
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal <span className="font-semibold tracking-wide font-titleFont">{"₹ " + Math.ceil(subtotal )}</span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge <span className="font-semibold tracking-wide font-titleFont">₹20</span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total <span className="font-bold tracking-wide text-lg font-titleFont">{"₹ " + (Math.ceil(subtotal )+20)}</span>
                </p>
              </div>
              <div className="flex justify-end">
                <NavLink to="/payment">
                  <button className="w-52 h-10 bg-[#262626] text-white hover:bg-black duration-300">
                    Proceed to Checkout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default index;
