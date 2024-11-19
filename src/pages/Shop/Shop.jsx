import React from 'react'
import Sort from './sort/index'
import { useState,useEffect } from 'react'
import Product from '../main/Product/Product'
import data from '../../data/data.json'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Shop = (props) => {
  useEffect(()=>{
    props.setshowHeaderFooter(true);
  },[])
  const [products, setproducts] = useState(data.products2);
  const { goto } = useParams();
  const [sortedproducts, setsortedproducts] = useState([]);
const [sortoption, setsortoption] = useState("default")
  useEffect(() => {
    let filteredProducts;
    console.log(goto+"jjjjj")

    if (goto === 'all' || !goto) {
      filteredProducts = data.products2;
    } else {
      filteredProducts = data.products2.filter((p) => p.category === goto);
    }

    setproducts(filteredProducts);
  }, [goto]);
  useEffect(()=>{
    let sortedList=[...products];
    if(sortoption==='lowToHigh'){
      sortedList.sort((a,b)=>a.price - b.price);
    }
    else if(sortoption==='highToLow'){
      sortedList.sort((a,b)=>b.price - a.price);
    }
    else if(sortoption==='rating'){
      sortedList.sort((a,b)=>b.rating.rate - a.rating.rate);
    }
    setsortedproducts(sortedList);
  },[products,sortoption])
  return (
    <div className=" w-full bg-white ">
      <div className='w-[98%] my-9 border-2 border-gray-200  mx-auto bg-white p-3'>
        <h2 className='text-primeColor text-5xl font-titleFont font-bold'>Products</h2>
        <p className="text-sm font-normal text-lightText capitalize flex items-center mt-3">
          <span> </span>
          <span className="">
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
          <span className="capitalize font-semibold text-primeColor">shop</span>
        </p>
        <div className="flex w-full py-3">
          <div className="w-[25%] ">
            <Sort setsortoptions={setsortoption}/>
            </div>
            <div className="flex w-[75%] h-min flex-wrap gap-5 justify-between mt-3">
            {sortedproducts.map((product,index)=>(
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
  )
}

export default Shop