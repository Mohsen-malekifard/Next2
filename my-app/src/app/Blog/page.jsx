import data5 from "@/app/lib/data"; // یا: { data5 } اگر named export باشه
import BlogCards from "@/components/BlogCards";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1 style = {{"fontSize" : "50px"}}>Blog Page</h1>
      <BlogCards/>
    </>
  )
}