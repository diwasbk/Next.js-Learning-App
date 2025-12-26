"use client";

export default function ContactForm() {

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">
            <div className="w-full max-w-3xl">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in{" "}
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className="text-gray-400">
                        Have a project or question? Let’s talk.
                    </p>
                </div>

                {/* Form */}
                <form className="bg-gray-900/60 backdrop-blur rounded-2xl p-8 space-y-6 border border-gray-800">

                    {/* Name */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            required
                            placeholder="Tell me about your project..."
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-500 transition cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}
