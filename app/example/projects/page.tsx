export default function Page() {
    return (
        <div>
            <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            My{" "}
                            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A collection of projects I’ve worked on, showcasing my
                            experience in frontend, backend, and full stack development.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Project Card */}
                        <div className="rounded-xl border border-gray-700 bg-gray-900/60 p-6 hover:border-blue-500 transition">
                            <h3 className="text-xl font-semibold mb-2">
                                SkillConnect
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A full stack platform for connecting users based on skills,
                                featuring authentication, role-based access, and REST APIs.
                            </p>
                            <div className="flex gap-3">
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    Next.js
                                </span>
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    Node.js
                                </span>
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    MongoDB
                                </span>
                            </div>
                        </div>

                        {/* Project Card */}
                        <div className="rounded-xl border border-gray-700 bg-gray-900/60 p-6 hover:border-purple-500 transition">
                            <h3 className="text-xl font-semibold mb-2">
                                Learning App
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A Flutter-based learning application using modern state
                                management and clean architecture.
                            </p>
                            <div className="flex gap-3">
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    Flutter
                                </span>
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    Riverpod
                                </span>
                            </div>
                        </div>

                        {/* Project Card */}
                        <div className="rounded-xl border border-gray-700 bg-gray-900/60 p-6 hover:border-blue-500 transition">
                            <h3 className="text-xl font-semibold mb-2">
                                Portfolio Website
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A personal portfolio built with Next.js and Tailwind CSS,
                                focusing on performance and modern UI.
                            </p>
                            <div className="flex gap-3">
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    Next.js
                                </span>
                                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                                    Tailwind
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
