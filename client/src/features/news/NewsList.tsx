import { useFetchAllNewsQuery } from "./newsAPI";
import NewsCard from "./NewsCard";

export default function NewsList() {
    const { data, isLoading } = useFetchAllNewsQuery();

    if (isLoading || !data)
        return <h2>Loading...</h2>

    return (
        <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((news, index) => {
                const isFeatured = index < 2;

                return (
                    <div
                        key={news.slug}
                        className={isFeatured ? "col-span-2" : "col-span-1"}
                    >
                        <NewsCard news={news} isFeatured={isFeatured} />
                    </div>
                );
            })}
        </div>
    )
}