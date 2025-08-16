import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-indigo-600">My Blog</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover insightful articles, tutorials, and stories that inspire.  
          Stay updated with the latest posts from the world of tech, coding, and creativity.
        </p>

        {/* Hero Image */}
        <div className="mt-8">
          {/* <Image
            src="../../public/1.jpeg"
            alt="Blogging workspace"
            width={1200}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full h-[300px] sm:h-[450px]"
          /> */}
        </div>

        {/* CTA Button */}
        <Link
          href="/Blog"
          className="inline-block mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:scale-105 transform transition duration-300"
        >
          Explore All Blogs →
        </Link>
      </section>

      {/* Blog Preview Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Latest Articles
        </h2>
        <BlogCard />

        <div className="text-center">
          <Link
            href="/Blog"
            className="mt-10 inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-500 transition duration-300"
          >
            Show More Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}
