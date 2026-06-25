import { Link } from "react-router-dom";
import type { News } from "./News";
import { GamepadDirectional, BrickWall, Megaphone, Tag, Wrench, type LucideIcon, CircleQuestionMark } from "lucide-react";

type Props =
    {
        news: News;
        isFeatured: boolean
    }

const newsType: Record<string, LucideIcon> = {
    "GameNews": GamepadDirectional,
    "Events": Megaphone,
    "Promotions": Tag,
    "NintendoSwitchOnline": BrickWall,
    "AskTheDeveloper": Wrench,
};

export default function NewsCard({ news, isFeatured }: Props) {

    const date = new Date(news.publishedTime);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    const Icon = newsType[news.newsType] || CircleQuestionMark;

    return (
        <Link
            to={`/newsPage/${news.slug}`}
            className="group w-full bg-white 
                flex flex-col items-center justify-center gap-3"
        >
            <div className="h-auto w-full rounded-lg overflow-hidden bg-white
                    flex items-center justify-center 
                    outline outline-gray-300"
            >
                <img className="w-full h-full object-contain 
                        group-hover:scale-105 transition-transform duration-300"
                    src={news.pictureUrl}
                    alt={news.title}
                />
            </div>

            <div className="text-gray-600
                flex flex-col gap-3"
            >
                <div className="flex flex-row items-center gap-2 font-semibold">
                    <Icon size={18} className="text-red-500" />
                    <span>{formattedDate}</span>
                </div>

                <h2 className="w-full h-auto line-clamp-2 text-lg font-bold 
                        group-hover:text-red-600 transition-colors duration-300">
                    {news.title}
                </h2>

                {isFeatured ?
                    <p className="w-full h-auto line-clamp-2 text-md 
                        group-hover:text-red-600 transition-colors duration-300">
                    {news.content}
                    </p>
                    :
                    null
                }

                <span className="text-red-500 font-bold group-hover:text-red-700 
                        underline underline-red-500 offset-y-3 decoration-3"
                >
                    Read more
                </span>
            </div>
        </Link>
    )
}