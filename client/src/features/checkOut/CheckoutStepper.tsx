import { Check } from "lucide-react";

export default function CheckoutStepper({ currentStep }: { currentStep: number }) {
    return (
        <div className="w-[50%] h-25">
            <ul className="w-full h-full relative flex flex-row items-center justify-center gap-x-2">
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                        <span className="w-auto h-auto flex justify-center items-center font-medium rounded-full group-focus:-focus">
                            <span className={`w-7 h-7 rounded-full outline outline-gray-200 
                                    flex items-center justify-center font-bold
                                    ${currentStep == 0 ?
                                "text-gray-400 bg-blue-900"
                                :
                                "text-white bg-gray-600"}`
                            }>
                                {currentStep > 0 ? 
                                    <Check></Check>
                                    :
                                    1
                                }
                            </span>
                        </span>
                        <span className="ms-2 text-sm font-medium">
                            Address
                        </span>
                    </span>
                    <div className="w-full h-px flex-1 group-last:hidden"></div>
                </li>

                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                        <span className={`w-7 h-7 rounded-full outline outline-gray-200 
                                    flex items-center justify-center font-bold
                                ${currentStep < 1
                                ? "text-gray-700 bg-white"
                                : currentStep === 1
                                    ? " text-white bg-blue-900"
                                    : " text-white bg-gray-700"
                            }`
                        }>
                            {currentStep > 1 ?
                                <Check></Check>
                                :
                                2
                            }
                        </span>
                        <span className="ms-2 text-sm font-medium">
                            Shipping
                        </span>
                    </span>
                    <div className="w-full h-px flex-1 group-last:hidden"></div>
                </li>

                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                        <span className={`w-7 h-7 rounded-full outline outline-gray-200 
                                    flex items-center justify-center font-bold
                                    ${currentStep == 2 ?
                                "text-white bg-blue-900"
                                :
                                "text-gray-400 bg-white"}`
                        }>
                        3                          
                        </span>
                        <span className="ms-2 text-sm font-medium">
                            Payment
                        </span>
                    </span>
                    <div className="w-full h-px flex-1 group-last:hidden"></div>
                </li>
            </ul>
        </div>
    )
}