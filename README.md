<div align="center">

# Ayush Raj — Systems & Frontend Engineering Portfolio

A production-grade, editorial portfolio and technical case study hub built to showcase large-scale web architecture, CMS ecosystems, publishing pipelines, ad-tech diagnostics, and runtime migrations.

[![Live Demo](https://img.shields.io/badge/Live_Site-Vercel-00f0ff?style=for-the-badge&logo=vercel&logoColor=black)](https://ayush-portfolio-roan-rho.vercel.app/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[Explore Live Portfolio](https://ayush-portfolio-roan-rho.vercel.app/) · [Report Bug / Feedback](https://github.com/ayushraj382/Ayush_Portfolio/issues)

</div>

---

## 📌 Overview

This repository hosts the source code for my portfolio, converted faithfully from an original high-fidelity Google Stitch system design. It eschews generic portfolio templates in favor of a dark, telemetry-inspired editorial aesthetic (`#121315`), typography driven by **Geist** and **JetBrains Mono**, interactive topology inspectors, and deep-dive technical post-mortems.

### Core Highlights
- **Interactive System Topology**: 7-node architecture inspector visualizing content ingestion, transformation pipelines, API layers, and distribution networks.
- **Deep-Dive Case Studies**: Four 8-section technical breakdowns covering context baselines, execution vectors, compatibility matrices, architectural challenges, direct contributions, and sequential verification gates.
- **Resilient Client-Side Routing**: SPA route rewriting configured via `vercel.json` with scroll-restoration hooks (`<ScrollToTop/>`).
- **Zero TypeScript Errors**: Type safety across models, components, navigation contracts, and test files.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Key Details |
| :--- | :--- | :--- |
| **Framework & Core** | React 18, TypeScript 5, Vite 6 | Fast HMR, strict type-checking, client-side SPA routing |
| **Styling & Tokens** | Tailwind CSS v3.4, PostCSS | Custom design tokens (`#121315` surface, `#00f0ff` cyan, `#4edea3` mint) |
| **Typography** | Geist Sans, JetBrains Mono | Editorial high-contrast hierarchy loaded via optimized Google Fonts |
| **Routing** | React Router DOM v6 | Nested sub-routes under `/case/*` with dynamic slug resolution |
| **Animation & Icons** | Framer Motion, Lucide React | Scroll-triggered reveals, interactive state switches, status indicators |
| **Testing** | Vitest, React Testing Library | Unit tests for routing boundaries, fallbacks, and 404 views |
| **Deployment** | Vercel Edge Network | Automated git-driven CI/CD with SPA rewrites |

---

## 📂 Project Structure

```text
Ayush_Portfolio/
├── public/                 # Favicons and static assets
├── src/
│   ├── components/
│   │   ├── case-study/     # 8 modular case study sub-components
│   │   │   ├── ArchitecturePipeline.tsx
│   │   │   ├── CaseStudyHeader.tsx
│   │   │   ├── CompatibilityMatrix.tsx
│   │   │   ├── ContextSection.tsx
│   │   │   ├── ContributionsSection.tsx
│   │   │   ├── SystemChallenges.tsx
│   │   │   ├── TakeawaySection.tsx
│   │   │   └── ValidationGates.tsx
│   │   ├── layout/         # Header, Footer, and Layout shell
│   │   ├── sections/       # 10 Homepage section components
│   │   └── ui/             # Badges, SectionLabels, and UI primitives
│   ├── data/               # Strongly-typed data schemas and content
│   │   ├── caseStudies.ts  # Full technical breakdowns for all 4 case studies
│   │   ├── experience.ts   # Career history and milestones
│   │   ├── navigation.ts   # Navigation paths and anchor links
│   │   ├── techStack.ts    # Engineering domains and tech stack tags
│   │   └── topology.ts     # Architecture topology nodes and metadata
│   ├── pages/
│   │   ├── HomePage.tsx    # Single-page assembly of all 10 sections
│   │   ├── CaseStudyPage.tsx # Dynamic case study detail template
│   │   └── NotFound.tsx    # Custom 404 error page
│   ├── test/               # Vitest suites and testing configuration
│   ├── App.tsx             # Route definitions and ScrollToTop wrapper
│   ├── index.css           # Global typography and Tailwind token directives
│   └── main.tsx            # Application root entry point
├── tailwind.config.ts      # Custom color tokens, font families, and spacing
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Edge SPA route rewrite rules
└── package.json
