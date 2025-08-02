import data5 from "@/app/lib/data";
import Link from "next/link";

export default function getDetails(params) {
    const found = data5.find((blog) => blog.id == params.id);
    return (
        <>
            <h1>{found.title}</h1>
            <h1>{found.context}</h1>
        </>
    )
}