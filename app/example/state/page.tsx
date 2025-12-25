"use client";
import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0);

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
            <div className="max-w-md w-full rounded-2xl border border-gray-700 bg-gray-900/60 p-10 text-center">

                {/* Title */}
                <h1 className="text-3xl font-bold mb-6">
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        State Management
                    </span>
                </h1>

                {/* Counter */}
                <div className="text-7xl font-bold text-gray-200 mb-10">
                    {count}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 transition font-semibold cursor-pointer"
                    >
                        Increase
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 transition font-semibold cursor-pointer"
                    >
                        Decrease
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold cursor-pointer"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </main>
    );
}
