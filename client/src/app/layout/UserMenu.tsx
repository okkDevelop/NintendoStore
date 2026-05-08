import React, { useState } from "react";
import type { User } from "../models/user";
import { useLogoutMutation } from "../../features/account/accountApi";

type Props = {
    user: User
}

export default function UserMenu({ user }: Props) {
    const [logout] = useLogoutMutation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="inline-flex items-center justify-center text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                type="button"
                onClick={toggleDropdown}
            >
                {user.email}
                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </button>

            <div className={`z-10 ${isOpen ? 'block' : 'hidden'} absolute right-0 mt-2 bg-white bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <div
                            className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Dashboard
                        </div>
                    </li>
                    <li>
                        <div
                            className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Settings
                        </div>
                    </li>
                    <li>
                        <div
                            className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Earnings
                        </div>
                    </li>
                    <li>
                        <button
                            onClick={logout}
                            className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}