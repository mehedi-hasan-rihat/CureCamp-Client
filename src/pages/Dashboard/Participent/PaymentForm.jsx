import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./stripe.css";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
export default function StripeForm({ camp, setIsOpen, refetch }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    getPaymentIntent();
  }, []);


  const getPaymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post("/payment-intent", {
        campId: camp.campId,
      });

      setClientSecret(data.clientSecret);
      console.log(data.clientSecret);
    } catch (err) {
      console.log(err, camp);
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
        await axiosSecure.post("/payments", {
          participantName: user?.displayName,
          participantEmail: user?.email,
          participantId: camp?._id,
          tnxId: paymentIntent.id,
        });
        toast.success("Order Succesfull");
        setIsOpen(false);
        refetch()
        
      } catch (err) {
        console.log(err);
      } finally {
        // setProcessing(false)
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
        >{`Pay :  ${10}`}</Button>

       
          <Button onClick ={() => {
            setIsOpen(false)
          }} type="button" variant="outline">
            Cancle
          </Button>
    
      </div>
    </form>
  );
}
