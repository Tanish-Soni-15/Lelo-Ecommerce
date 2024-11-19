
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Navbar2 from './components/navbar2/Navbar2'
import Main from './pages/main/Main'
import Footer from './components/footer/Footer'
import Shop from './pages/Shop/Shop'
import Buy from './components/buy/Buy'
import Mainproduct from './pages/Product/index'
import Cart from './pages/cart/index'
import Singin from './components/Sign/Sign'
import Payment from './pages/payment/index'
import Singup from './components/Sign/Signup'
import About from './pages/about/index'
import Journal from './pages/journal/index'
import Contact from './pages/contact/index'
import ProctedRoutes from './services/proctedRoutes'
import Profile from './pages/profile/index'
import { TextProvider } from './pages/TextContext'
function App() {

  // const location=useLocation();
  // useEffect(()=>{
  //  if(location.pathname==='signin' || location.pathname==='signup'){
  //   setshowHeaderFooter(false);
  //  }
  //  else{
  //   setshowHeaderFooter(true);
  //  }
  // },[location.pathname])

  const [showHeaderFooter, setshowHeaderFooter] = useState(true)
  return (
    <>
      <BrowserRouter>
        <TextProvider>
          {showHeaderFooter === true &&

            <Navbar />
          }
          {showHeaderFooter === true &&
            <div className="">

              <Navbar2 />


              <Buy />

            </div>
          }

          <Routes>
            <Route exact={true} path='/' element={<ProctedRoutes />} >
              <Route exact={true} path='/' element={<Main setshowHeaderFooter={setshowHeaderFooter} />} />
            </Route >
            <Route exact={true} path='/shop' element={<Shop setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/shop/:goto' element={<Shop setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/about' element={<About setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/journal' element={<Journal setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/contact' element={<Contact setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/product/:id' element={<Mainproduct setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/cart' element={<Cart setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/payment' element={<Payment setshowHeaderFooter={setshowHeaderFooter} />} />


            <Route exact={true} path='/profile' element={<Profile setshowHeaderFooter={setshowHeaderFooter} />} />



            <Route exact={true} path='/signin' element={<Singin setshowHeaderFooter={setshowHeaderFooter} />} />
            <Route exact={true} path='/signup' element={<Singup setshowHeaderFooter={setshowHeaderFooter} />} />
          </Routes>
          {showHeaderFooter === true &&
            <Footer />
          }
        </TextProvider>
      </BrowserRouter>




    </>
  )
}

export default App
