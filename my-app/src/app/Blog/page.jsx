import {data} from "@/app/lib/data";

export default function Blog() {
    return (
        data.map(a => {
            <h1>{a.title}</h1>
        })
    )
}

