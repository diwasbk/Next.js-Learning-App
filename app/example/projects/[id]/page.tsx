import Link from "next/link";

export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Project{" "}
                            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                #{id}
                            </span>
                        </h1>
                        <p className="text-gray-400">
                            Detailed overview of the project, including features,
                            technologies, and implementation details.
                        </p>
                    </div>

                    {/* Project Info Card */}
                    <div className="rounded-xl border border-gray-700 bg-gray-900/60 p-8 mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            Project Description
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            This project focuses on building a modern, scalable, and
                            user-friendly application using the latest web technologies.
                            It demonstrates clean UI design, efficient backend logic,
                            and best development practices.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
                        <Link href={"https://openuserprofile.onrender.com/"}>
                        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold cursor-pointer">
                            Live Demo
                        </button>
                        </Link>

                        <button className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition font-semibold">
                            View Source Code
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}