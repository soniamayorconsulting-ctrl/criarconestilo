import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Criar con Estilo
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Inicio
          </Link>
          <Link href="/blog" className="hover:text-zinc-950 dark:hover:text-zinc-50">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
