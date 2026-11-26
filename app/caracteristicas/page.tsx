"use client";

export default function Page() {
  const caracteristicas = [
    "JSX, sintaxe que mistura HTML e JS.",
    "Componentes, funções que retornam JSX.",
    "Componentes Reutilizáveis e Modulares.",
    "Roteamento Automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização Rápida e SEO Friendly.",
    "TypeScript Seguro e Escalável.",
    "Comunidade Ativa e Popularidade.",
  ];

  function handleClick(caracteristica: string) {
    alert(caracteristica);
  }

  return (
    <>
      <h2>Características do React e Next.js</h2>
      <ul>
        {caracteristicas.map((caracteristica, i) => {
          return (
            <li
              key={i}
              onClick={() => handleClick(caracteristica)}
              className="cursor-pointer hover:underline"
            >
              {caracteristica}
            </li>
          );
        })}
      </ul>
    </>
  );
}