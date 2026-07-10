// All the actual words on the site live here.
// Edit this file to update your content — you should never need
// to touch the component files just to change text.

import { getMail } from "../scripts/mail";

export const site = {
  name: "Moritz Seppelt",
  tagline: "On Software, Sound, and the Space Between",
  city: "Jena, Germany",
  volume: "Vol. I — Est. 2026",
};

export const nav = [
  { label: "About", href: "#lead" },
  { label: "Research", href: "#research" },
  { label: "Compositions", href: "#compositions" },
  { label: "CV", href: "#" },
  { label: "Contact", href: "#contact" },
];

export const lead = {
  kicker: "Front Page — Introduction",
  headline: "Between the Score and the Source",
  byline: "By Your Name",
  paragraphs: [
    "I am a master's student in computer science, currently finishing a thesis on [your thesis topic], and — in a life that runs in parallel rather than in sequence — a composer working toward graduate study in classical composition.",
    "The two pursuits share more than a desk. Counterpoint and control flow both reward patience with structure; a well-argued proof and a well-argued phrase both want to feel inevitable once you see them. This page is where both halves live, undivided.",
  ],
};

export const researchSection = {
  id: "research",
  tag: "Section A — Computer Science",
  title: "Research & Thesis",
  subtitle: "Notes from the lab",
  accent: "cs",
  entries: [
    {
      title: "Master's Thesis: [Working Title]",
      when: "2025 – 2026",
      body: "A short, plain-language description of the problem you're solving, the approach, and why it matters.",
    },
    {
      title: "[Project or Publication Name]",
      when: "2024",
      body: "One line on what it was and what came of it — a repo, a paper, a talk.",
    },
    {
      title: "[Project or Publication Name]",
      when: "2023",
      body: "One line on what it was and what came of it.",
    },
  ],
};

export const compositionSection = {
  id: "compositions",
  tag: "Section B — Composition",
  title: "Compositions & Performances",
  subtitle: "Program notes",
  accent: "mus",
  entries: [
    {
      title: "Gute Zeiten, gute Zeiten, for 2 flutes, 2 violins, viola, and cello",
      when: "2026",
      body: "A short and easy sextett for amature musicians.",
    },
    {
      title: "Sinfonische Dichtung, for a typical Symphony Orchestra",
      when: "2025",
      body: "My first symphonic piece. Composed for and performed by the Freie Orchester, Jena. Instrumentation:  2.2.2.2 – 4.2.2.1 – timp.perc, piano, strings",
    },
    {
      title: "[Piece Title], for [instrumentation]",
      when: "2024",
      body: "Program note.",
    },
  ],
};

export const footerLinks = [
  { label: "Email", href: "mailto:" + getMail() },
  { label: "GitHub", href: "https://github.com/Mioriarty" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moritz-seppelt-093777251/" },
];
