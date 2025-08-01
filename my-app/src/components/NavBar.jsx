import Link from "next/link"
export default function NavBar() {
    return (
        <nav style = {{padding : "30px", backgroundColor: "red"}}>
            <Link href = "/">Home Page</Link>
            <br />
            <Link href = "/Blog">Blog List</Link>
            <br />
            <Link href = "/About">About Page</Link>
        </nav>
    )
}