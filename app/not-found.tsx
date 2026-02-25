import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-gray-400 text-xl mb-8 text-center">
        Сторінку не знайдено. Можливо, вона була переміщена або видалена.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-4 text-white font-semibold rounded-xl transition-all text-center hover:text-purple-300"
        >
          На головну
        </Link>
        <Link
          href="/blog"
          className="px-8 py-4 border border-white/10 text-white font-semibold rounded-xl transition-all text-center hover:border-white/20"
        >
          До блогу
        </Link>
      </div>
    </div>
  );
}
