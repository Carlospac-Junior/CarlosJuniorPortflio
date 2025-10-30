"use client";

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/loading-spinner";

type SkillLevel = "Aprendendo" | "Intermediario" | "Avançado";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Desenvolvedor Web",
    skills: [
      { name: "HTML", level: "Avançado" },
      { name: "CSS", level: "Avançado" },
      { name: "JavaScript", level: "Intermediario" },
      { name: "React", level: "Intermediario" },
      { name: "Tailwind", level: "Intermediario" },
      { name: "TypeScript", level: "Aprendendo" },
      { name: "Next.js", level: "Intermediario" },
    ],
  },
  {
    title: "Desenvolvedor de Jogos",
    skills: [
      { name: ".NET", level: "Aprendendo" },
      { name: "C++", level: "Aprendendo" },
      { name: "C#", level: "Intermediario" },
      { name: "Unity", level: "Intermediario" },
      { name: "Godot", level: "Aprendendo" },
      { name: "Photon", level: "Aprendendo" },
    ],
  },
  {
    title: "Designer",
    skills: [
      { name: "Photoshop", level: "Avançado" },
      { name: "Illustrator", level: "Intermediario" },
      { name: "Premiere", level: "Intermediario" },
      { name: "Canva", level: "Avançado" },
    ],
  },
];

const getPercentage = (level: SkillLevel): number => {
  switch (level) {
    case "Aprendendo":
      return 33;
    case "Intermediario":
      return 66;
    case "Avançado":
      return 100;
  }
};

const getColorClass = (level: SkillLevel): string => {
  switch (level) {
    case "Aprendendo":
      return "bg-yellow-500";
    case "Intermediario":
      return "bg-blue-500";
    case "Avançado":
      return "bg-green-500";
  }
};

export default function HabilidadesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <section className="w-full h-full container mx-auto px-4 py-2 overflow-y-auto">
      <div className="mb-6 text-center">
        <span className="inline-block rounded-full border border-gray-700/40 bg-black/20 px-3 py-1 text-xs text-gray-300">
          Conhecimentos
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
          Habilidades
        </h1>
        <p className="mt-2 text-gray-300">
          Minhas competências técnicas e nível de proficiência em cada área.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-gray-700/40 bg-black/20 backdrop-blur-sm p-5 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              {category.title}
            </h2>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => {
                const percentage = getPercentage(skill.level);
                const colorClass = getColorClass(skill.level);
                return (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${colorClass} rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
