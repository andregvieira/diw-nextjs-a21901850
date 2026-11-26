import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "React & Next.js",
  description: "Lab 9 de DIW - App em React e Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const data = new Date();

  return (
    <html lang="pt">
      <body className="flex min-h-screen flex-col items-center gap-6 bg-slate-100 p-10">
        <header className="flex flex-col items-center gap-2">
          <h1>React & Next.js</h1>
          <nav className="flex gap-4">
            <Link href="/" className="hover:underline">
              Início
            </Link>
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
            <Link href="/caracteristicas" className="hover:underline">
              Características
            </Link>
            <Link href="/tecnologias" className="hover:underline">
              Tecnologias
            </Link>
          </nav>
        </header>

        <main className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow">
          {children}
        </main>

        <footer>DIW {data.getFullYear()} · André Vieira</footer>
      </body>
    </html>
  );
}
