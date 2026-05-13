export default function CheckoutStepper() {
    //const [activeStep, setActiveStep] = useState(0)

    return (
        <div className="w-[50%] h-25">
            <ul className="w-full h-full relative flex flex-row items-center justify-center gap-x-2">
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                        <span className="size-7 flex justify-center items-center shrink-0 font-medium rounded-full group-focus:-focus">
                            <span>1</span>
                        </span>
                        <span className="ms-2 text-sm font-medium">
                            Address
                        </span>
                    </span>
                    <div className="w-full h-px flex-1 group-last:hidden"></div>
                </li>

                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                        <span className="size-7 flex justify-center items-center shrink-0 font-medium rounded-full group-focus:-focus">
                            <span>2</span>
                        </span>
                        <span className="ms-2 text-sm font-medium">
                            Shipping
                        </span>
                    </span>
                    <div className="w-full h-px flex-1 group-last:hidden"></div>
                </li>

                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                        <span className="size-7 flex justify-center items-center shrink-0 font-medium rounded-full group-focus:-focus">
                            <span>3</span>
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