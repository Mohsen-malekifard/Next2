import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default function HomePage() {
    // function ClicktoLoading() {
        
    // }
    return (
        <>
            <h1 style = {{"fontSize" : "50px"}}>Welcome to my blog site</h1>
            <BlogCard/>
            <Link href = "Blog" className="mt-5 bg-yellow-400 px-4 py-2 mx-auto block text-center rounded">Show more</Link>


        </>
    )
}