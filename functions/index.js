/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");


const sk1 = "sk_test_51PewTMRtILcKi97dIjfFkKER7rmUEAfa2rYPj49wDim";
const sk2= "7wGQYIPeoixa6cYDecmzvc8GTNGsck7CQv7WqpSwk6Ntg00Xfl1UYgG";
const sk = sk1 + sk2;
const stripe = require("stripe")(sk);

// API


// App config
const app =express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response)=>{
  const total =request.query.total;
  console.log("Payment request received for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commands
exports.api = functions.https.onRequest(app);
