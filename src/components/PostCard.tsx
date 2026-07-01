import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="border-b border-zinc-200 py-8 first:pt-0 last:border-0 dark:border-zinc-800">
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-950 group-hover:underline dark:text-zinc-50">
          {post.title}
        </h2>
      </Link>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
        {formatDate(post.date)}
      </p>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-3 inline-block text-sm font-medium text-zinc-950 hover:underline dark:text-zinc-50"
      >
        Leer más →
      </Link>
    </article>
  );
}
