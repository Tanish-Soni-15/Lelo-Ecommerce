import React, { useState } from 'react';
import './Dropdown/'
import { NavLink } from 'react-router-dom';
const Dropdown = (props) => {
    const { items, selectDropDown, setselectDropDown } = props;
    const [search, setsearch] = useState('');
    const goto = ["all", "accessories", "menfashion", "electronics", "menfashion", "jewelery", "womenfashion"]
    const handleSearchChange = (e) => {
        setsearch(e.target.value);
    };

    // Filter the items based on the search query
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative z-30 ">
            {selectDropDown && (
                <div className="absolute bg-[#262626] text-[#767676] p-4 left-6 top-[33px] w-full z-10">
                    <input
                        type="text"
                        value={search}
                        placeholder="Search..."
                        className="w-full mb-2 outline-none bg-inherit border-[1px] pl-[2px] p-[1px] "
                        onChange={handleSearchChange}
                    />
                    <ul>
                        {filteredItems.map((item, index) => (
                            <NavLink to={'/shop/' + (goto[index])}>
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
