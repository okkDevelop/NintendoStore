import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { useFetchFiltersQuery } from "./catalogApi";
import { resetParams, setSearchTerm, setSortBy, setTypes } from "./catalogSlice";

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' }
]

export default function Filters() {
    const { data } = useFetchFiltersQuery();

    const { searchTerm } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    return (
        <div className="w-50 h-80 flex flex-col bg-gray-200 rounded-lg">

            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <button
                onClick={() => dispatch(resetParams())}
                className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors duration-300">
                Clear Filters
            </button>

            <form className="max-w-md mx-auto">
                <label className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                    </div>

                    <input
                        type="search"
                        id="search"
                        className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        placeholder="Search"
                        required
                        value={searchTerm}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    />
                </div>
            </form>

            {sortOptions.map(option => (
                <div key={option.value}
                    className="flex items-center mb-4">
                    <input 
                        id="default-radio-1" 
                        type="radio"
                        onChange={() => dispatch(setSortBy(option.value))}
                        value={option.value} 
                        name="default-radio" 
                        className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle checked:bg-blue-600 border border-default appearance-none">
                    </input>
                    <label className="select-none ms-2 text-sm font-medium text-heading">
                        {option.label}
                    </label>
                </div>
            ))}

            {data?.types.map(type => (
                <div key={type}
                    className="flex items-center mb-4">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        onChange={() => dispatch(setTypes(type))}
                        value={type}
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                    </input>
                    <label className="select-none ms-2 text-sm font-medium text-heading">
                        {type}
                    </label>
                </div>
            ))}
        </div>
    )
}