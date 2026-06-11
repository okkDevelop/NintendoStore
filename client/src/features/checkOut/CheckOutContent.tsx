import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { ChevronLeft, Truck, ChevronRight, CreditCard, Receipt } from "lucide-react";
import { useState } from "react";
import OrderSummary from "../../app/shared/components/OrderSummary";
import CheckoutStepper from "./CheckoutStepper";
import type { User } from "../../app/models/user";
import { useUserInfoQuery } from "../account/accountApi";
import { useNavigate } from "react-router-dom";
import { useClearCartMutation } from "../cart/cartApi";

export default function CheckOutContent({ clientSecret }: { clientSecret: string }) {
    const [activeStep, setActiveStep] = useState(0);
    const stripe = useStripe();
    const elements = useElements();

    const [paymentMethod, setPaymentMethod] = useState<'card' | 'tng'>('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    const { data: user } = useUserInfoQuery();

    const handleNext = () => setActiveStep(step => step + 1);
    const handleBack = () => setActiveStep(step => step - 1);

    const navigate = useNavigate();
    const [clearCart] = useClearCartMutation();

    const handleSubmitPayment = async (
        e: React.SubmitEvent<HTMLFormElement>,
        user: User) =>
    {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);
        setPaymentError(null);

        if (paymentMethod === 'card') {
            const cardNumberElement = elements.getElement(CardNumberElement);
            if (!cardNumberElement) {
                setIsProcessing(false);
                return;
            }

            const result = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: cardNumberElement,
                        billing_details: {
                            name: user.email
                        },
                    },
                }
            );

            if (result.error) {
                setPaymentError(result.error.message || 'An error occurred during payment.');
                setIsProcessing(false);
            }
            else {
                if (result.paymentIntent.status === 'succeeded') {
                    try {
                        await clearCart().unwrap();
                        console.log("cart has clear")
                        navigate('/checkoutResult?status=succeeded');
                    } catch (error) {
                        console.error("Cart clear failed", error);
                        navigate('/checkoutResult?status=succeeded');
                    }
                } else {
                    navigate('/checkoutResult?status=failed');
                }            
            }
        }
        else if (paymentMethod === 'tng') {
            console.log("Processing Touch 'n Go checkout sequence...");
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full h-auto flex items-center justify-center">
            <div className="w-full max-w-295 h-auto py-10 px-5
                flex flex-col items-center justify-between gap-10
                border-b border-gray-200"
            >
                <CheckoutStepper currentStep={activeStep} />

                <div className="w-full h-auto flex flex-row gap-3 items-start">
                    <div className="w-[70%] p-4 flex flex-col gap-10">
                        {activeStep === 0 && (
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Shipping address</span>
                                    <span className="font-bold">Required field</span>
                                </div>

                                <div className="w-full h-auto p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
                                    <div className="flex flex-row justify-between gap-5">
                                        <div className="w-full flex flex-col">
                                            <span className="font-bold">First name</span>
                                            <input
                                                type="text"
                                                placeholder="First name"
                                                className="h-13 pl-4 font-bold outline outline-gray-500 rounded-lg bg-white"
                                            />
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <span className="font-bold">Lastname</span>
                                            <input
                                                type="text"
                                                placeholder="Last name"
                                                className="h-13 pl-4 font-bold outline outline-gray-500 rounded-lg bg-white"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold">Street address</span>
                                        <input
                                            type="text"
                                            placeholder="Street address"
                                            className="w-full h-13 pl-4 font-bold outline outline-gray-500 rounded-lg bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 1 && (
                            <div className="w-full h-auto p-5 bg-gray-100 rounded-lg flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className="font-bold">Shipping address</span>
                                    <div className="flex flex-row items-center justify-between">
                                        <span>Shipping address here</span>
                                        <span>buyer Name here</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="font-bold">Billing address</span>
                                    <div className="flex flex-row items-center justify-between">
                                        <span>Billing address here</span>
                                        <span>buyer Name here</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeStep === 2 && (
                            <form
                                id="payment-form"
                                onSubmit={(e) => handleSubmitPayment(e, user)}
                                className="w-full h-auto rounded-lg flex flex-col items-center justify-center gap-5"
                            >
                                <label className={`w-full h-15 rounded-lg p-5 flex flex-row items-center gap-5 outline outline-2 text-lg font-bold cursor-pointer ${paymentMethod === 'card' ? 'outline-red-500 bg-red-50/10' : 'outline-gray-200'
                                    }`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={() => setPaymentMethod('card')}
                                    />
                                    <span>Card</span>
                                </label>

                                <label className={`w-full h-15 rounded-lg p-5 flex flex-row items-center gap-5 outline outline-2 text-lg font-bold cursor-pointer ${paymentMethod === 'tng' ? 'outline-red-500 bg-red-50/10' : 'outline-gray-200'
                                    }`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="eWallet"
                                        checked={paymentMethod === 'tng'}
                                        onChange={() => setPaymentMethod('tng')}
                                    />
                                    <span>Touch n go</span>
                                </label>

                                {paymentMethod === 'card' && (
                                    <div className="w-full p-5 bg-white border border-gray-300 rounded-lg flex flex-col gap-4 shadow-sm">
                                        <span className="font-bold text-gray-700 text-lg">Secure Card Details</span>

                                        <div className="flex flex-col gap-1 w-full">
                                            <span className="text-sm font-bold text-gray-600">Card Number</span>
                                            <div className="h-13 px-4 border border-gray-400 rounded-lg flex items-center bg-gray-50/50">
                                                <CardNumberElement className="w-full" options={{ style: { base: { fontSize: '16px' } } }} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 w-full">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm font-bold text-gray-600">Expiration Date</span>
                                                <div className="h-13 px-4 border border-gray-400 rounded-lg flex items-center bg-gray-50/50">
                                                    <CardExpiryElement className="w-full" options={{ style: { base: { fontSize: '16px' } } }} />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm font-bold text-gray-600">Security Code (CVC)</span>
                                                <div className="h-13 px-4 border border-gray-400 rounded-lg flex items-center bg-gray-50/50">
                                                    <CardCvcElement className="w-full" options={{ style: { base: { fontSize: '16px' } } }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                        )}

                        {paymentError && (
                            <div className="text-red-600 font-bold text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                                {paymentError}
                            </div>
                        )}

                        <div className="w-full h-auto flex flex-row items-center justify-between">
                            {activeStep !== 0 ? (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="w-40 h-13 outline outline-red-500 text-lg rounded-lg cursor-pointer p-3"
                                >
                                    {activeStep === 1 ? (
                                        <div className="w-full h-full flex flex-row gap-3 items-center justify-center">
                                            <ChevronLeft className="text-red-500" size={30} />
                                            <span className="text-red-500 font-bold">Address</span>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex flex-row gap-3 items-center justify-center">
                                            <ChevronLeft className="text-red-500" size={30} />
                                            <span className="text-red-500 font-bold">Shipping</span>
                                        </div>
                                    )}
                                </button>
                            ) : (
                                <div className="w-40" />
                            )}

                            <button
                                onClick={() => {
                                    if (activeStep === 2) {
                                        document.getElementById('payment-form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                                    } else {
                                        handleNext();
                                    }
                                }}
                                disabled={activeStep === 2 && (isProcessing || !stripe)}
                                className="w-40 h-13 flex flex-row bg-red-500 text-lg rounded-lg cursor-pointer text-white items-center justify-center"
                            >
                                {activeStep === 0 ? (
                                    <div className="w-full h-full flex flex-row gap-1 items-center justify-center">
                                        <Truck size={20} />
                                        <span className="font-bold">Shipping</span>
                                        <ChevronRight size={30} />
                                    </div>
                                ) : activeStep === 1 ? (
                                    <div className="w-full h-full flex flex-row gap-1 items-center justify-center">
                                        <CreditCard size={20} />
                                        <span className="font-bold">Payment</span>
                                        <ChevronRight size={30} />
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex flex-row gap-1 items-center justify-center">
                                        <Receipt size={20} />
                                        <span className="font-bold">{isProcessing ? 'Processing...' : 'Place Order'}</span>
                                        <ChevronRight size={30} />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="w-90 sticky top-0 h-fit shrink-0">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}