import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-sand">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-terracotta"
        >
          Criar con Estilo
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-ink/70">
          <Link href="/" className="hover:text-ink">
            Inicio
          </Link>
          <Link href="/blog" className="hover:text-ink">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
