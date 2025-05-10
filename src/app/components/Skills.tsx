"use client";

import { skills } from "../data/data";

export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-background border border-foreground flex items-center justify-center mb-2">
                <IconComponent size={32} />
              </div>
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
