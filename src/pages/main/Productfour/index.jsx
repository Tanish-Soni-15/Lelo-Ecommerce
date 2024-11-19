import React from 'react'
import Item from './item';
import { NavLink } from 'react-router-dom';
const index = (props) => {
    const { product } = props;
    console.log(product)
    return (
        <div className="bg-white h-[370px] w-[323px]  p-2">
            <h2 className='text-xl font-semibold m-2 '>{product.heading}</h2>
            <div className="flex flex-wrap gap-3 mt-2 m-2">
                {
                    product.items.map((i,index) => (
                        <NavLink className="w-[47%] h-[110px]" to={'/product/' + (i.id)}>
                            <div key={index} className="w-full h-full hover:cursor-pointer ">
                                <Item item={i} />
                            </div>
                        </NavLink>
                    ))
                }

            </div>
            <p className='text-[#007185] mt-5 m-2 text-[13px] hover:text-red-600 hover:cursor-pointer'>See more</p>
        </div>

    )
}

export default index