export default function Welcome() {
  return (
    <div
      id="container"
      className="flex items-center justify-center min-h-screen bg-gray-500"
    >
      <main className="text-center p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          DIGITAL FACTORY
        </h1>
        <img
          src="/background.svg"
          width="115"
          height="48"
          alt="Astro Homepage"
          className="mx-auto"
        />
        <p className="mt-4 text-gray-600">Tailwind CSS is now working!</p>
      </main>
    </div>
  );
}
