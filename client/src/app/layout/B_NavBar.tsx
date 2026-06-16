import { FileUser, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const midLinks = [
    { title: 'Contact Us', path: '/contact' },
    { title: 'Website Feedback', path: '/feedback' },
    { title: 'Terms of Use', path: '/term-of-use' }
]

export default function B_NavBar() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-10">
            {/*red nintendo bar*/}
            <Link
                to=""
                className="w-full h-40 bg-red-600
                    flex item-center justify-center cursor-pointer"
            >
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Nintendo-Logo-1983.png" />
            </Link>

            <div className="w-full max-w-370 h-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 px-4">
                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <span className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        About Nintendo
                    </span>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Careers
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Corporate Social Responsibility
                        </span>
                    </div>
                </div>

                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <Link
                        to="/shop"
                        className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Shop
                    </Link>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Games
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Hardware
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Merchandise
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Sales and deals
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Exclusives
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Nintendo Switch Online
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Nintendo retail locations
                        </span>
                    </div>
                </div>

                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <span className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Orders
                    </span>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Order details
                        </span>

                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Shipping info
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Refunds and returns
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            FAQ
                        </span>
                    </div>
                </div>


                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <span className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Support
                    </span>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Nintendo Switch 2
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Nintendo Switch
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Nintendo Account
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Apps and other products
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Service center
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Nintendo product recycling
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Warranty
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Licensed product information
                        </span>
                    </div>
                </div>

                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <span className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Parents
                    </span>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Info for parents
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Parental controls
                        </span>
                    </div>
                </div>

                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <Link
                        to="/privacy"
                        className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Privacy
                    </Link>
                    <div className="flex flex-col gap-2">
                        <Link
                            to="/privacy"
                            className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Privacy policy
                        </Link>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Cookies and interest-based ads
                        </span>
                    </div>
                </div>

                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <span className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Community
                    </span>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Community guidelines
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Online safety
                        </span>
                    </div>
                </div>

                <div className="w-full h-full min-h-80 px-5
                        flex flex-col gap-5
                        border-l border-gray-300"
                >
                    <span className="text-gray-600 font-bold text-lg cursor-pointer
                            hover:underline hover:underline-offset-4 transition duration-2
                            decoration-red-700 decoration-2"
                    >
                        Documents and policies
                    </span>
                    <div className="flex flex-col gap-2">
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Health and safety precautions
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Wireless regulatory info
                        </span>
                        <span className="text-red-500 font-bold cursor-pointer
                                hover:text-red-700 hover:underline hover:underline-offset-4 transition duration-300
                                decoration-red-700 decoration-2"
                        >
                            Supply chain transparency
                        </span>
                    </div>
                </div>
            </div>

            {/*social media panel*/}
            <div className="w-full h-auto flex items-center justify-between">
                <div className="w-80 h-full group flex items-center justify-start gap-10 p-8">
                    <a
                        href="https://www.linkedin.com/in/zheng-kai-oon-65471123b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white cursor-pointer"
                    >
                        <LinkIcon className="text-black" size={30} />
                    </a>
                    <a
                        href="/OonZhengKai_Resume.pdf"
                        download="OonZhengKai_Resume.pdf"
                        className="text-gray-800 cursor-pointer"
                    >
                        <FileUser size={30} />
                    </a>
                </div>

                <a
                    href="https://caru.bbbprograms.org/seal/Confirmation/1514703882"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        src="https://caru.bbbprograms.org/seal/GetSeal/1514703882"
                        className="h-full w-50 object-contain cursor-pointer">
                    </img>
                </a>
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