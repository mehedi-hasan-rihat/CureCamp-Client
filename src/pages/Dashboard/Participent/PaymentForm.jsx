import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./stripe.css";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
export default function StripeForm({campId}) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const {user} = useAuth()
const axiosPublic = useAxiosPublic()
  useEffect(() => {
    getPaymentIntent();
  }, []);

  // console.log(clientSecret);


  const getPaymentIntent = async () => {
    try {
      const {data}  = await axiosPublic.post('/payment-intent',{
        campId: campId,
       }); 

      setClientSecret(data.clientSecret);
      console.log(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setProcessing(false);
      return console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });

    console.log(paymentIntent);
    if (paymentIntent?.status == "succeeded") {
      try {
      
        toast.success("Order Succesfull");
      } catch (err) {
        console.log(err);
      } finally {
        
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="mt-5"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="flex gap-5 mt-4">
        <Button
          className="text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >{`Pay :  ${ 10}`}</Button>
        <Button type='button'  variant="outline">
          Cancle
        </Button>
      </div>
    </form>
  );
}
