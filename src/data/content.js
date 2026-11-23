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
  { label: "Projects", href: "#projects" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export const lead = {
  kicker: "Front Page — Introduction",
  headline: "Between the Score and the Source",
  byline: "By Moritz Seppelt",
  paragraphs: [
    "I am a computer scientist with a B.Sc. in Applied Computer Science and an M.Sc. in Computer Science from Friedrich Schiller University Jena, where I finished with a thesis on why low-order models prevail in multivariate categorical distributions. In a life that runs in parallel rather than in sequence, I also compose: classical composition has become one of my strongest interests.",
    "The two pursuits share more than a desk. Counterpoint and control flow both reward patience with structure; a well-argued proof and a well-argued phrase both want to feel inevitable once you see them. This page is where both halves live, undivided.",
    "On the science side, I am drawn to where theoretical computer science meets mathematics: probability and information theory, and the theory behind machine learning. For now, though, the desk is folded away — I am taking a gap year in Central and South America with my girlfriend, travelling and volunteering in many different places along the way. From summer 2027 on, I would like to continue with a PhD, ideally in Germany, Austria, or Switzerland.",
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
      title: "Master's Thesis: Why Low-Order Models Prevail in Multivariate Categorical Distributions",
      subtitle: "M.Sc. Computer Science, Friedrich Schiller University Jena — graded 1.0, supervised by Prof. Joachim Giesen",
      when: "2025 – 2026",
      body: "From spin glasses to neurons, proteins, and court votes, models that only account for pairwise or other low-order interactions describe systems of many discrete parts surprisingly well. The thesis asks why, for multivariate categorical distributions, and examines the question from three angles. In the worst case, it proves a universal bound on the KL divergence a low-order model incurs, and shows that the bound is attained exactly by uniform distributions on orthogonal arrays from combinatorial design theory. On average, under a Dirichlet prior, the whole hierarchy of models looks equally easy. With finite samples, the error splits into bias and variance, giving a PAC-learnability guarantee whose sample complexity grows with the number of parameters. Together, these rule out the purely geometric explanations and narrow down where the answer has to lie.",
      link: { label: "PDF", href: import.meta.env.BASE_URL + "masters-thesis.pdf" },
    },
    {
      title: "Traktoros — HackHPI 2026 (Winner)",
      subtitle: "Hackathon project with Team undark",
      when: "2026",
      body: "A safety system for autonomous tractors: an image-quality check, object detection (Faster R-CNN / YOLO) and monocular depth estimation (MiDaS) feed a decision step that tells the tractor to stop, honk, steer, or carry on.",
      link: { label: "Code", href: "https://github.com/myryk31415/Traktoros" },
    },
    {
      title: "Seminar Paper: Stable Diffusion and Its Offspring",
      subtitle: "Advanced Methods in Computer Vision, Friedrich Schiller University Jena",
      when: "2024",
      body: "An overview of how latent diffusion models such as Stable Diffusion work, of follow-up research like ControlNet and Würstchen, and of their impact on artists and other fields.",
      link: { label: "Source", href: "https://github.com/Mioriarty/seminar-paper-text-to-image" },
    },
    {
      title: "Bachelor's Thesis: Reducing Integer Linear Programs to Shortest Path Problems",
      subtitle: "B.Sc. Applied Computer Science, Friedrich Schiller University Jena — graded 1.0, supervised by Prof. Joachim Giesen",
      when: "2024",
      body: "Revisits a method from Pachter and Sturmfels' Algebraic Statistics for Computational Biology that solves certain integer linear programs as shortest path problems on weighted graphs, and extends it from constraint matrices with equal column sums to ones whose column sums only need to be strictly positive.",
      link: { label: "Source", href: "https://github.com/Mioriarty/bachelor-thesis" },
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
      title: "Gute Zeiten, gute Zeiten.",
      subtitle: "for 2 flutes, 2 violins, viola, and bassoon.",
      when: "2026",
      body: "A short, easy sextet for amateur musicians.",
      link: { label: "Score", href: import.meta.env.BASE_URL + "scores/gute-zeiten.pdf" },
    },
    {
      title: "Sinfonische Dichtung",
      subtitle: "for symphony orchestra: 2.2.2.2 – 4.2.2.1 – timp.perc, piano – str",
      when: "2025 – 2026",
      body: "My first symphonic piece, composed for and performed by the Freie Orchester Jena — and the first of my pieces to be performed on stage.",
      link: { label: "Score excerpt", href: import.meta.env.BASE_URL + "scores/sinfonische-dichtung.pdf" },
    },
    {
      title: "Alternate Film Score for 'The Grand Budapest Hotel'",
      subtitle: "for symphony orchestra, not optimized for performance.",
      when: "2025 – 2026",
      body: "New music for the scene that introduces the main characters, written as a guest student in the seminar “Kompositionstechniken der Filmmusik” at the University of Music Franz Liszt Weimar. It is built on leitmotifs: a deliberately old-fashioned waltz for the faded hotel, a snare-drum motif for the concierge role, and themes for Monsieur Gustave, Madame D., and young Zero. The write-up also covers where the music competes with the film instead of serving it.",
      link: { label: "Write-up & score (German)", href: import.meta.env.BASE_URL + "scores/grand-budapest-hotel.pdf" },
    },
    {
      title: "Regenwörter",
      subtitle: "for mezzo-soprano and piano, on a poem by Rose Ausländer.",
      when: "2025",
      body: "My first art song (Kunstlied), written at the end of 2025 for a friend and me.",
      link: { label: "Score", href: import.meta.env.BASE_URL + "scores/regenwoerter.pdf" },
    },
    {
      title: "Trio Absurdo",
      subtitle: "for flute, horn, and viola.",
      when: "2025",
      body: "One movement composed for friends of mine.",
      link: { label: "Score", href: import.meta.env.BASE_URL + "scores/trio-absurdo.pdf" },
    },
    {
      title: "Rondo",
      subtitle: "for flute and viola.",
      when: "2024",
      body: "A four-movement piece full of different motives and themes.",
      link: { label: "Score", href: import.meta.env.BASE_URL + "scores/rondo.pdf" },
    },
  ],
};

