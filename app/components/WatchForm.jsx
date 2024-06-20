import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
    return (
        <form action={addWatch} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <div className="space-y-2">
                <label htmlFor="title" className="block text-pink-400 font-semibold">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter the title of your watch"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="rating" className="block text-pink-400 font-semibold">
                    Rating
                </label>
                <input
                    type="text"
                    id="rating"
                    name="rating"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter number between 0.0 and 5.0"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="review" className="block text-pink-400 font-semibold">
                    Review
                </label>
                <input
                    type="text"
                    id="review"
                    name="review"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your review here"
                />
            </div>
            <button
                type="submit"
                className="bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-full font-semibold"
            >
                Add Watch
            </button>
        </form>
    );
}
