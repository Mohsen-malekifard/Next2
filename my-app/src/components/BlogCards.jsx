import data5 from "@/app/lib/data";
import Link from "next/link";

export default function BlogCards() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
      {data5.map((blog) => (
        <li
          key={blog.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            {/* Title */}
            <h2 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300">
              {blog.bookTitle}
            </h2>

            {/* Divider Line */}
            <div className="w-12 h-1 bg-indigo-500 rounded-full mb-4"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {blog.description.length > 150
                ? blog.description.slice(0, 150) + "..."
                : blog.description}
            </p>

            {/* Button */}
            <Link
              href={`/Blog/${blog.title}`}
              className="mt-6 inline-block bg-indigo-600 text-white font-medium rounded-lg px-5 py-2 text-center shadow-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Read More →
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
