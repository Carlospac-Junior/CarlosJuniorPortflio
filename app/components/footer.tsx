import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-700/40 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="text-sm text-gray-400">
            © {currentYear} Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
