export default function LandingPage() {
    return (
        <div>
            <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I&apos;m{" "}
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Diwas BK
                        </span>
                    </h1>

                    {/* Role */}
                    <p className="text-lg md:text-2xl text-gray-300 mb-6">
                        Full Stack Developer
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 mb-10 leading-relaxed">
                        I build modern, responsive, and scalable web applications using
                        React, Next.js, Node.js, and databases. Passionate about clean UI
                        and efficient backend systems.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold cursor-pointer">
                            View Projects
                        </button>

                        <button className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition font-semibold cursor-pointer">
                            Contact Me
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}