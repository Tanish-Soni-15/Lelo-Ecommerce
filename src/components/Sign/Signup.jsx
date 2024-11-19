import React from 'react'
import { useState,useEffect } from 'react'
import {  NavLink } from 'react-router-dom';
const Signup = (props) => {
    const { setshowHeaderFooter } = props;

    // Hide the header and footer when the component loads
    useEffect(() => {
      setshowHeaderFooter(false);
    }, []);
  
    // State for storing the user data array from localStorage
    const [fulldata, setfulldata] = useState(() => {
      const data = JSON.parse(localStorage.getItem("userdata")) || [];
      return data;
    });
  
    // State for the current input values
    const [inpval, setinpval] = useState({
      name: '',
      country: '',
      city: "",
      code: "",
      number: "",
      email: "",
      password: "",
      address: "",
    });
  
    // State for input validation and other checks
    const [checkinp, setcheckinp] = useState(false);
    const [result, setresult] = useState(false);
    const [checkemail, setcheckemail] = useState(false);
    const [ischecked, setischecked] = useState(false);
  
    // Handle form input changes
    const getdata = (e) => {
      const { value, name } = e.target;
      
      setinpval(prevState => ({
        ...prevState,
        [name]: value
      }));
      
      // Check email validation
      if (name === "email") {
        setcheckemail(validateEmail(value));
      }
    };
  
    // Validate the email format using a simple regex
    const validateEmail = (emailAddress) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(emailAddress);
    };
  
    // Handle the form submission
    const submitForm = (e) => {
      e.preventDefault();
  
      // Check if all fields are filled out correctly
      if (
        inpval.name.length === 0 ||
        inpval.country.length === 0 ||
        inpval.city.length === 0 ||
        inpval.code.length === 0 ||
        inpval.number.length === 0 ||
        inpval.email.length === 0 ||
        inpval.password.length < 6 ||
        inpval.address.length === 0
      ) {
        setcheckinp(true); // Display error if any field is invalid
      } else {
        // Form is valid
        setresult(true);
        
        // Append the new user data to the existing array
        const updatedData = [...fulldata, inpval];
  
        // Update state and save the new data to localStorage
        setfulldata(updatedData);
        console.log(updatedData)
        localStorage.setItem("userdata", JSON.stringify(updatedData));
  
        // Optionally, reset the form fields after submission
       
      }
    };
  
    // Handle checkbox toggle (for any specific checkbox functionality)
    const handleChecked = (e) => {
      setischecked(e.target.checked);
    };
  
    return (
        <div className="font-bodyFont">
            <div className="w-full h-screen flex items-center justify-start">
                <div className="w-1/2  hidden lg:inline-flex h-full text-white">
                    <div className="w-[450px] h-full bg-[#262626]  px-10 flex flex-col gap-6 justify-center">
                        <NavLink to="/">
                            <h2 className='w-28 text-white font-semibold text-3xl'>Lelo</h2>
                        </NavLink>
                        <div className="flex flex-col gap-1 -mt-1">
                            <h1 className="font-titleFont text-xl font-medium">Get started for free</h1>
                            <p className="text-base">Create your account to access more</p>
                        </div>
                        <div className="w-[300px] flex items-start gap-3">
                            <span className="text-green-500 mt-1">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                </svg>
                            </span>
                            <p className="text-base text-gray-300">
                                <span className="text-white font-semibold font-titleFont">Get started fast with LELO</span>
                                <br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
                            </p>
                        </div>
                        <div className="w-[300px] flex items-start gap-3">
                            <span className="text-green-500 mt-1">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                </svg>
                            </span>
                            <p className="text-base text-gray-300">
                                <span className="text-white font-semibold font-titleFont">Access all LELO services</span>
                                <br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
                            </p>
                        </div>
                        <div className="w-[300px] flex items-start gap-3">
                            <span className="text-green-500 mt-1">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                </svg>
                            </span>
                            <p className="text-base text-gray-300">
                                <span className="text-white font-semibold font-titleFont">Trusted by online Shoppers</span>
                                <br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-10">
                            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">© LELO</p>
                            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Terms</p>
                            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Privacy</p>
                            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Security</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[500px] h-full flex flex-col justify-center">
                    <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
                        {result == false &&
                            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                                <h1 className="font-titleFont  underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-3xl mb-4">Create your account</h1>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Full Name</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="text"
                                            placeholder="eg. John Doe"
                                            value={inpval.name}
                                            name='name'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.name.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter your name</p>

                                        }
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Work Email</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="email"
                                            placeholder="john@workemail.com"
                                            value={inpval.email}
                                            name='email'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.email.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter your email</p>

                                        }
                                        {inpval.email.length>0 && checkinp==true && checkemail==false &&
                                            <p className='text-red-600'>Please given a valid Email!</p>
                                        }
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Phone Number</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="text"
                                            placeholder="008801234567891"
                                            maxLength={10}
                                            value={inpval.number}
                                            name='number'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.number.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter your phone number </p>

                                        }
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Password</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="password"
                                            placeholder="Create password"
                                            value={inpval.password}
                                            name='password'
                                            onChange={(e) => getdata(e)}


                                        />
                                        {inpval.password.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Create a password</p>

                                        }
                                        {ischecked && inpval.password.length > 0 && inpval.password.length < 6 && (
                                            <p className="text-red-600">!Passwords must be at least 6 characters</p>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Address</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="text"
                                            placeholder="road-001, house-115, example area"
                                            value={inpval.address}
                                            name='address'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.address.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter your address</p>

                                        }
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">City</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="text"
                                            placeholder="Your city"
                                            value={inpval.city}
                                            name='city'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.city.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter your city name</p>

                                        }
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Country</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="text"
                                            placeholder="Your country"
                                            value={inpval.country}
                                            name='country'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.country.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter the country you are residing</p>

                                        }
                                    </div>
                                    <div className="flex flex-col gap-.5">
                                        <p className="font-titleFont text-base font-semibold text-gray-600">Zip/Postal code</p>
                                        <input
                                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                            type="text"
                                            placeholder="Your Postal code"
                                            value={inpval.code}
                                            name='code'
                                            onChange={(e) => getdata(e)}
                                        />
                                        {inpval.code.length == 0 && checkinp == true &&


                                            <p className='text-red-600'>!Enter the zip code of your area</p>

                                        }
                                    </div>
                                    <div className="flex items-start mdl:items-center gap-2">
                                        <input className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer" checked={ischecked} type="checkbox" onChange={(e) => handleChecked(e)} />
                                        <p className="text-sm text-primeColor">
                                            I agree to the LELO <span className="text-blue-500">Terms of Service </span>and{" "}
                                            <span className="text-blue-500">Privacy Policy</span>.
                                        </p>
                                    </div> 
                                     <button disabled={ischecked == false && inpval.password == 0} onClick={(e) => submitForm(e)} type='submit' className={`${ischecked ? 'bg-black hover:bg-gray-800 cursor-pointer  text-white' : 'bg-gray-500 text-gray-200 hover:bg-gray-500 hover:text-gray-200 cursor-none'}  w-full  text-base font-medium h-10 rounded-md  duration-300`}>
                                        Create Account
                                    </button>
                                    <p className="text-sm text-center font-titleFont font-medium">
                                        Don't have an Account?{" "}
                                        <NavLink to="/signin">
                                            <span className="hover:text-blue-600 duration-300">Sign in</span>
                                        </NavLink>
                                    </p> 
                                </div>
                            </div>}
                        {result == true &&
                            <div className="">
                                <p className='text-[#22c55e] mb-6'>{`Hello dear ${inpval.name} , Welcome you to LELO Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${inpval.email}`}</p>
                                <button type='submit'  className="bg-[#262626] hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300">
                                    Sign In
                                </button>
                            </div>
                        } 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup