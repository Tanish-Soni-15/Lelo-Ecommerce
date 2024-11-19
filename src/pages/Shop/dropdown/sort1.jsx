import React from 'react'
import { useState } from 'react';

import Dropdown2 from './drop2'
const sort1 = (props) => {
    const {title,items}=props;
    const [show, setshow] = useState(false);

  return (
    <div>
         
                    <div className="relative">
                        <div className="  w-full   flex justify-between py-1 items-center cursor-pointer " onClick={() => setshow(!show)}>

                            <p className='font-medium text-[17px]'>{title}</p>
                            <div className="w-[7px] cursor-pointer" style={{ transform: show == false ? "rotate(90deg)  " : "rotate(-90deg)" }}>
                                <svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" iconSize="12" ml="9.5" class="sc-pyfCe Selectstyled__StyledIcon-sc-j3bykl-6 hKPYyJ rGzWY"><path d="M.31.316a1.079 1.079 0 0 0 0 1.515l4.125 4.17-4.124 4.17a1.079 1.079 0 0 0 0 1.515 1.05 1.05 0 0 0 1.499 0l4.88-4.933a1.079 1.079 0 0 0 0-1.515L1.81.305a1.06 1.06 0 0 0-1.5.01Z" fill="#666"></path></svg>
                            </div>

                        </div>
                        {show == true &&
                            <Dropdown2 items={items} s={setshow}  />
                        }
                    </div>

    </div>
  )
}

export default sort1