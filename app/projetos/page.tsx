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
    title: "Portfólio Pessoal",
    role: "Web",
    description:
      "Portfólio pessoal moderno e responsivo construído com as tecnologias mais atuais do mercado.",
    image: "/assets/projectportifolio.svg",
    tech: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Bot WhatsApp",
    role: "Web",
    description:
      "Aplicação desktop para automação de WhatsApp desenvolvida com Electron e tecnologias web.",
    image: "/assets/projectbotwhatsapp.svg",
    tech: ["HTML", "CSS", "JavaScript", "Electron"],
  },
  {
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
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Web" | "Designer Gráfico" | "Game"
  >("All");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.role === activeFilter);

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
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Meus Projetos
          </h1>
          <p className="mt-4 text-gray-300/90 text-base md:text-lg max-w-2xl mx-auto">
            Uma seleção de trabalhos recentes. Clique para saber mais.
          </p>
        </div>

        {/* Abas de Filtro */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-gray-800/40 border border-gray-700/40 p-1.5 backdrop-blur-sm gap-1">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-10 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeFilter === "All"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/40"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("Web")}
              className={`px-10 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === "Web"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/40"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-globe"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              Web
            </button>
            <button
              onClick={() => setActiveFilter("Designer Gráfico")}
              className={`px-10 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === "Designer Gráfico"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/40"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
              </svg>
              Designer Gráfico
            </button>
            <button
              onClick={() => setActiveFilter("Game")}
              className={`px-10 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === "Game"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/40"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,6A5,5 0 0,1 22,11A5,5 0 0,1 17,16H7A5,5 0 0,1 2,11A5,5 0 0,1 7,6H17Z" />
              </svg>
              Game
            </button>
          </div>
        </div>

        {/* Slider de Projetos */}
        <div className="relative">
          {/* Gradientes laterais */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/70 to-transparent hidden md:block"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black/70 to-transparent hidden md:block"></div>

          {/* Botões de navegação */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-800/80 border border-gray-700/60 hover:bg-gray-700/80 text-white"
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
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-800/80 border border-gray-700/60 hover:bg-gray-700/80 text-white"
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

          {/* Faixa rolável */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth snap-x snap-mandatory pb-2 -mx-2 px-2 md:mx-0 md:px-0"
          >
            {filteredProjects.map((p, index) => (
              <article
                key={p.title}
                className="snap-start shrink-0 w-[calc((100%-2rem)/3)] min-w-[280px] rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/30 backdrop-blur-md overflow-hidden hover:border-gray-600/60 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagem */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={index < 3}
                  />
                  {/* Overlay gradiente no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Link externo do projeto */}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${p.title}`}
                      className="absolute top-2 right-2 h-9 w-9 rounded-full bg-gray-900/70 border border-gray-700/60 text-gray-200 flex items-center justify-center hover:bg-gray-800/80 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10 14L21 3" />
                        <path d="M15 3h6v6" />
                        <path d="M21 10v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-3 flex flex-col gap-2.5">
                  {/* Título e Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-500/30 text-blue-100 font-medium whitespace-nowrap">
                      {p.role}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300/90 text-xs leading-relaxed min-h-[2.25rem]">
                    {p.description}
                  </p>

                  {/* Tags de tecnologia */}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
