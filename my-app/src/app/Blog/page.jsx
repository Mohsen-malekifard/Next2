import data5 from "@/app/lib/data"; // یا: { data5 } اگر named export باشه
import Link from "next/link";

export default function Blog() {
  return (
    <ul>
      {data5.map((a) => (
        <li key={a.id}>
          <Link href = {`Blog/${a.title}`}>{a.title}</h1>
        </li>
      ))}
    </ul>
  );
}