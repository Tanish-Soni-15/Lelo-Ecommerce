import React from 'react'

const index = (props) => {
    const { sizes,setprice} = props;
    const handleprice=(price)=>{
        setprice(price)
        console.log(price)
    }
    return (
 
        <div className="w-full border-2 rounded-md hover:cursor-pointer p-3 ">
            <h3 className='font-semibold text-lg  '>Select Size</h3>
            <div className=" flex gap-3 my-3 mt-4">
                {sizes.map((sizes,index) => (
                    <div onClick={()=>handleprice(sizes.price)} key={index} style={{ lineHeight: "17px" }} className="text-black flex flex-col justify-center   items-center  w-[60px] border-[1px] border-black rounded-3xl  cursor-pointer hover:bg-[#f8f8ff]  ">

                        <span className='font-semibold'>{sizes.size}</span>
                        <span className='text-sm '>{"₹"+Math.ceil(sizes.price)}</span>

                    </div>
                ))
                }
            </div>
        </div>

    )
}

export default index