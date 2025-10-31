"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* Desktop: centered pill-style nav (visible md+) */}
      <div className="hidden md:flex container w-fit px-6 py-3 justify-center mx-auto border border-gray-700/50 bg-gray-900/30 backdrop-blur-md rounded-full mt-6">
        <nav aria-label="Menu principal">
          <ul className="flex items-center gap-12">
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
      </div>

      {/* Mobile: compact bar with brand and hamburger (visible <md) */}
      <div className="md:hidden w-full px-1 py-4 mx-auto mt-4 ">
        <div className="px-4 py-3 justify-center mx-auto border border-gray-700/50 bg-gray-900/30 backdrop-blur-md rounded-full mt-6">
          <ul className="flex justify-center items-center gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-lg block rounded text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                onClick={() => setOpen(false)}
                className="text-lg block rounded text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/projetos"
                onClick={() => setOpen(false)}
                className="text-lg block rounded text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/habilidades"
                onClick={() => setOpen(false)}
                className="text-lg block rounded text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Habilidades
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
