
import data5 from "@/app/lib/data";
import Link from "next/link";


export default function BlogCards() {


    return (
        <ul className="space-y-4">
            {data5.map((blog, index) => (
                <li key={index} className="rounded-lg shadow-lg overflow-hidden">
                <Link 
                    className="block px-4 py-2 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-200 rounded-md"
                    href={`Blog/${blog.title}`}
                >
                {blog.title}
                </Link>
                </li>
            ))}
        </ul>

    );
}