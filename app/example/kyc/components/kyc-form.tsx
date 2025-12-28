"use client";

export default function KYCForm() {
    
    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">
            <div className="w-full max-w-3xl">
                {/* Heading */}
                <div className="text-center m-5">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        KYC{" "}
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Verification
                        </span>
                    </h1>
                    <p className="text-gray-400">
                        Please complete your identity verification
                    </p>
                </div>

                {/* Form */}
                <form className="bg-gray-900/60 backdrop-blur rounded-2xl p-8 space-y-6 border border-gray-800 mb-5">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your full name"
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
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* ID Type */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            ID Type
                        </label>
                        <select
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select ID Type</option>
                            <option value="citizenship">Citizenship</option>
                            <option value="passport">Passport</option>
                            <option value="driving_license">Driving License</option>
                        </select>
                    </div>

                    {/* ID Number */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            ID Number
                        </label>
                        <input
                            type="text"
                            placeholder="Enter ID number"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Address
                        </label>
                        <input
                            placeholder="Your current address"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-500 transition cursor-pointer"
                    >
                        Submit KYC
                    </button>
                </form>
            </div>
        </main>
    );
}
