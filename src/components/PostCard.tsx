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
    <article className="border-b border-sand py-8 first:pt-0 last:border-0">
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-xl font-semibold tracking-tight text-ink group-hover:text-terracotta">
          {post.title}
        </h2>
      </Link>
      <p className="mt-1 text-sm text-ink/50">{formatDate(post.date)}</p>
      <p className="mt-3 text-ink/70">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-3 inline-block text-sm font-medium text-terracotta hover:text-terracotta-dark"
      >
        Leer más →
      </Link>
    </article>
  );
}
