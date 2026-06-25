import { Link, useParams } from "react-router-dom";
import { useFetchNewsDetailsQuery } from "./newsAPI";
import { Megaphone, MessageSquareText } from "lucide-react";
import ReactMarkdown from 'react-markdown';

export default function NewsDetails() {
    const { slug } = useParams<{ slug: string }>();

    const { data: news, isLoading, error } = useFetchNewsDetailsQuery(slug!, {
        skip: !slug,
    });

    if (isLoading)
        return <h2>Loading...</h2>;

    if (error || !news)
        return <h2>News not found.</h2>;

    const date = new Date(news.publishedTime);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    return (
        <div className="w-full h-auto bg-gray-100
                flex flex-col items-center justify-center"
        >
            <div className="w-full h-auto bg-white px-5 py-10
                    flex flex-row items-center justify-between "
            >
                <div className="text-2xl text-gray-700 font-bold flex items-center gap-3">
                    <MessageSquareText size={30} />                
                    <span>News</span>
                </div>

                <Link
                    to="/newsPage"
                    className="text-red-500 font-bold 
                        underline underline-red-500 offset-y-3 decoration-3
                        hover:text-red-700 transition duration-300"
                >
                    See all news articles
                </Link>
            </div>

            <div className="w-full max-w-200 h-auto py-10 px-5
                        flex flex-col items-center justify-center gap-5
                        border-b-1 border-gray-200"
            >
                <img
                    className="w-full rounded-lg object-contain"
                    src={news.pictureUrl}
                />

                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <Megaphone className="text-red-500"></Megaphone>
                        <span>{formattedDate}</span>
                    </div>
                    <button className="bg-red-600 rounded-lg cursor-pointer px-8 py-3
                                text-lg text-white font-bold
                                hover:scale-105 hover:bg-red-800 transition duration-300"
                    >
                        Learn more
                    </button>
                </div>

                <h1 className="text-2xl text-gray-700 font-bold">{news.title}</h1>

                <ReactMarkdown
                    components={{
                        a: ({ href, children }) => {
                            if (href === '/style/red') {
                                return <span className="text-red-600 font-bold italic
                                                underline underliner-red-500 offset-y-5 decoration-2"
                                        >
                                            {children}
                                        </span>;
                            }
                            if (href === '/style/gray') {
                                return <span className="text-gray-700 font-bold italic">
                                            {children}
                                        </span>;
                            }
                            return <a href={href} className="text-blue-600 underline">{children}</a>;
                        },
                        p: ({ children }) => <p className="text-gray-700">{children}</p>
                    }}
                >
                    {news.content}
                </ReactMarkdown>
            </div>
        </div>
    )
}