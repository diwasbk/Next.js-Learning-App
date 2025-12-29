"use client"

export default function Page() {
    return (
        <div>
            <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Render{" "}
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Server
                        </span>
                    </h1>

                    {/* Button */}
                    <button
                        className="px-6 py-3 rounded-lg border-2 border-gray-500 hover:bg-gray-800 transition font-semibold cursor-pointer">
                        Go to Home Page
                    </button>
                </div>
            </main>
        </div>
    );
}