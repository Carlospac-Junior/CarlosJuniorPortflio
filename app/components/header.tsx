import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className="header container w-fit px-15 py-5 flex justify-center mx-auto border border-gray-700/50 bg-gray-900/30 backdrop-blur-md rounded-full mt-6">
      <header className="flex flex-col items-center">
        <nav aria-label="Menu principal">
          <ul className="flex justify-center items-center gap-12">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-medium"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/projetos"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-medium"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/habilidades"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base font-medium"
              >
                Habilidades
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
