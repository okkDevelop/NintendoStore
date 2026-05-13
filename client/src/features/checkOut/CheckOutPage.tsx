import { useEffect, useMemo, useRef, useState } from "react";
import OrderSummary from "../../app/shared/components/OrderSummary";
import CheckoutStepper from "./CheckoutStepper";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { useFetchCartQuery } from "../cart/cartApi";
import { useCreatePaymentIntentMutation } from "./checkoutApi";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function CheckOutPage() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep(step => step + 1);
    };
    const handleBack = () => {
        setActiveStep(step => step - 1);
    };

    const { data: cart } = useFetchCartQuery();
    const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
    const create = useRef(false);

    useEffect(() => {
        if (!create.current)
            createPaymentIntent();

        create.current = true;
    }, [createPaymentIntent])

    const options: StripeElementsOptions | undefined = useMemo(() => {
        if (!cart?.clientSecret)
            return undefined

        return {
            clientSecret: cart.clientSecret
        }
    }, [cart?.clientSecret])

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            {!stripePromise || !options || isLoading ? (
                <p>loading checkout</p>
            ) :  (
                <CheckoutStepper></CheckoutStepper>
            )}
            <div className="w-full h-auto flex flex-row">
                
                <div className="w-[70%] p-4">
                    {activeStep === 0 &&
                        <div>
                            0
                        </div>
                    }
                    {activeStep === 1 &&
                        <div>
                            1
                        </div>
                    }
                    {activeStep === 2 &&
                        <div>
                            2
                        </div>
                    }
                </div>

                <div className="w-100 h-auto flex felx-col items-center justify-between">
                    <button
                        onClick={handleBack}
                        className="w-50 h-20 bg-red-500 text-lg">Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-50 h-20 bg-red-500 text-lg">Next
                    </button>
                </div>
                <OrderSummary></OrderSummary>
            </div>
        </div>
    )
}