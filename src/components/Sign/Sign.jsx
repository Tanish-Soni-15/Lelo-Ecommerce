import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {Mycontext} from '../../App'
const Sign = (props) => {
  const history=useNavigate();
  // const context=useContext(Mycontext);
  const [inpval, setinpval] = useState({
    email: "",
    password: "" 
  })

  const [checkinp, setcheckinp] = useState(false);
  const [result, setresult] = useState(false);
  const [checkemail, setcheckemail] = useState(false)
  const getdata = (e) => {

    const { value, name } = e.target;
    if (name == "email") {
      setinpval(() => {
        return {
          ...inpval,
          [name]: value
        }
      })
      setcheckemail(validateEmail(value));
    }
    else {
      setinpval(() => {
        return {
          ...inpval,
          [name]: value
        }
      })
    }

  }
  const { setshowHeaderFooter } = props;
  const validateEmail = (emailAddress) => {
    // Simple email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailAddress);
  };

  useEffect(() => {
    setshowHeaderFooter(false);
  }, []);

  const submitdetail = (e) => {
    e.preventDefault();
    const getuserarr = localStorage.getItem("userdata");
    if (inpval.email.length == 0 || inpval.password.length < 6) {
      setcheckinp(true);
    }
    else {
      if (getuserarr && getuserarr.length > 0) {
        const userdata = JSON.parse(getuserarr);
        const validlogin = userdata.filter((item,k) => {
          return item.email === inpval.email && item.password === inpval.password
        })
        if(validlogin.length==0){
          alert("no user found first singup")
        }
        else{
          //setresult(true);
          history("/");
          localStorage.setItem("loggedin",true);
        }
      }
      //setresult(true);


    }

  }


  return (
    <div className="w-full h-screen  flex items-center justify-center " style={{ fontfamily: "DM Sans, sans-serif" }}>
      <div className="w-1/2 hidden lg:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-[#262626] px-10 flex flex-col gap-6 justify-center">
          <NavLink to="/">
            <h2 className='w-28 text-white font-semibold text-3xl'>Lelo</h2>
          </NavLink>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Stay sign in for more</h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">Get started fast with LELO</span><br />
              To get started with LELO web page, simply navigate to www.lelo.com and register/login with your email and password, or use social media authentication options like Google or Facebook
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">Access all LELO services</span><br />
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
              <span className="text-white font-semibold font-titleFont">Trusted by online Shoppers</span><br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <NavLink to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">© LELO</p>
            </NavLink>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Terms</p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Privacy</p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Security</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <form className="w-full lg:w-[450px] h-screen flex items-center justify-center">
          <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center " >
            {result == false &&
              <div className="" >

                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-3 ">Sign in</h1>
                <div className="flex flex-col gap-3 ">
                  <div className="flex flex-col gap-0.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">Work Email</p>
                    <input
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="email"
                      placeholder="john@workemail.com"
                      value={inpval.email}
                      name='email'
                      onChange={(e) => getdata(e)}
                      required
                    />
                  </div>
                  {inpval.email.length == 0 && checkinp == true &&


                    <p className='text-red-600'>!Enter your email</p>

                  }
                  {inpval.email.length > 0 && checkinp == true && checkemail == false &&
                    <p className='text-red-600'>Please given a valid Email!</p>
                  }
                  <div className="flex flex-col gap-0.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">Password</p>
                    <input
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="password"
                      placeholder="Create password"
                      value={inpval.password}
                      name='password'
                      onChange={(e) => getdata(e)}
                      required
                    />

                  </div>
                  {inpval.password.length == 0 && checkinp == true &&


                    <p className='text-red-600'>!Create a password</p>

                  }
                  {checkinp == true && inpval.password.length > 0 && inpval.password.length < 6 && (
                    <p className="text-red-600">!Passwords must be at least 6 characters</p>
                  )}
                  <button type='submit' disabled={!inpval.email || !inpval.password} onClick={(e) => submitdetail(e)} className="bg-[#262626] hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300">
                    Sign In
                  </button>
                </div>





                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account? <NavLink to="/signup"><span className="hover:text-blue-600 duration-300">Sign up</span></NavLink>
                </p>
              </div>
            }
            {result == true &&
              <div className="">
                <p className='text-[#22c55e] mb-6'>Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at {inpval.email}</p>
                <button type='submit' onClick={(e) => submitdetail(e)} className="bg-[#262626] hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300">
                  Sign Up
                </button>
              </div>
            }
          </div>

        </form>
      </div >
    </div >

  )
}

export default Sign