export interface Section {
  id: string; // URL slug: /software, /llms, /security
  name: string; // Display name: "Software Development"
  icon: string; // Icon path: "/assets/code.svg"
  description: string; // Section description
  quote?: string; // Optional quote for the section page
  technologies?: string[]; // Optional list of technologies related to the section
}

export const sections: Section[] = [
  {
    id: "software",
    name: "Software Development",
    icon: "/assets/code.svg",
    description:
      "\"If you can't explain it simply, you don't understand it well enough.\"",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    technologies: ["TypeScript", "React", "Node.js", "Astro", "TailwindCSS"],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "/assets/code.svg",
    description:
      "Building beautiful and functional user interfaces is my passion.",
    technologies: ["TypeScript", "React", "Node.js", "Astro", "TailwindCSS"],
  },
];

export function getSection(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}
