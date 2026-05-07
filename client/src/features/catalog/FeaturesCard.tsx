type FeaturesCardProps = {
    image: string;
    description: string;
}

export default function FeaturesCard({ image, description }: FeaturesCardProps) {
    return (
        <div className="group h-80 w-60 rounded-lg bg-white border-1 border-gray-300 overflow-hidden cursor-pointer">
            <img className="flex h-30 w-full items-center justify-center overflow-hidden bg-white group-hover:scale-110 transition-transform duration-500" src={image} />

            <div className="p-3">
                <h1 className="group-hover:text-red-600 transition-color duration-300 text-md font-bold flex h-30 pb-1">{description}</h1>
                <div className="flex items-center justify-center h-5 w-30 rounded-xl text-white bg-red-500">Available Now</div>
                <div>Nintendo Switch</div>
            </div>
        </div>
    )
}