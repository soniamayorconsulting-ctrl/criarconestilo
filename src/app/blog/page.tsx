import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog · Criar con Estilo",
  description: "Todos los posts de Criar con Estilo.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Blog</h1>
      {posts.length === 0 ? (
        <p className="mt-6 text-ink/50">Todavía no hay posts publicados.</p>
      ) : (
        <div className="mt-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
