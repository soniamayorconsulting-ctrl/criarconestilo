import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  author: string;
  tags: string[];
};

export type Post = PostMeta & {
  content: string;
};

function readPostFile(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt ?? "",
    cover: data.cover,
    author: data.author ?? "Sara",
    tags: data.tags ?? [],
    content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  return readPostFile(slug);
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => readPostFile(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
