import data5 from "@/app/lib/data";
import Link from "next/link";

const found = data5.find(blog => blog.id < "5");

export default function BlogCard() {
    return (
        <ul className="grid grid-cols-2 gap-4">
            {found.map((blog, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-md">
                <h1 style = {{"fontSize" : "25px", "color" : "black", "fontWeight": "bold"}}>{blog.title}</h1>
                <button 
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                <Link 
                    className="  block text-lg font-semibold text-white "
                    href={`Blog/${blog.title}`}
                >
                Read more
                </Link>
                </button>
                </li>
            ))}
        </ul>

    )
}