export default function WatchForm() {
    return (
        <form action="addWatch" className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <div className="space-y-2">
                <label htmlFor="brand" className="block text-pink-400 font-semibold">
                    Brand
                </label>
                <input
                    type="text"
                    id="brand"
                    name="brand"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="model" className="block text-pink-400 font-semibold">
                    Model
                </label>
                <input
                    type="text"
                    id="model"
                    name="model"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="referenceNumber" className="block text-pink-400 font-semibold">
                    Reference Number
                </label>
                <input
                    type="text"
                    id="referenceNumber"
                    name="referenceNumber"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
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
