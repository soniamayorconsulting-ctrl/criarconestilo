import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Criar con estilo
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Ideas, recomendaciones y reflexiones honestas sobre maternidad,
          crianza y estilo de vida, sin perder la cabeza en el intento.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-block rounded-full bg-terracotta px-5 py-3 text-sm font-medium text-cream hover:bg-terracotta-dark"
        >
          Ver todos los posts
        </Link>
      </section>

      {posts.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sage">
            Últimos posts
          </h2>
          <div>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
