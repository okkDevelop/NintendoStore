import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { useFetchFiltersQuery } from "./catalogApi";
import { resetParams, setSearchTerm, setSortBy, setTypes } from "./catalogSlice";
import { ChevronDown, X } from "lucide-react";

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' }
]

export default function Filters() {
    const { data } = useFetchFiltersQuery();

    const { searchTerm } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const currentSortBy = useAppSelector((state) => state.catalog.sortBy);

    return (
        <div className="w-full min-w-80 h-auto bg-gray-100 p-4
                flex flex-col gap-5 items-center justify-center
                rounded-lg overflow-hidden"
        >

            <button
                type="button"
                onClick={() => dispatch(resetParams())}
                className="w-auto h-auto cursor-pointer
                    flex flex-row items-center justifu-center gap-3
                    text-gray-300 font-bold"
            >
                <X className="rounded-full bg-gray-300 text-gray-100"
                    size={ 20 }></X>
                <span>Clear all</span>
            </button>

            <div className="w-full h-auto bg-white rounded-lg p-5">
                <div className="w-auto h-auto gap-4 flex flex-col border-b-1 border-gray-200">
                    <button
                        type="button"
                        onClick={() => setIsPriceOpen(!isPriceOpen)}
                        className="w-full h-auto flex flex-col items-center justify-between font-bold text-gray-700 bg-white cursor-pointer"
                    >
                        <div className="w-full flex flex-row items-center justify-between">
                            <span>Sorting</span>

                            <ChevronDown
                                className={`transform transition-transform duration-300 text-gray-500
                                ${isPriceOpen ? 'rotate-180' : 'rotate-0'}`}
                                size={20}
                            />
                        </div>
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out
                        ${isPriceOpen ? 'grid-cols-1 grid-rows-[1fr] opacity-100 pb-3' : 'grid-cols-1 grid-rows-[0fr] opacity-0 pointer-events-none'}`}
                    >
                        <div className="flex flex-col justify-left space-y-2 text-gray-600 overflow-hidden">
                            {sortOptions.map(option => (
                                <label
                                    key={option.value}
                                    className="flex items-center justify-left gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        onChange={() => dispatch(setSortBy(option.value))}
                                        value={option.value}
                                        checked={currentSortBy === option.value}
                                        className="size-[20px] rounded text-red-500 focus:ring-red-500" />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-auto h-auto gap-4 flex flex-col border-b-1 border-gray-200 pt-3">
                    <button
                        type="button"
                        onClick={() => setIsTypeOpen(!isTypeOpen)}
                        className="w-full h-auto flex flex-col items-center justify-between font-bold text-gray-700 bg-white cursor-pointer"
                    >
                        <div className="w-full flex flex-row items-center justify-between">
                            <span>Type</span>

                            <ChevronDown
                                className={`transform transition-transform duration-300 text-gray-500
                                    ${isTypeOpen ? 'rotate-180' : 'rotate-0'}`}
                                size={20}
                            />
                        </div>
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out
                        ${isTypeOpen ? 'grid-cols-1 grid-rows-[1fr] opacity-100 pb-3' : 'grid-cols-1 grid-rows-[0fr] opacity-0 pointer-events-none'}`}
                    >
                        <div className="flex flex-col justify-left space-y-2 text-gray-600 overflow-hidden">
                            {data?.types.map(type => (
                                <label
                                    key={type}
                                    className="flex items-center justify-left gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={() => dispatch(setTypes(type))}
                                        value={type}
                                        className="size-[20px] rounded text-red-500 focus:ring-red-500" />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}