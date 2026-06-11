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
                    </div>
                </div>
            </div>
        </div>
    )
}