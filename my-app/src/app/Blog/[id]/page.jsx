import data5 from "@/app/lib/data";
import Link from "next/link";

export default function getDetails({params}) {
    const found = data5.find((blog) => blog.title == params.id);
    return (
        <>
            <h1>{found.title}</h1>
            <h1>{found.context}</h1>
            <Link href = "../Blog">Back</Link>
        </>
    )
}