"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LoadingSpinner from "../components/loading-spinner";

type Project = {
  title: string;
  role: "Web" | "Mobile" | "Game" | "Designer Gráfico";
  description: string;
  image: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Site Suntour",
    role: "Web",
    description:
      "Site institucional desenvolvido para a empresa Suntour com HTML, CSS e JavaScript puro.",
    image: "/assets/projectsuntour.svg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://github.com/Carlospac-Junior/CarlosJuniorPortflio",
    title: "Portfólio Pessoal",
    role: "Web",
    description:
      "Portfólio pessoal moderno e responsivo construído com as tecnologias mais atuais do mercado.",
    image: "/assets/projectportifolio.svg",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    link: "https://github.com/Carlospac-Junior/CarlosJuniorPortflio",
    title: "Bot WhatsApp",
    role: "Web",
    description:
      "Aplicação desktop para automação de WhatsApp desenvolvida com Electron e tecnologias web.",
    image: "/assets/projectbotwhatsapp.svg",
    tech: ["HTML", "CSS", "JavaScript", "Electron"],
  },
  {
    link: "https://github.com/Carlospac-Junior/CarlosJuniorPortflio",
    title: "DarkCreep",
    role: "Game",
    description:
      "Tower defense em desenvolvimento com Unity, C# e assets criados no Illustrator.",
    image: "/assets/darkcreep.svg",
    tech: ["Unity", "C#", "Illustrator"],
  },
];

export default function ProjetosPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects;

  const sliderRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = Math.max(320, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <section className="w-full h-full container mx-auto px-6 py-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Meus Projetos
          </h1>
          <p className="mt-4 text-gray-300/90 text-base md:text-lg max-w-2xl mx-auto italic">
            Uma seleção de trabalhos recentes. Clique para saber mais.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden md:flex items-center justify-center absolute -left-14 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-gray-800/80 border border-gray-700/60 hover:bg-gray-700/80 text-white"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="hidden md:flex items-center justify-center absolute -right-14 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-gray-800/80 border border-gray-700/60 hover:bg-gray-700/80 text-white"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth snap-x snap-mandatory pb-2 -mx-2 px-2 md:mx-0 md:px-0"
          >
            {filteredProjects.map((p, index) => {
              const article = (
                <article
                  className="snap-start shrink-0 w-[calc((100%-3rem)/3)] min-w-[370px] rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/30 backdrop-blur-md overflow-hidden hover:border-gray-600/60 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 23vw, (min-width: 768px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-3 flex flex-col gap-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-500/30 text-blue-100 font-medium whitespace-nowrap">
                        {p.role}
                      </span>
                    </div>

                    <p className="text-gray-300/90 text-xs leading-relaxed min-h-[2.25rem]">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/30">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] text-gray-200 border border-gray-600/40 bg-gray-800/40 rounded-lg px-2 py-0.5 font-medium hover:bg-gray-700/40 hover:border-gray-500/60 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );

              return p.link ? (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${p.title}`}
                  className="group block"
                >
                  {article}
                </a>
              ) : (
                <div key={p.title}>{article}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
