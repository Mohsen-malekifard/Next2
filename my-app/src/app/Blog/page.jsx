import data5 from "@/app/lib/data"; // یا: { data5 } اگر named export باشه

export default function Blog() {
  return (
    <ul>
      {data5.map((a) => (
        <li key={a.id}>
          <h1>{a.title}</h1>
        </li>
      ))}
    </ul>
  );
}