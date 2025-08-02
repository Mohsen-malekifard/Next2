
import data5 from "@/app/lib/data";
import Link from "next/link";


export default function BlogCards() {


    return (
        <ul>
            {data5.map((blog, index) => (
                <li key = {index} >
                    <Link style = {{"backgroundColor" : "white", "color" : "black"}} href = {`Blog/${blog.title}`}>{blog.title}</Link>
                </li>
            ))}
        </ul>
    );
}