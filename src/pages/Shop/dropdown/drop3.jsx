import React, { useState } from 'react'
import { useRef } from 'react';

const drop3 = (props) => {
    const [search, setsearch] = useState('')
    const {items}=props;
    
    const handleSearchChange=(e)=>{
        setsearch(e.target.value);
    }
    const filteredItems=items.filter((item)=>
        item.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className='  w-full max-h-[90vh] overflow-y-scroll  bg-white  mt-1 z-20'>
        {items.length>6 &&
        <div className="">
            <input className='w-full border-2 border-gray-400 outline-none rounded-sm my-3 py-1 px-3' type="text" value={search} placeholder='Search' onChange={(e)=>handleSearchChange(e)} />
        </div>
}
        <ul className='w-full flex flex-col  gap-3 '>
            {
                filteredItems.map((item,index)=>(
                     <div className="">
                        <input type="checkbox" id={"check"+index} />
                        <label className='ml-[8px] text-[16px] text-gray-600' htmlFor={"check"+index}>{item}</label>
                     </div>
                ))
            }
        </ul>
    </div>
  )
}

export default drop3;