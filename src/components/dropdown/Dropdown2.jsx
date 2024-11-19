import React from 'react';
import { NavLink } from 'react-router-dom';
const Dropdown = (props) => {
    const { items, selectDropDown, setselectDropDown } = props;
    const goto = [
        "signin", "signup", "profile", ""
    ]
    return (
        <div className="relative z-30">
            {selectDropDown && (
                <div className="absolute bg-[#262626] text-[#767676] p-4 left-6 top-[33px] w-full z-10">
                    <ul>
                        {items.map((item, index) => (
                            <NavLink to={`/`+goto[index]}>
                                <li
                                    key={index}
                                    onClick={() => setselectDropDown(false)}
                                    className="text-gray-400 hover:text-white hover:cursor-pointer hover:border-b-white w-full h-[30px] mb-[2px] border-b-[1px] text-sm border-b-gray-400"
                                >
                                    {item}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
