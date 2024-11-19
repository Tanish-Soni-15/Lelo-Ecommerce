import React from 'react'
import { useRef } from 'react';
const drop2 = (props) => {
    const {items,sets,setvalue,value}=props;
    const setInput=(e)=>{
        sets(false);
        setvalue(e.target.outerText);
        console.log(e.target);
        
    }
  return (
    <div className='  w-full   bg-white  mt-1 z-20'>
        <ul className='w-full flex flex-wrap gap-3'>
            {
                items.map((item,index)=>(
                     <li onClick={(e)=>setInput(e)} className={'text-black  text-[14px] border-2 rounded-2xl  cursor-pointer hover:bg-[#f8f8ff] px-[12px]  py-[7px] '} key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default drop2;