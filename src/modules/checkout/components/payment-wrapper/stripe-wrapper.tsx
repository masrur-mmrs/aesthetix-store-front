"use client"

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import { PaymentSession } from "@medusajs/medusa"
import { useState } from "react"

type StripeWrapperProps = {
    paymentSession: PaymentSession | null
    children: React.ReactNode
  }

const stripePromise = loadStripe("pk_test_51OtF9ZDL4f9DbLaDrN0TUZ6ovMQY2ictowzX5a0wn8M0GvmZbRpf9xZAOhAoV1YzNvDa8wL4SQfOwYBu0yRm2ZcL00hFjsKvK1")

const StripeWrapper: React.FC<StripeWrapperProps> = ({
    paymentSession,
    children,
  }) => {

    const [clientSecret, setClientSecret] = useState()

    const options: StripeElementsOptions = {
      clientSecret: paymentSession!.data?.client_secret as string | undefined,
    }
  
    // if (!stripeKey) {
    //   throw new Error(
    //     "Stripe key is missing. Set NEXT_PUBLIC_STRIPE_KEY environment variable."
    //   )
    // }
  
    if (!stripePromise) {
      throw new Error(
        "Stripe promise is missing. Make sure you have provided a valid Stripe key."
      )
    }
  
    if (!paymentSession?.data?.client_secret) {
      throw new Error(
        "Stripe client secret is missing. Cannot initialize Stripe."
      )
    }
  
    return (
      <Elements options={options} stripe={stripePromise}>
        {children}
      </Elements>
    )
  }

  export default StripeWrapper