import React from 'react'
import { useRef } from 'react';
const index = (props) => {
    const sortop=["default","default","highToLow","lowToHigh","rating","default"];
    const {items,sets,setvalue,value,setsortoptions}=props;
    const setInput=(e,index)=>{
        sets(false);
        setvalue(e.target.outerText);
        console.log(sortop[index]);
        console.log("sorting option is showed")
        setsortoptions(sortop[index]);
        
    }
    
  return (
    <div className=' border-2 w-full rounded-[4px] absolute bg-white  mt-1 z-20'>
        <ul className='w-full'>
            {
                items.map((item,index)=>(
                     <li  onClick={(e)=>setInput(e,index)} className={'text-gray-500 text-[16px] w-full cursor-pointer hover:bg-[#f8f8ff]  px-4 py-[10px] '} key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default index