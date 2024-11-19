import React from 'react'
import { useState } from 'react'
import './Footer.css'
const Footer = () => {
    const [a, seta] = useState(0)
    const [email, setemail] = useState('');
    const [isValid, setisValid] = useState(false);
    const [value, setvalue] = useState("flex")
    const validateEmail = (emailAddress) => {
        // Simple email validation using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(emailAddress);
    };
    const checkemail = (e) => {
        e.preventDefault();
        const valid = validateEmail(email);
        setisValid(valid);
        if (valid == true) {
            setvalue('none');
        }
    }

    const handlechange = (e) => {
        setemail(e.target.value);
        seta(1);
    }
    return (
        <div className="w-full pt-20 pb-10 text-[black] bg-[#f5f5f3]">
            <div className='px-10 flex w-full gap-16 flex-wrap '>
                <div className="flex flex-col gap-5 w-[290px]">
                    <h2 className='text-lg font-semibold '>More about Lelo Shop</h2>
                    <p className='text-sm'>Our shop is an online platform designed for seamless buying and selling of goods and services. </p>
                    <img className='w-40' src="app.PNG" alt="" />
                </div>
                <div className="min-w-[220px]">
                    <h2 className='text-lg font-semibold '>Shop</h2>
                    <ul className='mt-[18px] uu'>
                        <li>Accesories</li>
                        <li>Clothes </li>
                        <li>Electronics </li>
                        <li>Home applian </li>
                        <li>New Arrivals </li>
                    </ul>
                </div>
                <div className="min-w-[250px]">
                    <h2 className='text-lg font-semibold '>Your account</h2>
                    <ul className='mt-[18px] uu'>
                        <li>Profile </li>
                        <li>Orders </li>
                        <li>Addresses </li>
                        <li>Account Details </li>
                        <li>Payment Options </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h2 className='text-lg font-semibold '>Subscribe to our newsletter.</h2>
                    <p>A at pellentesque et mattis porta enim elementum.</p>
                    <div className="flex gap-3 flex-wrap sub " style={{ display: value }}>
                        <input value={email} onChange={(e) => handlechange(e)} placeholder='Insert your email..' type="email" className='bg-inherit border-b-[1px] outline-none border-b-[#ddd] w-52' />
                        <button type='submit' className='bg-white p-1 px-2 hover:text-white hover:bg-black text-black hover:cursor-pointer ' onClick={checkemail}>Subscribe</button>

                    </div>
                    {a == 1 ?
                        !isValid ? <span className='text-red-700'>Please given a valid Email!</span> : <span className='text-green-600 font-semibold'>Subscribed Successfully !</span>
                        : <span></span>
                    }
                    <img className='w-[300px]' src="payment.png" alt="" />
                </div>
                
            </div>
            <hr className='mt-16'/>
            <div className="flex mx-auto justify-center mt-8 ">
                <p className='text-sm text-gray-600'>Copyright 2024 | Lelo shopping | All Rights Reserved |</p>
                <p className='text-sm text-black'>Powered by ReactBD.com</p>
            </div>
        </div>
    )
}

export default Footer