import { Plus } from "lucide-react";
import Catalog from "../catalog/Catalog";
import Filters from "../catalog/Filters";

export default function Shop() {
    return (
        <div className="w-auto h-auto flex flex-col items-center justify-center bg-white px-4 sm:px-6 xl:px-8">
            <div className="w-auto h-auto h-auto
                    flex flex-col items-center justify-center gap-5"
            >
                <div className="w-auto h-auto py-10
                    flex flex-row items-top justify-between gap-10"
                >
                    <div className="sticky top-0 h-fit w-auto h-auto hidden lg:block">
                        <Filters></Filters>
                    </div>
                    <div className="w-auto flex flex-col items-center justify-center gap-5">
                        <Catalog></Catalog>
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    className="bg-blue-800 rounded-lg px-4 py-2 */}
                        {/*        text-white text-lg font-bold*/}
                        {/*        flex flex-row items-center justify-center*/}
                        {/*        hover:bg-blue-900 hover:scale-110 transition duration-300 cursor-pointer"*/}
                        {/*>*/}
                        {/*    <Plus size={ 30 }></Plus>*/}
                        {/*    <span>Load more results</span>*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}