"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "../components/loading-spinner";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

const HomePage: React.FC = () => {
  const titles = [
    "Designer Gráfico",
    "Desenvolvedor de Jogos",
    "Desenvolvedor Front-end",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <section className="w-full h-full flex items-center justify-center mt-10 mb-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-6">
          <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-blue-900/30 p-1.5 ring-2 ring-blue-500/20 hover:ring-blue-400/40 transition-all duration-300">
            <Image
              src="/assets/carlosjunior.svg"
              alt="Foto de Carlos Junior"
              width={208}
              height={208}
              className="w-full h-full object-cover object-center block rounded-full"
              priority
            />
          </div>
        </div>

        <h3
          className="text-base md:text-xl text-gray-400 font-light tracking-normal mb-4"
          style={{ opacity: 1, transform: "none" }}
        >
          Ola! Eu sou Carlos Junior
        </h3>

        <div
          className="bg-gradient-to-r from-blue-600/30 via-blue-700/25 to-blue-800/30 rounded-2xl px-4 py-3 md:px-12 md:py-6 border border-blue-500/30 transition-opacity duration-500 backdrop-blur-md mb-6 hover:border-blue-400/40 w-full sm:w-134"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {/* On mobile keep the title slightly smaller to avoid awkward line breaks */}
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white tracking-tight">
            {titles[currentTitleIndex]}
          </h1>
        </div>

        <div className="w-full sm:w-134 mb-9 px-4">
          <p className="text-gray-400 text-base md:text-lg italic">
            Sou um desenvolvedor que vê o código como uma forma de arte digital.
            Entre linhas de lógica e pixels, encontro o equilíbrio entre
            criatividade e precisão.
          </p>
        </div>

        {/* Social icons: on mobile they sit inside a single rounded "island" */}
        <div className="w-full flex justify-center mb-8">
          <div className="flex items-center gap-3 p-2 rounded-full bg-gray-900/30 border border-gray-700/40 md:bg-transparent md:border-0">
            <a
              href="https://github.com/Carlospac-Junior"
              aria-label="GitHub"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/carlospac-junior/"
              aria-label="LinkedIn"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
            >
              <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a
              href="https://www.instagram.com/carlosjr_designer/"
              aria-label="Instagram"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
            >
              <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a
              href="https://www.behance.net/carlospac"
              aria-label="Behance"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
            >
              <FaBehance className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a
              href="https://carlospac.itch.io/"
              aria-label="Itch.io"
              className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
            >
              <SiItchdotio className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="https://wa.me/5511986786634"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-transparent hover:bg-blue-500/10 text-white px-8 py-2.5 border-2 border-gray-600/60 hover:border-blue-400 transition-all duration-300 font-medium text-sm w-full sm:w-44"
            aria-label="Ir para a página de contato"
          >
            Contato
            <FaWhatsapp className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="/assets/CurrículoCarlosJunior.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-2.5 transition-all duration-300 font-semibold text-sm hover:scale-105 w-full sm:w-44"
            aria-label="Baixar currículo em PDF"
          >
            Currículo
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
