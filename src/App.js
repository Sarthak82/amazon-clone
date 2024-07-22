import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51PewTMRtILcKi97dRPuWuuUIkpQc1bQm4qJKdvEBRbnEx9Z8Ki2StqraGRHcD1tSUOEdt4DbG2dCucVjBEP8w4wJ003rDA0SiK')


function App() {

    const [{},dispatch] = useStateValue();
    useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
    },[])
    
    return (
      <Router>
        <div className="app">
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/payment' element={[<Header/>,
                <Elements stripe={promise}> <Payment/> </Elements>]}/>
            <Route path="/checkout" element={[<Header />,<Checkout/>]}/>
            <Route path="/" element={[<Header/>,<Home />]}/>
            <Route path="*" element={[<Header/>,<NotFound />]} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
