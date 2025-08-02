
import data5 from "@/app/lib/data";
import Link from "next/link";


export default function BlogCards() {


    return (
        <ul className="grid grid-cols-2 gap-4">
            {data5.map((blog, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-md">
                <Link 
                    className="block text-lg font-semibold text-black mb-4"
                    href={`Blog/${blog.title}`}
                >
                {blog.title}
                </Link>
                <button 
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                Read more
                </button>
                </li>
            ))}
        </ul>


    );
}