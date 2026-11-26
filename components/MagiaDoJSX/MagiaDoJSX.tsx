export default function MagiaDoJSX() {
  const destaque = <strong>HTML dentro do JavaScript</strong>;
  const nome = "André";

  return (
    <section className="mt-4 rounded-xl bg-blue-100 p-4">
      <h2>A magia do JSX</h2>
      <p>Olá, {nome}! Este é o meu primeiro componente React.</p>
      <p>Com JSX posso escrever {destaque}.</p>
      <p>Também posso fazer contas: 2 + 3 = {2 + 3}</p>
    </section>
  );
}
