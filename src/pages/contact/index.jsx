import React from 'react'
import { useState,useEffect } from 'react'
const index = (props) => {
    useEffect(()=>{
        props.setshowHeaderFooter(true);
      },[])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [fname, setfname] = useState('')
    const [email, setemail] = useState('')
    const [checkemail, setcheckemail] = useState(false)
    const [result, setresult] = useState(false)
    const [checkinp, setcheckinp] = useState(false)
    const submitForm = (e) => {
        e.preventDefault();
        if (fname.length == 0 || email.length == 0 || checkemail==false) {
            setcheckinp(true);
        }
        else {

            setresult(true);

        }
    }
    const handleEmail = (e) => {
        setemail(e.target.value);
        setcheckemail(validateEmail(e.target.value));
    }
    const handleName = (e) => {
        setfname(e.target.value);
    }
    const validateEmail = (emailAddress) => {
        // Simple email validation using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(emailAddress);
    };
    return (
        <div className='px-10'>
            <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
                <h1 className="text-5xl text-primeColor font-titleFont font-bold">Contact</h1>
                <p className="text-sm font-normal text-lightText capitalize flex items-center">
                    <span className='text-gray-600'>Shop </span>
                    <span className="px-1">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                    <span className="capitalize font-semibold text-primeColor">Contact</span>
                </p>
            </div>
            <form className="pb-20">
                {result == false &&
                    <div className="">
                        <h1 className="font-titleFont font-semibold text-3xl">Fill up a Form</h1>
                        <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
                            <div>
                                <p className="text-base font-titleFont font-semibold px-2">Name</p>
                                <input className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                                    type="text"
                                    placeholder="Enter your name here"
                                    value={fname}
                                    onChange={(e) => handleName(e)} />
                                {fname.length == 0 && checkinp == true &&
                                    <p className='text-red-600'>!Enter your name</p>
                                }
                            </div>
                            <div>
                                <p className="text-base font-titleFont font-semibold px-2">Email</p>
                                <input className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor" type="email" placeholder="Enter your name here" value={email}
                                    onChange={(e) => handleEmail(e)} />
                                {email.length == 0 && checkinp == true &&


                                    <p className='text-red-600'>!Enter your email</p>

                                }
                                {email.length > 0 && checkinp == true && checkemail == false &&
                                    <p className='text-red-600'>Please given a valid Email!</p>
                                }
                            </div>
                            <div>
                                <p className="text-base font-titleFont font-semibold px-2">Messages</p>
                                <textarea cols="30" rows="3" className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none" type="text" placeholder="Enter your name here"></textarea>
                            </div>
                            <button onClick={(e) => submitForm(e)} className="w-44 bg-[#262626] text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200">Post</button>
                        </div>
                    </div>
                }
                {
                    result == true &&
                    <div className="w-[400px]">
                        <p className='text-[#22c55e] mb-6'>{`Thank you dear ${fname}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`}</p>

                    </div>
                }

            </form>
        </div>
    )
}

export default index