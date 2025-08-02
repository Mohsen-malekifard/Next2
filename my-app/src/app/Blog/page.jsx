import data5 from "@/app/lib/data"; // یا: { data5 } اگر named export باشه
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {data5.map((blog, index) => (
            <li key = {index} >
                <Link style = {{"backgroundColor" : "white", "color" : "black"}} href = {`Blog/${blog.title}`}>{blog.title}</Link>
            </li>
        ))}
      </ul>
    </>
  )
}