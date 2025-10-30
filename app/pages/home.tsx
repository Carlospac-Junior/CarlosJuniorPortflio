"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "../components/loading-spinner";

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
    <section className="w-full h-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-6">
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-blue-900/30 p-1.5 ring-2 ring-blue-500/20 hover:ring-blue-400/40 transition-all duration-300">
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
          className="text-lg md:text-xl text-gray-400 font-light tracking-wide mb-4"
          style={{ opacity: 1, transform: "none" }}
        >
          Ola! Eu sou Carlos Junior
        </h3>

        <div
          className="bg-gradient-to-r from-blue-600/30 via-blue-700/25 to-blue-800/30 rounded-2xl px-6 py-3 md:px-12 md:py-6 border border-blue-500/30 transition-opacity duration-500 backdrop-blur-md mb-6 hover:border-blue-400/40 w-full sm:w-134"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <h1 className="text-4xl font-bold text-white whitespace-nowrap tracking-tight">
            {titles[currentTitleIndex]}
          </h1>
        </div>

        <p className="text-gray-300/90 max-w-2xl text-base md:text-lg leading-relaxed mb-8 px-4">
          Assumo cada projeto como uma jornada em mar aberto: cheia de
          descobertas, aprendizado e desafios.
        </p>

        <div className="flex items-center gap-5 mb-8">
          <a
            href="#"
            aria-label="Play Store"
            className="w-12 h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="w-12 h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="w-12 h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472,14.382c-0.297-0.149-1.758-0.867-2.03-0.967c-0.273-0.099-0.471-0.148-0.67,0.15c-0.197,0.297-0.767,0.966-0.941,1.164c-0.173,0.199-0.347,0.223-0.644,0.075c-0.297-0.15-1.255-0.463-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059c-0.173-0.297-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647c0.099-0.198,0.05-0.371-0.025-0.52C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.487-0.5-0.669-0.51C8.236,6.4,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.297-1.04,1.016-1.04,2.479c0,1.462,1.065,2.875,1.213,3.074c0.149,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.262,0.489,1.694,0.625c0.712,0.227,1.36,0.195,1.871,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.289,0.173-1.413C17.952,14.651,17.754,14.577,17.472,14.382z M12.016,21.796h-0.008c-1.776,0-3.516-0.478-5.031-1.378l-0.361-0.214l-3.741,0.982l0.999-3.648l-0.235-0.374c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898c1.866,1.869,2.893,4.352,2.892,6.993C21.902,17.362,17.467,21.796,12.016,21.796z M20.405,3.488C18.186,1.269,15.191,0.033,12.016,0.031C5.495,0.031,0.207,5.317,0.204,11.839c-0.001,2.023,0.527,3.998,1.528,5.739L0,23.999l6.573-1.723c1.678,0.915,3.568,1.398,5.491,1.399h0.005c6.52,0,11.808-5.287,11.811-11.809C23.882,8.69,22.626,5.708,20.405,3.488z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border-2 border-gray-600/60 bg-gray-800/30 flex items-center justify-center hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:scale-110 text-gray-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/contato"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-transparent hover:bg-blue-500/10 text-white px-8 py-2.5 border-2 border-gray-600/60 hover:border-blue-400 transition-all duration-300 font-medium text-sm w-full sm:w-44"
            aria-label="Ir para a página de contato"
          >
            Contato
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
          <a
            href="/curriculo.pdf"
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
