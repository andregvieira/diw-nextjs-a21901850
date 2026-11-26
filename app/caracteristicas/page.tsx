"use client";

export default function Page() {
  const caracteristicas = [
    "JSX: sintaxe que mistura HTML e JavaScript.",
    "Componentes: funções que retornam JSX.",
    "Componentes reutilizáveis e modulares.",
    "Roteamento automático e APIs.",
    "Hooks: useState, useEffect e useSWR.",
    "Renderização rápida e boa para SEO.",
    "TypeScript seguro e escalável.",
    "Comunidade ativa e muito popular.",
  ];

  function handleClick(caracteristica: string) {
    alert(`Escolheste: ${caracteristica}`);
  }

  return (
    <>
      <h2>Características do React e Next.js</h2>
      <p>Clica numa característica.</p>
      <ul>
        {caracteristicas.map((caracteristica, i) => (
          <li
            key={i}
            onClick={() => handleClick(caracteristica)}
            className="cursor-pointer hover:text-blue-700"
          >
            {caracteristica}
          </li>
        ))}
      </ul>
    </>
  );
}
