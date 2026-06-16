type CharacterDetails = {
    title: string;
    img: string;
    bgImg: string;
}

export default function CharactersCard({ title, img, bgImg }: CharacterDetails) {
    return (
        <div className="group h-auto md:max-h-74 w-full rounded-lg flex flex-col gap-1">
            <div className="w-full h-auto relative rounded-lg overflow-hidden cursor-pointer">
                <img
                    className="w-full h-full object-cover transition-transform duration-200 scale-115 group-hover:scale-100"
                    src={bgImg}
                />

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-200 group-hover:scale-110"
                    src={img}
                />
            </div>
            <span className="w-full h-auto flex items-center text-2xl text-gray-700 font-bold">{title}</span>
        </div>
    )
}