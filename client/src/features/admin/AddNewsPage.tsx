import { useState } from "react";
import { useAddNewsMutation } from "../news/newsAPI";
import { NewsType } from "../news/newsTypes";

export default function AddNewsPage() {
    const [addNews, { isLoading }] = useAddNewsMutation();

    const [formData, setFormData] = useState({
        title: "",
        pictureUrl: "",
        newsType: "",
        publishedTime: "",
        content: ""
    });

    const handleAddNewNews = async (e: React.SubmitEvent) => {
        e.preventDefault();

        console.log("Form Data being submitted:", formData);

        console.log("News Type Selected:", formData.newsType);
        console.log("Publish Date:", formData.publishedTime);

        try {
            await addNews({
                title: formData.title,
                content: formData.content,
                pictureUrl: formData.pictureUrl,
                newsType: formData.newsType as NewsType,
                publishedTime: formData.publishedTime
            }).unwrap();

            alert("News added successfully!");

            setFormData({
                title: "",
                pictureUrl: "",
                newsType: "",
                publishedTime: "",
                content: ""
            });
        } catch (error) {
            console.error("Failed to add news:", error);
            alert("Failed to add news.");
        }
    };

    return (
        <div className="w-auto h-auto flex flex-col items-center justify-center bg-white px-4 sm:px-6 xl:px-8 py-10">
            <form
                onSubmit={handleAddNewNews}
                className="w-full h-auto bg-gray-100 flex flex-col items-center justify-center"
            >
                <div className="w-150 max-w-300 flex flex-col items-center gap-5 p-10">
                    <h2 className="text-gray-800 text-xl font-bold">Add New News & Events</h2>
                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">
                            News Title:
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter News Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">News Picture here:</label>
                        <input
                            type="text"
                            value={formData.pictureUrl}
                            onChange={(e) => setFormData({ ...formData, pictureUrl: e.target.value })}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">
                            Select the news type
                        </label>
                        <select
                            name="type"
                            value={formData.newsType}
                            onChange={(e) => setFormData({ ...formData, newsType: e.target.value })}
                            className="text-gray-700 px-5 bg-white rounded-full"
                        >
                            <option value="">Choose a Types</option>

                            {Object.values(NewsType).map((news) => (
                                <option key={news} value={news}>
                                    {news}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <label className="text-gray-700 px-5 font-bold">
                            Publish Date:
                        </label>
                        <input
                            type="date"
                            name="publishedDate"
                            value={formData.publishedTime}
                            onChange={(e) => setFormData({ ...formData, publishedTime: e.target.value })}
                            className="text-gray-700 px-5 py-2 bg-white rounded-full outline outline-gray-300 focus:outline-red-500"
                        />
                    </div>

                    <div className="w-full flex flex-col items-center justify-between gap-5">
                        <label className="w-full text-gray-700 px-5 font-bold">News Content:</label>
                        <textarea
                            name="description"
                            rows={6}
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full text-gray-700 p-5 bg-white rounded-lg w-full outline outline-gray-300 focus:outline-red-500"
                            placeholder="Enter your news content here..."
                        />
                    </div>

                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-30 h-10 rounded-full text-white bg-red-500 hover:bg-red-700 transition duration-300 cursor-pointer"
                    >
                        Add News
                    </button>
                </div>
            </form>
        </div>
    )
}