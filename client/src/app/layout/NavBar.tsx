import { Search, ShoppingCart, User, Compass, Handbag, ShieldQuestionMark, Heart, Flag, GraduationCap, MessageSquareText, Smartphone, Star, BrickWall, GamepadDirectional, Gamepad2, PersonStanding, Shirt, Tag, Cog, SquareM, SquareParking, UserKey, Wrench, Menu, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFetchCartQuery } from '../../features/cart/cartApi';
import UserMenu from './UserMenu';
import { useUserInfoQuery } from '../../features/account/accountApi';
import { useEffect, useState } from 'react'

export default function NavBar() {
    const { data: user} = useUserInfoQuery();
    const { data: cart } = useFetchCartQuery();
    const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

    const [isLoginPanelOpen, setLoginPanelOpen] = useState(false);
    const [isExplorePanelOpen, setExplorePanelOpen] = useState(false);
    const [isShopPanelOpen, setShopPanelOpen] = useState(false);
    const [isSupportPanelOpen, setSupportPanelOpen] = useState(false);
    //const [isSearchPanelOpen, setSearchPanelOpen] = useState(false);

    useEffect(() => {
        if (isLoginPanelOpen || isExplorePanelOpen || isShopPanelOpen || isSupportPanelOpen)
            document.body.classList.add('overflow-hidden')
        else
            document.body.classList.remove('overflow-hidden');

    }, [isLoginPanelOpen, isExplorePanelOpen , isShopPanelOpen , isSupportPanelOpen])


    return (
        <div className="w-full h-auto flex items-center justify-center z-50">
            <div className="w-full relative flex flex-row h-16 bg-white z-50                     
                    border-b-1 border-gray-200"
            >
                <Link
                    to="/"
                    className="flex h-full items-center bg-red-500 px-2 text-xl text-white">
                    <img className="h-full w-full"
                        src="https://1000logos.net/wp-content/uploads/2017/03/Nintendo-Logo-1983.png"
                    />
                </Link>

                <div className="flex flex-1 items-center justify-between bg-white px-8">
                    <div>
                        <div className="md:flex gap-8 font-bold text-gray-700">
                            <button
                                onClick={() => setExplorePanelOpen(!isExplorePanelOpen)}
                                className={`flex items-center gap-2 cursor-pointer
                                            ${isExplorePanelOpen ? 'underline underline-offset-4 decoration-2 decoration-red-500' : 'no-underline'}`}
                                type="button"
                            >
                                <Compass className="text-red-600" size={18} />
                                <div className={`hover:text-red-600 transition
                                        ${isExplorePanelOpen ? 'text-red-500' : 'text-gray-700'}`}>Explore</div>
                            </button>

                            <button
                                type="button"
                                onClick={() => setShopPanelOpen(!isShopPanelOpen)}
                                className={`flex items-center gap-2 cursor-pointer
                                            ${isShopPanelOpen ? 'underline underline-offset-4 decoration-2 decoration-red-500' : 'no-underline'}`}
                            >
                                <Handbag className="text-red-600" size={18} />
                                <div className={`hover:text-red-600 transition
                                        ${isShopPanelOpen ? 'text-red-500' : 'text-gray-700'}`}>Shop</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setSupportPanelOpen(!isSupportPanelOpen)}
                                className={`flex items-center gap-2 cursor-pointer
                                            ${isSupportPanelOpen ? 'underline underline-offset-4 decoration-2 decoration-red-500' : 'no-underline'}`}>
                                <ShieldQuestionMark className="text-red-600" size={18} />
                                <div className={`hover:text-red-600 transition
                                        ${isSupportPanelOpen ? 'text-red-500' : 'text-gray-700'}`}>Support</div>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <div className="group flex h-8 w-24 items-center justify-center gap-2 rounded-full bg-gray-100 cursor-pointer">
                            <Search className="text-gray-600 group-hover:text-red-600" size={20} />
                            <span className="font-bold text-gray-600 group-hover:text-red-600">Search</span>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 cursor-pointer">
                            <Heart className="text-gray-600 fill-gray-600" size={20} />
                        </div>

                        <Link to="cart"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 cursor-pointer">
                            <div className="text-lg">{itemCount}</div>
                            <ShoppingCart className="fill-gray-600" size={20} />
                        </Link>

                        <button
                            onClick={() => setLoginPanelOpen(true)}
                            type="button"
                            className={`group flex h-8 w-40 rounded-full cursor-pointer
                                flex flex-row items-center justify-center gap-2 
                                text-sm font-bold
                            ${user ? "text-gray-700 hover:text-red-600 transition duration-300" :
                                    "text-red-600 outline outline-1 outline-red-500"}
                            `}
                        >
                            {user ? user.email : 
                                <>
                                    <User size={20} />
                                    <span>Log In / Sign Up</span>
                                </>
                            }
                        </button>

                        <Flag className="hover:text-red-600 transition" size={20} />
                    </div>
                </div>
            </div>

            {/*<div className="w-full h-10 bg-red-500 block lg:hidden px-3*/}
            {/*        flex flex-row items-center justify-between"*/}
            {/*>*/}
            {/*    <Link*/}
            {/*        to="/"*/}
            {/*        className="flex h-full items-center bg-red-500 px-2 text-xl text-white">*/}
            {/*        <img className="h-full w-full" src="https://1000logos.net/wp-content/uploads/2017/03/Nintendo-Logo-1983.png" />*/}
            {/*    </Link>*/}

            {/*    <Flag className="hover:text-white transition" size={20} />*/}
            {/*</div>*/}

            <UserMenu
                user={user}
                isPanelOpen={isLoginPanelOpen}
                setPanelOpen={setLoginPanelOpen}
            />

            {/*explore panel*/}
            <div
                className={`h-auto flex flex-col
                            fixed top-0 left-0 z-30 w-full h-80 transition-transform 
                            bg-white rounded-b-xl cursor-default overflow-hidden
                            ${isExplorePanelOpen ? 'translate-y-16' : '-translate-y-full'}`}
            >
                <div className="grid grid-cols-4 px-10 py-5 border-b border-gray-200">
                    <button className="group cursor-pointer
                            w-auto h-auto flex flex-col gap-3 items-center justify-center"
                    >
                        <img className="w-40 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Nintendo-Switch-2"
                        />
                        <span className="text-center text-xl text-gray-700 font-bold
                                    group-hover:text-red-600 transition duration-200"
                        >Nintendo Switch 2
                        </span>
                    </button>
                    <button className="group cursor-pointer
                            w-auto h-auto flex flex-col  gap-3 items-center justify-center"
                    >
                        <img className="w-40 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-alt"
                        />
                        <span className="text-center text-xl text-gray-700 font-bold
                                        group-hover:text-red-600 transition duration-200"
                        >Nintendo Switch
                        </span>
                    </button>
                    <button
                        type="button"
                        className="group cursor-pointer
                            w-auto h-auto flex flex-col  gap-3 items-center justify-center"
                    >
                        <img className="w-40 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Games"
                        />
                        <span className="text-center text-xl text-gray-700 font-bold
                                        group-hover:text-red-600 transition duration-200"
                        >Games
                        </span>
                    </button>
                    <button className="group cursor-pointer
                            w-auto h-auto flex flex-col  gap-3 items-center justify-center"
                    >
                        <img className="w-40 object-contain"
                            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-Online"
                        />
                        <span className="text-center text-xl text-gray-700 font-bold
                                        group-hover:text-red-600 transition duration-200"
                        >Nintendo Switch Online
                        </span>
                    </button>
                </div>

                <div className="w-auto h-auto py-6 border-b border-gray-200
                        flex flex-row items-center justify-center gap-8">
                    <Link
                        to="newsPage"
                        className="group w-auto h-auto px-7 py-2 cursor-pointer
                            flex flex-row items-center justify-center gap-2
                            outline outline-gray-200 shadow-md rounded-full"
                    >
                        <MessageSquareText className="text-white fill-red-500" size={30}>
                        </MessageSquareText>
                        <span className="text-md text-gray-700 font-bold 
                                group-hover:text-red-500 transition duration-200">
                            News and events
                        </span>
                    </Link>

                    <button className="group w-auto h-auto px-7 py-2 cursor-pointer
                                    flex flex-row items-center justify-center gap-2
                                outline outline-gray-200 shadow-md rounded-full">
                        <Star className="text-white fill-red-500" size={30}>
                        </Star>
                        <span className="text-md text-gray-700 font-bold 
                                group-hover:text-red-500 transition duration-200">
                            Play Nintendo
                        </span>
                    </button>

                    <button className="group w-auto h-auto px-7 py-2 cursor-pointer
                                    flex flex-row items-center justify-center gap-2
                                outline outline-gray-200 shadow-md rounded-full">
                        <GraduationCap className="text-white fill-red-500" size={30}>
                        </GraduationCap>
                        <span className="text-md text-gray-700 font-bold 
                                group-hover:text-red-500 transition duration-200">
                            My Nintendo
                        </span>
                    </button>

                    <button className="group w-auto h-auto px-7 py-2 cursor-pointer
                                    flex flex-row items-center justify-center gap-2
                                outline outline-gray-200 shadow-md rounded-full">
                        <Smartphone className="text-white fill-red-500" size={30}>
                        </Smartphone>
                        <span className="text-md text-gray-700 font-bold 
                                group-hover:text-red-500 transition duration-200">
                            Apps
                        </span>
                    </button>

                    <button className="group w-auto h-auto px-5 py-2 cursor-pointer
                                    flex flex-row items-center justify-center gap-2
                                outline outline-gray-200 shadow-md rounded-full">
                        <BrickWall className="text-white fill-red-500" size={25}>
                        </BrickWall>
                        <span className="text-md text-gray-700 font-bold 
                                group-hover:text-red-500 transition duration-200">
                            My Mario
                        </span>
                    </button>
                </div>

                <div className="w-auto h-auto py-3 bg-gray-100
                        flex flex-row items-center justify-center gap-6
                        text-md text-gray-700 font-bold"
                >
                    <span className="">Meet the characters:</span>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Super-Mario"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">Super mario</span>
                    </div>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-The-Legend-of-Zelda"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">The Legend of Zelda</span>
                    </div>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Splatoon"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">Splatoon</span>
                    </div>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Kirby"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">Kirby</span>
                    </div>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Pikmin"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">Pikmin</span>
                    </div>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Animal-Crossing"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">Animal Crossing</span>
                    </div>

                    <div className="group w-auto h-auto cursor-pointer
                            flex flex-row items-center justify-between gap-2">
                        <img className="w-5 object-contain"
                            src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Metroid"
                        />
                        <span className="group-hover:text-red-500 transition duration-200">Metroid</span>
                    </div>
                </div>
            </div>

            <div
                className={`h-auto flex flex-col bg-white cursor-default
                            fixed top-0 left-0 z-30 w-full h-80 transition-transform 
                            
                            ${isShopPanelOpen ? 'translate-y-16' : '-translate-y-full'}`}
            >
                <div className="w-auto h-auto flex flex-row">
                    <div className="w-170 h-auto bg-gray-100 p-5">
                        <button className="w-full h-full bg-red-600 rounded-lg
                                    flex flex-col items-center justify-center gap-3
                                    hover:bg-red-800 transition duration-200 cursor-pointer"
                        >
                            <div className="w-full flex flex-row items-center justify-center gap-2 px-5">
                                <GraduationCap className="text-white" size={50}></GraduationCap>
                                <span className="w-full text-3xl text-white font-bold whitespace-nowrap">My Nintendo Store</span>
                            </div>
                            <span
                                className="text-white font-bold
                                    underline underline-offset-4 decoration-2"
                            >
                                Shop all
                            </span>
                        </button>
                    </div>

                    <div className="w-full h-auto grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5 p-6">
                        <Link
                            to="/shop"
                            onClick={() => setShopPanelOpen(!isShopPanelOpen)}
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <GamepadDirectional className="text-red-500 fill-red-500"></GamepadDirectional>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Games
                            </span>
                        </Link>

                        <button
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Gamepad2 className="text-red-500 fill-red-500"></Gamepad2>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Hardware
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Shirt className="text-red-500 fill-red-500"></Shirt>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Merchandise
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Tag className="text-red-500 fill-red-500"></Tag>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Sales and deals
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Star className="text-red-500 fill-red-500"></Star>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Exclusive
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <PersonStanding className="text-red-500"></PersonStanding>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Characters
                            </span>
                        </button>

                    </div>
                </div>
            </div>

            <div
                className={`h-auto flex flex-col bg-white cursor-default
                            fixed top-0 left-0 z-30 w-full h-80 transition-transform 

                            ${isSupportPanelOpen ? 'translate-y-16' : '-translate-y-full'}`}
            >
                <div className="w-auto h-auto flex flex-row">
                    <div className="w-120 h-auto bg-gray-100 p-5">
                        <button className="w-full h-full bg-red-600 rounded-lg
                                    flex flex-col items-center justify-center gap-3
                                    hover:bg-red-800 transition duration-200 cursor-pointer"
                        >
                            <div className="w-full flex flex-row items-center justify-center gap-2 px-5">
                                <span className="w-full text-3xl text-white font-bold whitespace-nowrap">Support</span>
                            </div>
                            <span
                                className="text-white font-bold
                                    underline underline-offset-4 decoration-2"
                            >
                                Get help now
                            </span>
                        </button>
                    </div>

                    <div className="w-full h-auto grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5 p-6">
                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Cog className="text-red-500"></Cog>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                My Support Dashboard
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <UserKey className="text-red-500 fill-red-500"></UserKey>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Accounts & Purchases
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <SquareM className="text-red-500"></SquareM>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Nintendo Switch 2
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <SquareParking className="text-red-500"></SquareParking>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Nintendo Switch
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <SquareParking className="text-red-500"></SquareParking>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Nintendo Switch Online
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Smartphone className="text-white fill-red-500"></Smartphone>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Apps & Other Products
                            </span>
                        </button>

                        <button
                            type="button"
                            className="group w-auto h-auto py-3
                                flex flex-row rounded-full items-center justify-center gap-3
                                outline outline-gray-200 shadow-md cursor-pointer"
                        >
                            <Wrench className="text-red-500 fill-red-500"></Wrench>
                            <span className="text-lg text-gray-700 font-bold
                                    group-hover:text-red-600 transtion duration-300"
                            >
                                Service Center
                            </span>
                        </button>

                    </div>
                </div>
            </div>

            {(isLoginPanelOpen || isExplorePanelOpen || isShopPanelOpen || isSupportPanelOpen) && (
                <div
                    className={`fixed inset-0 bg-gray-900/50 cursor-default
                        ${isLoginPanelOpen ? "z-55" : "z-20"}`}
                    onClick={() => {
                        setLoginPanelOpen(false);
                    }}
                >
                </div>
            )}

            <div className="w-110 h-15 bg-white rounded-full px-10
                text-gray-900 shadow-2xl
                flex flex-row items-center justify-between                 
                fixed bottom-5 z-50 block lg:hidden"
            >
                <button
                    type="button"
                    className="w-auto h-auto cursor-pointer hover:text-red-600 transition duration-300"
                >
                    <Menu size={30} ></Menu>
                </button>
                <button
                    type="button"
                    className="w-auto h-auto cursor-pointer hover:text-red-600 transition duration-300"
                >
                    <Heart size={30}></Heart>
                </button>

                <div className="w-15 h-15 bg-red-500 rounded-full
                    flex items-center justify-center text-white
                    relative -top-2"
                >
                    <Search size={40}></Search>
                </div>

                <Link   
                    to="cart"
                    className="w-auto h-auto cursor-pointer hover:text-red-600 transition duration-300"
                >
                    <ShoppingCart size={30}></ShoppingCart>
                </Link>
                <button
                    type="button"
                    className="w-auto h-auto cursor-pointer hover:text-red-600 transition duration-300"
                >
                    <UserRound size={30}></UserRound>
                </button>
            </div>
        </div>
    )
}