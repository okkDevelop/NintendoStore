export default function NewsList() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8
                        grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch"
        >

            {/* 2. FILTER SIDEBAR PANEL (Takes up 1 column on desktop) */}
            <aside className="hidden lg:block lg:col-span-1">

                {/* THE MAGIC COMBINATION:
                  - 'sticky': Keeps the element floating within its parent track boundaries
                  - 'top-20': The top offset clearance gap (adjust this to match your navbar height!)
                  - 'h-fit': Tells the container to shrink-wrap tightly around the filters 
                             instead of stretching, allowing room to slide down.
                */}
                <div className="sticky top-0 h-fit bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Filters</h3>

                    {/* Placeholder Filter Content Items */}
                    <div className="space-y-4">
                        <div>Platform Options...</div>
                        <div>Genre Options...</div>
                        <div>Price Options...</div>
                    </div>

                    <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded font-medium">
                        Clear Filters
                    </button>
                </div>
            </aside>


            {/* 3. GAME CATALOG PANEL (Takes up 3 columns on desktop) */}
            <main className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:col-span-3">
                {/* Generate a ton of long product cards to force a deep vertical scroll */}
                {Array.from({ length: 24 }).map((_, index) => (
                    <div key={index} className="h-80 bg-white border border-gray-100 rounded-xl shadow-sm p-4">
                        <div className="w-full h-44 bg-gray-200 rounded-lg mb-3">Game Cover Image</div>
                        <div className="font-bold">Nintendo Game Title #{index + 1}</div>
                        <div className="text-red-600 font-bold mt-1">$59.99</div>
                    </div>
                ))}
            </main>

        </div>
    )
}