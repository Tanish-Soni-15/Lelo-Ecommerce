import React from 'react'

const item = (props) => {
    const { item } = props
    return (
        

            <div className="w-full h-full flex flex-col items-center">
                <div className="h-[80%]">
                    <img className='h-full object-contain' src={item.image} />
                </div>
                <p className='text-[12px]'>{item.title}</p>
            </div>
        
    )
}

export default item