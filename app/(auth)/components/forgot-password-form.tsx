import Link from "next/link";

export default function ForgotPasswordForm() {
    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center mb-2">
                    Forgot Password
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Enter your email to receive a password reset link
                </p>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
                    >
                        Send Reset Link
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    Remembered your password?{" "}
                    <Link href="/login" className="text-blue-400 hover:underline">
                        Back to Login
                    </Link>
                </p>
            </div>
        </main>
    );
}
