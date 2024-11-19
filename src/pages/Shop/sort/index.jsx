import React from 'react'
import { useState } from 'react';
import Dropdown from '../dropdown/index'
import { ClickAwayListener } from '@mui/material';
import Sort1 from '../dropdown/sort1';
import Sort2 from '../dropdown/sort2';
const index = (props) => {
    const {setsortoptions}=props;
    const sort = ["Relevance", "New Arrivals",
        "Price (High to Low)",
        "Price (Low to High)",
        "Ratings",
        "Discount"];
const price=[
   "Under ₹ 149"
,"Under ₹ 199"
,"Under ₹ 249"
,"Under ₹ 299"
,"Under ₹ 349"
,"Under ₹ 399"
,"Under ₹ 449"
,"Under ₹ 499"
,"Under ₹ 99"
,"₹ 0 - ₹ 99"
,"₹ 100 - ₹ 149"
,"₹ 150 - ₹ 199"
]
const catagory=[
    "Women T-shirts"
    ,"Ayurvedic"
    ,"Women Tops And Tunics"
    ,"Analog Watches"
    ,"Ayurvedic Products"
    ,"Baby Teeth & Dental Care"
    ,"Babydolls"
    ,"Bags & Backpacks"
    ,"Bangles & Bracelets"
    ,"Cross Body Bags & Sling Bags"
    ,"Dresses"
    ,"Earrings & Studs"
    ,"Hair Accessories"
    ,"Handbags"
    ,"Heels & Sandals"
    ,"Jeans"
    ,"Jewellery Set"
    ,"Keychains"
    ,"Kids - Boys Tshirts & Polos"
    ,"Kids Toys"
    ,"Kitchen Storage"
    ,"Kitchen Tools"
    ,"Kurti Fabric"
    ,"Kurtis"
    ,"Mangalsutras"
    ,"Men Chains"
    ,"Men Jewellery"
    ,"Men Shirts"
    ,"Men Sunglasses"
    ,"Men T-shirts"
    ,"Mobile Cases & Covers"
    ,"Nighties"
    ,"Paintings & Posters"
    ,"Posters & Paintings"
    ,"Reusable Bags"
    ,"Sarees"
    ,"Shirts"
    ,"Slingbags"
    ,"Small Travel Bags"
    ,"Suits & Dress Materials"
    ,"Sunglasses"
    ,"T-shirts"
    ,"Tops And Bottom Sets"
    ,"Tops And Tunics"
    ,"Wallets"
    ,"Women Analog Watches"
    ,"Women Bangles & Bracelets"
    ,"Women Kurtis"
    ,"Women Slingbag"
    ,"Women Sunglasses"
]
const size=[
    "L"
,"M"
,"S"
,"Xl"
,"Xs"
]
    const gender = [
        "Boys",

        "Girls",

        "Men",

        "Women"
    ]
    const color = [
        "  Beige"
        , "Black"
        , "Brown"
        , "Combo Of Different Color"
        , "Gold"
        , "Grey"
        , "Khaki"
        , "Maroon"
        , "Multicolor"
        , "Nude"
        , "Olive",
        "Orange"
    ]
    const [show, setshow] = useState(false);
    const [val, setval] = useState("Relevance");

    const [show1, setshow1] = useState(false);
    return (
        <div className='w-[90%] py-3 relative'>
            <ClickAwayListener onClickAway={() => setshow(false)}>
                <div className="">
                    <div className=" border-2 w-full  px-4 py-1 flex justify-between items-center cursor-pointer " onClick={() => setshow(!show)}>

                        <div className="">
                            <span className='text-gray-500 text-[15px]'>Sort by : </span>
                            <span className='font-medium text-[15px]'>{val}</span>
                        </div>
                        <div className="w-[7px] cursor-pointer" style={{ transform: show == false ? "rotate(90deg)  " : "rotate(-90deg)" }}>
                            <svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" iconSize="12" ml="9.5" class="sc-pyfCe Selectstyled__StyledIcon-sc-j3bykl-6 hKPYyJ rGzWY"><path d="M.31.316a1.079 1.079 0 0 0 0 1.515l4.125 4.17-4.124 4.17a1.079 1.079 0 0 0 0 1.515 1.05 1.05 0 0 0 1.499 0l4.88-4.933a1.079 1.079 0 0 0 0-1.515L1.81.305a1.06 1.06 0 0 0-1.5.01Z" fill="#666"></path></svg>
                        </div>

                    </div>
                    {show == true &&
                        <Dropdown items={sort} sets={setshow} setvalue={setval} value={val} setsortoptions={setsortoptions}  />
                    }
                </div>
            </ClickAwayListener>
            <div className=" border-2 w-full  px-4 py-2 mt-3">
                <div className="">
                    <h4 className='font-medium text-[17px]'>FILTERS</h4>
                    <p className='text-gray-500 text-[14px]'>1000+ Products</p>
                    <hr className='my-3 h-[1px] bg-gray-400' />
                </div>
                <div className="">
                    <Sort1 title="Gender" items={gender} />
                    <hr className='my-3  h-[2px] bg-gray-300' />
                </div>
                <div className="">
                    <Sort1 title="Color" items={color} />
                    <hr className='my-3  h-[2px] bg-gray-300' />
                </div>
                <div className="">
                    <Sort1 title="Price" items={price} />
                    <hr className='my-3  h-[2px] bg-gray-300' />
                </div>
                <div className="">
                    <Sort2 title="Category" items={catagory}/>
                    <hr className='my-3  h-[2px] bg-gray-300' />
                </div>
                <div className="">
                    <Sort2 title="Size" items={size}/>
                    <hr className='my-3  h-[2px] bg-gray-300' />
                </div>
            </div>
        </div>
    )
}

export default index