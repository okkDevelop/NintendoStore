import { Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const midLinks = [
    { title: 'Contact Us', path: '/contact' },
    { title: 'Website Feedback', path: '/feedback' },
    { title: 'Terms of Use', path: '/term-of-use' }
]

export default function B_NavBar() {
    return (
        <div>
            {/*red nintendo bar*/}
            <div className="flex item-center justify-center h-40 w-full bg-red-600">
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Nintendo-Logo-1983.png" />
            </div>

            {/*nagivation bar*/}
            <div className="flex flex-row justify-between h-120 w-full p-10">
                <div className="flex flex-col item-left justify-top gap-3 w-50 h-full font-bold text-gray-700 cursor-pointer">About Nintendo
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Careers</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Corporate Social Responsibility</p>
                </div>
                <div className="flex flex-col item-left justify-top gap-3 w-50 h-full font-bold text-gray-700 cursor-pointer">Shop
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Games</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Hardware</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Mechandise</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Sales and Deals</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Exclusives</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch Online</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch US</p>
                </div>
                <div className="flex flex-col item-left justify-top gap-3 w-50 h-full font-bold text-gray-700 cursor-pointer">Orders
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Order details</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Shipping info</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Refunds and returns</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">FAQ</p>
                </div>
                <div className="flex flex-col item-left justify-top gap-3 w-50 h-full font-bold text-gray-700 cursor-pointer">Support
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch 2</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Nintendo Switch</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Nintendo Account</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">App and other products</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Other systems</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Service Center</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Nintendo product recycling</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Warranty</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Licensed product information</p>
                </div>
                <div className="flex flex-col item-left justify-top gap-3 w-50 h-full font-bold text-gray-700 cursor-pointer">Parent
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Info for parents</p>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Parental controls</p>
                </div>
                <div className="flex flex-col item-left justify-top gap-3 w-50 h-full font-bold text-gray-700 cursor-pointer">Privacy
                    <Link to={"/privacy"}
                        onClick={() => window.scrollTo(0, 0)}
                        className="font-bold text-red-500 hover:underline cursor-pointer">
                        Privacy policy
                    </Link>
                    <p className="font-bold text-red-500 hover:underline cursor-pointer">Cookies and interst-based ads</p>

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