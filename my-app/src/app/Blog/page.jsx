import {data} from "@/app/lib/data";

export default function Blog() {
    const blogs = data.map(a => {
        <h1>{a.title}</h1>
    })
    return (
        {blogs}
    )
}

