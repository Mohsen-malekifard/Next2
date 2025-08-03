"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

// ⏳ تابعی برای تأخیر ساختگی در لود BlogCards
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const BlogCards = dynamic(
  () =>
    delay(2000).then(() => import("@/components/BlogCards")),
  {
    suspense: true,
  }
);

export default function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Blog Page</h1>

      <Suspense fallback={<Loading />}>
        <BlogCards />
      </Suspense>
    </div>
  );
}