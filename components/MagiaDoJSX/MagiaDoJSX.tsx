export default function MagiaDoJSX() {
  const magia = <strong>HTML dentro de JavaScript!</strong>;
  const tecnologias = "React e Next.js";

  return (
    <div className="m-3 rounded-xl bg-blue-300 p-3">
      <p>Este é o meu componente MagiaDoJSX.</p>
      <p>Um componente é uma função que retorna JSX - {magia}.</p>
      <p>Os componentes são usados em {tecnologias}.</p>
    </div>
  );
}
