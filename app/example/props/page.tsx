import ParentComponent from "./parent";

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-6">

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center m-9 
               bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 
               bg-clip-text text-transparent 
               drop-shadow-lg">
        Props in Next.js
      </h1>

      {/* Parent Component */}
      <ParentComponent />
    </main>
  );
}