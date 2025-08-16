import data5 from "@/app/lib/data";
import Link from "next/link";

export default function getDetails({ params }) {
  const found = data5.find((blog) => blog.title === params.id);

  if (!found) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-zinc-950 to-gray-900 text-gray-300 p-8">
        <h1 className="text-5xl font-light mb-6 text-center tracking-wide">
          بلاگ مورد نظر یافت نشد.
        </h1>
        <Link
          href="/Blog"
          className="mt-6 px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300 font-medium text-lg shadow-md"
        >
          بازگشت به بلاگ
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-zinc-950 to-gray-900 text-gray-300 p-8">
      <div className="bg-zinc-800 rounded-3xl shadow-2xl p-10 max-w-4xl w-full border border-zinc-700">
        <h1 className="text-4xl font-thin text-gray-100 mb-6 text-center border-b border-gray-700 pb-5 tracking-wide">
          جزییات بلاگ برای کتاب <span className="font-semibold">{found.bookTitle}</span>
        </h1>
        <h2 className="text-2xl font-light text-gray-200 mt-8 mb-4">{found.bookTitle}</h2>
        <p className="text-base font-extralight leading-relaxed text-gray-400 text-justify">
          {found.description}
        </p>
        <Link
          href="/Blog"
          className="mt-10 inline-block px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300 font-semibold text-white shadow-lg"
        >
          بازگشت به بلاگ
        </Link>
      </div>
    </div>
  );
}
