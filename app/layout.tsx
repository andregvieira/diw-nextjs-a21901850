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
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-start gap-4 p-20">
        <header className="flex flex-col items-center">
          <h1>React & Next.js</h1>
          <nav className="flex gap-4">
            <Link href="/">Intro</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/caracteristicas">Características</Link>
            <Link href="/tecnologias">Tecnologias</Link>
          </nav>
        </header>

        <main className="min-h-[70vh] max-w-2xl rounded-2xl bg-blue-200 p-5">
          {children}
        </main>

        <footer>DIW {data.getFullYear()}</footer>
      </body>
    </html>
  );
}