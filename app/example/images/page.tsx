"use client"
// Import static images from the app folder
import img1 from "@/app/assets/images/camera.jpg"

// Import Next.js Image Component (auto-optimization)
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Images in Next.js */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-12">
                        Images in{" "}
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Next.js
                        </span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            {/* Image imported from app folder (height & width are optional). */}
                            <h2 className="text-lg font-semibold mb-4 text-gray-400">
                                App Directory Image
                            </h2>

                            <Image className="rounded-lg"
                                src={img1}
                                alt="Camera"
                            />
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    );
}
