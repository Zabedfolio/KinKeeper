import Image from "next/image";

const HomePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen px-6 py-10">
            <div className="container mx-auto">
                {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                    Friends to keep close in your life
                </h1>

                <p className="text-gray-500 max-w-xl mx-auto mb-5">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>

                <button className="bg-[#1e4d3a] text-white px-5 py-2 rounded-md hover:opacity-90 transition">
                    + Add a Friend
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">

                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-[#1e4d3a]">10</h2>
                    <p className="text-gray-500 text-sm">Total Friends</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-[#1e4d3a]">3</h2>
                    <p className="text-gray-500 text-sm">On Track</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-[#1e4d3a]">6</h2>
                    <p className="text-gray-500 text-sm">Need Attention</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <h2 className="text-2xl font-bold text-[#1e4d3a]">12</h2>
                    <p className="text-gray-500 text-sm">Interactions This Month</p>
                </div>

            </div>

            <hr className="mb-8" />

            {/* Friends */}
            <h2 className="text-lg font-semibold text-gray-700 mb-5">
                Your Friends
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="friend"
                        className="w-16 h-16 rounded-full mx-auto mb-3"
                    />

                    <h3 className="font-semibold text-gray-800">David Kim</h3>
                    <p className="text-sm text-gray-400 mb-2">62d ago</p>

                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        WORK
                    </span>

                    <div className="mt-2">
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                            Almost Due
                        </span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <img
                        src="https://randomuser.me/api/portraits/women/65.jpg"
                        alt="friend"
                        className="w-16 h-16 rounded-full mx-auto mb-3"
                    />

                    <h3 className="font-semibold text-gray-800">Emma Wilson</h3>
                    <p className="text-sm text-gray-400 mb-2">62d ago</p>

                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        FAMILY
                    </span>

                    <div className="mt-2">
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                            Overdue
                        </span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="friend"
                        className="w-16 h-16 rounded-full mx-auto mb-3"
                    />

                    <h3 className="font-semibold text-gray-800">Lisa Nakamura</h3>
                    <p className="text-sm text-gray-400 mb-2">62d ago</p>

                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        WORK
                    </span>

                    <div className="mt-2">
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                            Overdue
                        </span>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="friend"
                        className="w-16 h-16 rounded-full mx-auto mb-3"
                    />

                    <h3 className="font-semibold text-gray-800">James Wright</h3>
                    <p className="text-sm text-gray-400 mb-2">62d ago</p>

                    <div className="flex justify-center gap-2 mb-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            HOBBY
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            TRAVEL
                        </span>
                    </div>

                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        Overdue
                    </span>
                </div>

            </div>
            </div>

            

        </div>
    );
};

export default HomePage;