"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/loading-spinner";

export default function SobrePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <section className="w-full h-full container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-start">
        {/* Coluna da imagem (esquerda) */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="rounded-2xl border-2 border-gray-700/40 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/30 p-1.5 backdrop-blur-md hover:border-gray-600/60 transition-all duration-300">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <Image
                src="/assets/fotoabout.svg"
                alt="Foto de perfil"
                width={400}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Coluna de texto (direita) */}
        <div className="md:col-span-7 flex flex-col gap-3 overflow-y-auto max-h-[calc(100dvh-160px)] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className="text-center md:text-left mb-2">
            <h2 className="md:text-3xl font-bold text-white tracking-tight">
              Sobre mim
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          <div className="space-y-5 text-gray-300/90 text-base md:text-lg leading-relaxed">
            <p>
              Sou o Carlos Junior, desenvolvedor com foco em front-end,
              apaixonado por jogos e pelo universo do desenvolvimento web. Tenho
              2 anos de experiência na criação de sites e landing pages, sempre
              priorizando interfaces funcionais, responsivas e de alto
              desempenho.
            </p>
            <p>
              Atualmente, estou me especializando em React e Next.js, explorando
              o ecossistema do JavaScript e aprimorando minha base com
              TypeScript e Tailwind CSS. Também possuo conhecimento em HTML,
              CSS, Figma, Git e GitHub, com experiência em consumo de APIs e
              versionamento de código.
            </p>
            <p>
              Cursando Análise e Desenvolvimento de Sistemas, busco consolidar
              uma base técnica sólida que me prepare para atuar futuramente na
              área de desenvolvimento de jogos — unindo lógica, design e
              criatividade.
            </p>
            <p>
              Tenho facilidade em trabalhar tanto de forma independente quanto
              em equipe. Valorizo código limpo, boas práticas de desenvolvimento
              e uma excelente experiência do usuário. Em cada projeto, mantenho
              o foco em entregar soluções eficientes, escaláveis e visualmente
              atraentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