export const projectsSection = {
  id: "projects",
  tag: "Section C — Current Personal Projects",
  title: "Current Personal Projects",
  subtitle: "Works in progress",
  intro: "Three side projects I am actively working on. All of them are openly vibe-coded, built largely together with AI coding assistants: partly because it is fun, and partly to stay on top of how software development is changing.",
  accent: "plain",
  layout: "grid",
  entries: [
    {
      title: "wandermäuse",
      subtitle: "Travel blog",
      when: "2026 –",
      body: "The blog for our year of travelling and volunteering in Central and South America. Each entry shows the route so far on a map, then the music composed at that stop, then the story and photos. Self-hosted, without tracking or third-party services.",
      links: [
        { label: "wandermaeuse.de", href: "https://wandermaeuse.de" },
        { label: "Code", href: "https://github.com/Mioriarty/wandermaeuse" },
      ],
    },
    {
      title: "sona",
      subtitle: "Language learning app",
      when: "2026 –",
      body: "A calm, offline-first app for learning vocabulary in any language pair: Leitner-box reviews, a Wordle mode, listening exercises with on-device voices, and optional AI-generated exercises, plus grammar drills (Spanish so far).",
      links: [{ label: "Open app", href: "https://mioriarty.github.io/sona/" }],
    },
    {
      title: "melina",
      subtitle: "Advanced ear training app",
      when: "2026 –",
      body: "An offline progressive web app for advanced ear training, covering interval hearing, dictation, harmony, counterpoint, and daily composition practice.",
      links: [
        { label: "Open app", href: "https://mioriarty.github.io/melina/" },
        { label: "Code", href: "https://github.com/Mioriarty/melina" },
      ],
    },
  ],
};

export const volunteeringSection = {
  id: "volunteering",
  tag: "Section D — Volunteering",
  title: "Volunteering",
  subtitle: "Past, present, and planned",
  groups: [
    {
      heading: "Central & South America, 2026 – 2027",
      entries: [
        {
          title: "Self-Sufficient Community",
          subtitle: "Yucatán, Mexico",
          when: "2026",
          body: "Volunteering in an almost self-sufficient community.",
        },
        {
          title: "Au Pair",
          subtitle: "Cabuya, Costa Rica",
          when: "Nov 2026",
        },
        {
          title: "Dental Assistant",
          subtitle: "Various places in Bolivia",
          when: "Mar 2027",
        },
        {
          title: "Horse Farm",
          subtitle: "Peru",
          when: "Apr 2027",
          body: "Helping on a farm that supports children with disabilities, including animal-assisted therapy.",
        },
      ],
    },
    {
      heading: "Music",
      entries: [
        {
          title: "Freies Orchester Jena",
          when: "since 2024",
          body: "Playing in the orchestra and helping organize its concerts and larger projects.",
        },
        {
          title: "Chamber Music Group",
          subtitle: "Jena",
          body: "Arranging and composing pieces for the group, and increasingly taking care of its organization.",
        },
        {
          title: "Orchestra Projects",
          body: "Among others, a tour with the STÜBAphilharmonie and the band Deine Freunde, and projects with the Collegium Musicum Weimar.",
        },
      ],
    },
    {
      heading: "Earlier",
      entries: [
        {
          title: "Ecological Greenhouse",
          subtitle: "Galicia, Spain",
          when: "2025",
          body: "Helping build an ecological greenhouse over the summer.",
        },
        {
          title: "European Voluntary Service",
          subtitle: "Litija, Slovenia",
          when: "2019 – 2020",
          body: "Assisting at a primary school (grades 1 to 9) and a youth centre, where I started a programming course. Now and then I accompanied a pupils' choir.",
        },
      ],
    },
  ],
};

