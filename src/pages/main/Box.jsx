import React from 'react'

const Box = (props) => {
    
  return (
    <div className="bg-[#f8f8f8] h-[370px] w-[290px] m-3 p-2">
    <h2 className='text-xl font-semibold m-2 '>{}</h2>
    <div className="flex flex-wrap gap-3 mt-2 m-2">
      <div className="w-[47%] hover:cursor-pointer">

        <div className="w-full h-2/5">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/QC/Sept11/pcqc_new_sports._SY232_CB563244637_.jpg" alt="Sports shoes" />
          <p className='text-[12px]'>Sports shoes</p>
        </div>
      </div>
      <div className="w-[47%] hover:cursor-pointer">

        <div className="w-full h-2/5">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/QC/Sept11/pcqc_jewl_hi._SY232_CB563244637_.jpg" alt="Sports shoes" />
          <p className='text-[12px]'>Jewellery & accessories</p>
        </div>
      </div>
      <div className="w-[47%] hover:cursor-pointer mt-3">

        <div className="w-full h-2/5">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/QC/Sept11/pcqc_watches_hi._SY232_CB563244637_.jpg" alt="Sports shoes" />
          <p className='text-[12px]'>Watches & smartwatches</p>
        </div>
      </div>
      <div className="w-[47%] hover:cursor-pointer mt-3">

        <div className="w-full h-2/5">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/QC/Sept11/PCQC_HB_HI._SY232_CB563244637_.jpg" alt="Sports shoes" />
          <p className='text-[12px]'>Bags, wallets & luggage</p>
        </div>
      </div>
    </div>
 <p className='text-[#007185] mt-5 m-2 text-[13px] hover:text-red-600 hover:cursor-pointer'>See more</p>
  </div>
  )
}

export default Box