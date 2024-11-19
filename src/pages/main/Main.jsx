import React from 'react'
import { useEffect } from 'react'
import Slider from './Slider/index'
import data from '../../data/data.json'
import { NavLink } from 'react-router-dom'
import Productfour from './Productfour/index'
import ProductList from './ProductList/ProductList'
import Product from './Product/Product'
import datafour from '../../data/item.json';
const Main = (props) => {
 const backtotop=()=>{
  window.scrollTo(0, 0);
  console.log("hel")
 }
 useEffect(()=>{
  props.setshowHeaderFooter(true);
},[])
   return (
    <div className='relative  overflow-hidden'>
      <Slider />
      
      <div className="w-full bg-[#dfdfdf] flex justify-center">
        <div className="w-[97vw] flex gap-6 my-6 flex-col">
          <div className="flex w-full flex-wrap gap-5 justify-between">
            {
              datafour.products.map((p)=>(
                <Productfour product={p}/>
              ))
            }
          </div>
          <ProductList />
          <div className="w-full bg-white p-3 ">
            <h2 className='text-2xl font-normal'>Products For You</h2>
            <div className="flex w-full flex-wrap gap-5 justify-between mt-3">
              {data.products.map((product,index)=>(
                <NavLink to={'/product/'+(product.id)}>
                <div className="" key={index}>
                <Product product={product} />
                </div>
                </NavLink>
              ))
              
             }
            </div>
          </div>


        </div>
      </div>
      <button className='w-full h-9 text-center bg-[#404040] text-white' onClick={backtotop}>
       Back to top
      </button>
    </div>
  )
}

export default Main