export const cvSection = {
  id: "cv",
  tag: "Section E — Curriculum Vitae",
  title: "Curriculum Vitae",
  subtitle: "The record, in brief",
  groups: [
    {
      heading: "Education",
      entries: [
        {
          title: "M.Sc. Computer Science",
          subtitle: "Friedrich Schiller University Jena",
          when: "2023 – 2026",
          body: "Final grade 1.0. Thesis: “Why Low-Order Models Prevail in Multivariate Categorical Distributions” (1.0).",
        },
        {
          title: "B.Sc. Applied Computer Science",
          subtitle: "Friedrich Schiller University Jena",
          when: "2020 – 2024",
          body: "Final grade 1.0. Thesis: “Reducing Integer Linear Programs to Shortest Path Problems” (1.0).",
        },
        {
          title: "Training as a Systemic Coach",
          subtitle: "System Worx, Munich",
          when: "2022 – 2023",
          body: "Coaching, team development, and organizational development.",
        },
      ],
    },
    {
      heading: "Experience",
      entries: [
        {
          title: "Web Development",
          subtitle: "Gerda-Taro-Schule, Leipzig",
          when: "since 2017",
          body: "Developing and maintaining the school's website for its extracurricular activities, such as course choices and attendance. Started as a team effort; I now run it on my own. (React, PHP, MySQL)",
        },
        {
          title: "Internship, IT Security",
          subtitle: "Accenture, Vienna",
          when: "2023 – 2024",
          body: "Four months in IT security, contributing to security assessments.",
        },
        {
          title: "Mathematics Tutor",
          subtitle: "Friedrich Schiller University Jena",
          when: "2021 – 2023",
          body: "Tutorials in linear algebra and numerical analysis for first- and fourth-semester students.",
        },
        {
          title: "Web Development",
          subtitle: "City of Leipzig",
          when: "2021",
          body: "A web application for the city's central technical management to manage building information and plan caretakers and technical staff. (JavaScript, PHP, MySQL)",
        },
      ],
    },
    {
      heading: "Awards & Grants",
      entries: [
        {
          title: "Winner, HackHPI",
          subtitle: "Hasso Plattner Institute, Potsdam",
          when: "2026",
          body: "Detecting people and other obstacles in tractor camera images with AI-based and classical methods (Traktoros, see above).",
        },
        {
          title: "Winner, Ocean Re-Creation Challenge",
          subtitle: "Trans-Mar-Tech, Kiel",
          when: "2022",
          body: "In an international student team at a one-week hackathon, we built software that automatically detects ghost nets (lost fishing nets on the seabed) in side-scan sonar data using classical computer vision. We later improved it with machine learning (Oct 2022 – Apr 2023).",
          link: { label: "Code", href: "https://github.com/Mioriarty/smarte_geisternetze" },
        },
        {
          title: "Honours Year Grant",
          body: "A grant for a proposed Honours Year research project, planned as a precursor to my Master's thesis. It did not develop into an independent, completed research project.",
        },
      ],
    },
    {
      heading: "Research Interests",
      entries: [
        {
          title: "Theory & Mathematics",
          body: "Theoretical computer science, mathematics and applied mathematics, probability theory, information theory.",
        },
        {
          title: "Machine Learning & AI",
          body: "Machine learning and artificial intelligence.",
        },
      ],
    },
    {
      heading: "Skills & Languages",
      entries: [
        {
          title: "Programming",
          body: "Very good: Python, React, JavaScript, C++, Java. Good: C#, Unity, PHP. Experience with computer vision and machine learning.",
        },
        {
          title: "Languages",
          body: "German — native. English — B2. Spanish — B1, currently learning while travelling and volunteering in Central and South America.",
        },
        {
          title: "Abroad",
          body: "Student exchanges to Brattleboro, Vermont, USA (2017) and Henrichemont, France (2015). My year in Slovenia is listed under Volunteering.",
          link: { label: "Volunteering", href: "#volunteering" },
        },
      ],
    },
    {
      heading: "Music",
      entries: [
        {
          title: "Piano",
          body: "Around twelve years of piano lessons.",
        },
        {
          title: "Viola",
          body: "Around seven years of viola lessons.",
        },
        {
          title: "Jugend musiziert",
          body: "Four participations: 2010, 2012, 2015, and 2019.",
        },
        {
          title: "Composition",
          body: "Classical composition, from chamber music to a piece for symphony orchestra.",
          link: { label: "Compositions", href: "#compositions" },
        },
      ],
    },
  ],
};

export const footerLinks = [
  { label: "Email", href: "mailto:" + getMail() },
  { label: "GitHub", href: "https://github.com/Mioriarty" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moritz-seppelt-093777251/" },
];
