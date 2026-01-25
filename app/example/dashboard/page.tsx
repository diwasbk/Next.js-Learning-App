"use client"

import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black px-6 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <header className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <Link
                        href="/logout"
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition font-medium"
                    >
                        Logout
                    </Link>
                </header>

                {/* Welcome Card */}
                <section className="mt-10">
                    <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold mb-2">Welcome 🎉</h2>
                        <p className="text-gray-400">
                            You are successfully logged in.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}