import { useState } from "react";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const [trigger400Error] = useLazyGet400ErrorQuery();
    const [trigger401Error] = useLazyGet401ErrorQuery();
    const [trigger404Error] = useLazyGet404ErrorQuery();
    const [trigger500Error] = useLazyGet500ErrorQuery();
    const [triggerValidationError] = useLazyGetValidationErrorQuery();

    const getValidationError = async () => {
        try {
            await triggerValidationError().unwrap();
        }
        catch (error: unknown) {
            if (error && typeof error === 'object' && 'message' in error && typeof (error as { message: unknown }).message === 'string')
            {
                const errorArray = (error as { message: string}).message.split(', ');
                setValidationErrors(errorArray);
            }
        }
    }

    return (
        <div className="w-full h-200 flex flex-col gap-5">
            <button onClick={() => trigger400Error().catch((error) => console.error(error))} className="w-40 h-10 bg-red-500 text-white">
                Trigger 400 Error
            </button>
            <button onClick={() => trigger401Error().catch((error) => console.error(error))} className="w-40 h-10 bg-red-500 text-white">
                Trigger 401 Error
            </button>
            <button onClick={() => trigger404Error().catch((error) => console.error(error))} className="w-40 h-10 bg-red-500 text-white">
                Trigger 404 Error
            </button>
            <button onClick={() => trigger500Error().catch((error) => console.error(error))} className="w-40 h-10 bg-red-500 text-white">
                Trigger 500 Error
            </button>
            <button onClick={() => getValidationError()} className="w-40 h-10 bg-red-500 text-white">
                Trigger Validation Error
            </button>
            {validationErrors.length > 0 && (
                <div className="mt-4">
                    <h1 className="text-red-500 font-bold">Validation errors</h1>
                    <ul className="list-disc pl-5">
                        {validationErrors.map((error, index) => (
                            <li key={index} className="text-red-500 text-sm">
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}