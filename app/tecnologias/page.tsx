import Image from "next/image";
import tecnologias from "@/app/data/tecnologias.json";

interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function Page() {
  const lista: Tecnologia[] = JSON.parse(JSON.stringify(tecnologias));

  return (
    <>
      <h2>Tecnologias Exploradas</h2>

      <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {lista.map((tecnologia, i) => (
          <article
            key={i}
            className="flex flex-col items-center gap-2 rounded-xl bg-slate-50 p-4 text-center shadow"
          >
            <Image
              src={`/tecnologias/${tecnologia.image}`}
              alt={`Logótipo de ${tecnologia.title}`}
              width={64}
              height={64}
            />
            <h3 className="font-bold">{tecnologia.title}</h3>
            <p className="text-sm">{tecnologia.description}</p>
            <p className="text-yellow-500">
              {"★".repeat(tecnologia.rating)}
              {"☆".repeat(5 - tecnologia.rating)}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
