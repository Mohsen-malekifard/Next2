import data5 from "@/app/lib/data";
import Link from "next/link";

export default function BlogCards() {
    const blogs = data5;
    return (
        <>
            {data5.map((blog, index) => {
                <div>
                    <h2>{blog.title}</h2>
                    <Link href = {`Blog/${blog.title}`}>{blog.title}</Link>
                </div>
            })}
        </>
    )
}