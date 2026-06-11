import { useMemo } from "react";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { useFetchCartQuery } from "../cart/cartApi";
import { useCreatePaymentIntentMutation } from "./checkoutApi";
import { Elements } from '@stripe/react-stripe-js';
import CheckOutContent from "./CheckOutContent";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function CheckOutPage() {
    const { data: cart } = useFetchCartQuery();
    const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();

    const options: StripeElementsOptions | undefined = useMemo(() => {
        if (!cart?.clientSecret)
            return undefined;

        return { clientSecret: cart.clientSecret };
    }, [cart?.clientSecret]);

    if (!stripePromise || !options || isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-gray-500">Loading checkout...</p>
            </div>
        );
    }

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckOutContent clientSecret={cart.clientSecret} />
        </Elements>
    );
}