import { Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const midLinks = [
    { title: 'Contact Us', path: '/contact' },
    { title: 'Website Feedback', path: '/feedback' },
    { title: 'Terms of Use', path: '/term-of-use' }
]

export default function B_NavBar() {
    return (
        <div className="w-full h-auto flex flex-col">
            {/*red nintendo bar*/}
            <div className="w-full h-40 bg-red-600
                    flex item-center justify-center"
            >
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Nintendo-Logo-1983.png" />
            </div>

            {/*nagivation bar*/}
            <div className="flex flex-row justify-between h-auto w-full px-4 py-10">

                <div className="w-auto max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">AboutNintendo</button>
                    <div className="w-auto flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Careers</button>
                        <button className="w-auto text-left font-bold text-red-500 hover:underline cursor-pointer">Corporate Social Responsibility</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Shop</button>
                    <div className="flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Games</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Hardware</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Mechandise</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Sales and Deals</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Exclusives</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch Online</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch US</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Orders</button>
                    <div className="flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Order details</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Shipping info</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Refunds and returns</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">FAQ</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Support</button>
                    <div className="flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch 2</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Nintendo Account</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">App and other products</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Other systems</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Service Center</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Nintendo product recycling</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Warranty</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Licensed product information</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Parent</button>
                    <div className="flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Info for parents</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Parental controls</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Privacy</button>
                    <div className="flex flex-col gap-1">
                        <Link to={"/privacy"}
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-left font-bold text-red-500 hover:underline cursor-pointer">
                            Privacy policy
                        </Link>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Cookies and interst-based ads</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Community</button>
                    <div className="flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Community guidelines</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Online safety</button>
                    </div>
                </div>

                <div className="w-auto min-w-10 max-h-70 px-5 cursor-pointer
                        flex flex-col items-left justify-top gap-3
                        font-bold text-gray-700
                        border-l border-gray-200"
                >
                    <button className="text-left hover:underline underline-red-700">Documents and policies</button>
                    <div className="flex flex-col gap-1">
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Health and safety precautions</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Wireless regulatory info</button>
                        <button className="text-left font-bold text-red-500 hover:underline cursor-pointer">Supply chain transparency</button>
                    </div>
                </div>
            </div>

            {/*social media panel*/}
            <div className="flex items-center justify-between h-30 w-full">
                <div className="group flex items-center justify-between h-full w-80 p-8">
                    <a
                        href="https://www.linkedin.com/in/zheng-kai-oon-65471123b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-400 transition-all duration-300 hover:scale-125 cursor-pointer"
                    >
                        <LinkIcon className="text-black" size={24} />
                    </a>
                </div>

                <div className="h-full w-50">
                </div>
            </div>

            {/*contact panel*/}
            <div className="flex items-center justify-between h-20 w-full bg-black px-10">
                <p className="text-xs text-white">Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
                <div className="flex gap-4">
                    {midLinks.map(({ title, path }) => (
                        <Link
                            to={path}
                            key={path}
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-white text-xs hover:underline"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}