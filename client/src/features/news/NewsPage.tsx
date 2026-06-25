import { MessageSquareText, GamepadDirectional, BrickWall, Megaphone, Tag, Wrench } from "lucide-react";
import NewsList from "./NewsList";

export default function NewsPage() {
    return (        
        <div className = "w-full flex flex-col items-center justify-center bg-white">
            <div className="w-full max-w-290 h-auto py-10 px-5
                        flex flex-col items-center justify-center gap-5
                        border-b-1 border-gray-200"
            >
                <div className="w-full h-auto text-2xl text-gray-700 
                        flex flex-row justify-start gap-3 font-bold"
                >
                    <MessageSquareText size={30}/>                
                    <h1>News & Events</h1>
                </div>

                <div className="w-full h-auto flex flex-row items-center gap-3 text-red-500 text-lg">
                    <span className="text-gray-700 font-bold whitespace-nowrap">
                        Filter Articles:
                    </span>

                    <button
                        type="button"
                        className="w-auto h-auto bg-white rounded-full px-3 py-1
                            flex flex-row items-center justify-center gap-2
                            outline outline-red-500 font-bold whitespace-nowrap cursor-pointer"
                    >
                        <span>All</span>
                    </button>

                    <button
                        type="button"
                        className="w-auto h-auto bg-white rounded-full px-3 py-1
                            flex flex-row items-center justify-center gap-2
                            outline outline-red-500 font-bold whitespace-nowrap cursor-pointer"
                    >
                        <GamepadDirectional size={ 20 } />
                        <span>Game News</span>
                    </button>
                    <button
                        type="button"
                        className="w-auto h-auto bg-white rounded-full px-3 py-1
                            flex flex-row items-center justify-center gap-2
                            outline outline-red-500 font-bold whitespace-nowrap cursor-pointer"
                    >
                        <Megaphone size={ 20 }/>
                        <span>Events</span>
                    </button>
                    <button
                        type="button"
                        className="w-auto h-auto bg-white rounded-full px-3 py-1
                            flex flex-row items-center justify-center gap-2
                            outline outline-red-500 font-bold whitespace-nowrap cursor-pointer"
                    >
                        <Tag size={ 20 }/>
                        <span>Promotions</span>
                    </button>
                    <button
                        type="button"
                        className="w-auto h-auto bg-white rounded-full px-3 py-1
                            flex flex-row items-center justify-center gap-2
                            outline outline-red-500 font-bold whitespace-nowrap cursor-pointer"
                    >
                        <BrickWall size={ 20 }/>
                        <span>Nintendo Switch Online</span>
                    </button>
                    <button
                        type="button"
                        className="w-auto h-auto bg-white rounded-full px-3 py-1
                            flex flex-row items-center justify-center gap-2
                            outline outline-red-500 font-bold whitespace-nowrap cursor-pointer"
                    >
                        <Wrench size={ 20 }/>
                        <span>Ask The Developer</span>
                    </button>
                </div>

                <NewsList></NewsList>
            </div>
        </div>
    )
}