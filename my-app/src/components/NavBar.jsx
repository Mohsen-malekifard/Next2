import Link from "next/link"
export default function NavBar() {
    return (
        <ul className="flex justify-center space-x-6 bg-red-600 py-4">
            <li><a href="/" className="text-white text-lg font-semibold hover:text-gray-300">Home Page</a></li>
            <li><a href="/Blog" className="text-white text-lg font-semibold hover:text-gray-300">Blog List</a></li>
            <li><a href="/About" className="text-white text-lg font-semibold hover:text-gray-300">About Page</a></li>
        </ul>

    )
}