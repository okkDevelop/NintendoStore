type CharacterDetails = {
    title: string;
    img: string;
}

export default function CharactersCard({ title, img}: CharacterDetails) {
    return (
        <div className="group h-80 w-70 rounded-lg bg-white">
            <div className="relative h-70 w-full rounded-lg overflow-hidden cursor-pointer">
                <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-500" src={img} />
            </div>
            <h3 className="flex items-center h-10 w-full text-left text-xl text-gray-700 font-bold">{title}</h3>
        </div>
    )
}