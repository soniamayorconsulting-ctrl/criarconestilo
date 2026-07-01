export default function Footer() {
  return (
    <footer className="border-t border-sand">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-ink/50">
        © {new Date().getFullYear()} Criar con Estilo. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
