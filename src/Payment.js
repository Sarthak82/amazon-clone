import React, { useEffect, useState } from "react";
import './Payment.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { useNavigate } from 'react-router-dom';


function Payment() {

    const Navigate=useNavigate()
    const stripe =useStripe()
    const element =useElements()
    const [{basket,user},dispatch]=useStateValue()
    const [processing, setProcessing]=useState("")
    const [succeeded, setSucceeded]=useState(false)
    const [error, setError]=useState(null)
    const [disabled, setDisabled]=useState(null)
    const [clientSecret, setClientSecret]=useState(true)

    useEffect(()=>{
        // genrate the special stripe secret which allows us to charge a customer
        const getClinetSecret = async () => {
            try {
                const response = await axios({
                    method: 'post',
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret)
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching client secret:', error);
            }
        };

        getClinetSecret()
    },[basket])

    console.log("Clinet secret is",clientSecret)
   
    const handleSubmit= async (event)=>{
        event.preventDefault();
        setProcessing(true)    


        const payload=await stripe.confirmCardPayment(clientSecret,{payment_method:{
            card:element.getElement(CardElement),
        }}).then(({paymentIntent})=>{
            // payment intent is payment conformation

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            Navigate('/orders')
        })
    }

    const handleChange= e=>{
        // listen to cganges in card element
        // display any errors as the cust changes their card details
        setDisabled(e.empty)
        setError(e.error?e.error.message:"")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Line</p>
                        <p>LA, CA</p>
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                        )}
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="payment__detials">
                        {/* Stripe goes here */}

                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                                {error && <div>{error}</div>}
                        </form>


                    </div>
                </div>        
            </div>
        </div>
    )
}


export default Payment