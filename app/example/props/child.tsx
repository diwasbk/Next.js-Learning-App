export default function ChildComponent(props: { name: string; role: string; interest: string }) {
    return (
        <main className="h-125 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6 rounded-2xl">
            <div className="max-w-xl text-center bg-gray-900/60 backdrop-blur-md p-10 rounded-2xl shadow-2xl border-2 border-gray-500">

                {/* Name */}
                <h1 className="text-4xl font-bold mb-4">
                    Hi, I&apos;m{" "}
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {props.name}
                    </span>
                </h1>

                {/* Role */}
                <p className="text-xl text-gray-300 mb-4">
                    {props.role}
                </p>

                {/* Interest */}
                <p className="text-gray-400 leading-relaxed">
                    {props.interest}
                </p>

            </div>
        </main>
    );
}